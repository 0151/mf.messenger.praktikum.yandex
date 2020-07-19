export const queryStringify = (object: Record<string, unknown> = {}): string => {
    if (typeof object !== 'object') throw new Error()

    const _depth = depth => depth.shift() + (depth.length ? `[${depth.join('][')}]` : '')

    const _flatten = (obj, depth = []) => {
        return Object.keys(obj).reduce(
            (acc, key) => {
                return typeof obj[key] === 'object'
                    ? acc + _flatten(obj[key], depth.concat([key]))
                    : acc + `${_depth(depth.concat([key]))}=${obj[key]}&`
            }, '?'
        )
    }

    return _flatten(object).slice(0, -1)
}
