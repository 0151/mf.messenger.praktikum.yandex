import { queryStringify } from '../utils/queryStringify.js'

interface IRequestOptions {
    method: string
    data?: Record<string, unknown>
    [key: string]: unknown
}

class Http {
    static METHODS = {
        GET: 'GET',
        POST: 'POST',
    }

    get(url: string, options: Record<string, unknown> = {}) {
        return this.request(url, {method: Http.METHODS.GET, ...options})
    }

    post(url: string, options: Record<string, unknown> = {}) {
        return this.request(url, {method: Http.METHODS.POST, ...options})
    }

    request(url: string, options: IRequestOptions) {
        const {
            method,
            data,
        } = options

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            const error = () => reject('error')

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(xhr.response
                        ? JSON.parse(xhr.response)
                        : {}
                    )
                }
            }
            
            xhr.onabort = xhr.onerror = xhr.ontimeout = error

            if (method === Http.METHODS.GET || !data) {
                xhr.open(<string>method, `${url}${queryStringify(data)}`)
                xhr.send()
            } else {
                xhr.open(<string>method, url)
                xhr.setRequestHeader("Content-type", "application/json")
                xhr.send(JSON.stringify(data))
            }
        })
    }
}

export const http = new Http()