import { isDate, isObject } from "./util";

const encode = (val: string): string => {
    return encodeURIComponent(val)
}

export const buildURL = (url: string, params?: any): string => {
    if (!params) return url

    const parts: string[] = [];
    
    Object.keys(params).forEach(key => {
        const val = params[key];
        if (val === null || typeof val === 'undefined') return

        let values = [];
        if (Array.isArray(val)) {
            values = val
            key += '[]'
        } else values = [val]

        values.forEach(val => {
            if (isDate(val)) val.toISOString()
            else if (isObject(val)) JSON.stringify(val)
        })

        parts.push
    })
    return '1'
}
