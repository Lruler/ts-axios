

export const isDate = (val: any): val is Date => val instanceof Date;

export const isObject = (val: any): val is Object => val instanceof Object && val !== null;

