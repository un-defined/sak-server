const bp = require('./index')

const methods = ['get', 'post', 'del', 'put']

class Blueprint {
	constructor() {
		this.router = {}
		this._prefix = {}
		this.setRouter = this.setRouter.bind(this)
    this.getRoute = this.getRoute.bind(this)
    this.prefix = this.prefix.bind(this)
	}

	setRouter(urlSuffix, blueprint) {
		const prefix = this._prefix[blueprint.ClassName]
		const url = prefix ? prefix + urlSuffix : urlSuffix
		const _bp = this.router[url]

		if (_bp) {
			//check method if existed
			for (const index in _bp) {
				const object = _bp[index]
				if (object.httpMethod === blueprint.httpMethod) {
					throw new Error(
						`URL * ${object.httpMethod.toUpperCase()} ${url} * existed`
					)
				}
			}
			//not existed
			this.router[url].push(blueprint)
		} else {
			this.router[url] = []
			this.router[url].push(blueprint)
		}
	}

	getRoute() { return this.router }

	prefix(url, ctrName) {
		this._prefix[ctrName] = url
	}
	
}

methods.forEach(httpMethod => {
	Object.defineProperty(Blueprint.prototype, httpMethod, {
		get: function() {
			return (url, fn) => (target, propertyKey) => {
				this.setRouter(url, {
					httpMethod: httpMethod,
					constructor: target.constructor,
					handler: propertyKey,
					beforeFunction: fn,
					ClassName: target.constructor.name
				})
			}
		}
	})
})

const bpInstance = new Blueprint()

exports.RouterHandle = (app, options) => {
	const { router } = app
	const r = bpInstance.getRoute()

	if (options && options.prefix) {
		router.prefix(options.prefix)
	}

	Object.keys(r).forEach(url => {
		r[url].forEach(object => {
			router[object.httpMethod](url, async ctx => {
				// create a new Controller
				const instance = new object.constructor(ctx)

				// before hook
				const beforeRes = object.beforeFunc && (await object.beforeFunc(ctx, instance))
				if (beforeRes === false) return

				await instance[object.handler](ctx)
			})
		})
	})

}

exports.bp = bpInstance
exports.Post = bpInstance.post
exports.Get = bpInstance.get
exports.Put = bpInstance.put
exports.Del = bpInstance.del
exports.Prefix = bpInstance.prefix