interface IRequestOptions {
    method: string
    data?: string
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

    request(url: string, options: IRequestOptions) {
        const {method, data} = options

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.onload = function() {
                resolve(JSON.parse(xhr.response))
            }
        
            xhr.onabort = xhr.onerror = xhr.ontimeout = reject

            xhr.open(<string>method, url)

            if (method === Http.METHODS.GET || !data) {
                xhr.send()
            } else {
                xhr.send(data)
            }
        })
    }
}

export const http = new Http()