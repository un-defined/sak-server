import { readdirSync } from 'fs'
import * as path from 'path'

const methods = ['get', 'post', 'del', 'put']

interface BP {
    httpMethod: string,
    constructor: any,
    handler: string,
}

interface BPs {
    [key: string]: Array<BP>
}

interface PF {
    [key: string]: string
}

class BluePrint {

    router: BPs = {}
    _prefix: PF = {}

    setRouter = (urlSuffix, blueprint) => {
        const prefix = this._prefix[blueprint.ClassName]
        const url = prefix ? prefix + urlSuffix : urlSuffix
        const _bp = this.router[url]

        if (_bp) {
            
        }
    }
}

export const bp = new BluePrint()