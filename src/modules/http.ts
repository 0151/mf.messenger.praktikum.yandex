//@ts-nocheck
class Http {
    static METHODS = {
        GET: 'GET'
    }

    get(url, options = {}) {
        return this.request(url, {...options, method: Http.METHODS.GET})
    }

    request(url, options = {}) {
        const {method, data} = options

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.open(method, url)

            xhr.onload = function() {
                resolve(xhr)
            }
        
            xhr.onabort = xhr.onerror = xhr.ontimeout = reject

            if (method === Http.METHODS.GET || !data) {
                xhr.send()
            } else {
                xhr.send(data)
            }
        })
    }
}

export const http = new Http()