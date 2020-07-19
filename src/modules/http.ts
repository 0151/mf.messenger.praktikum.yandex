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

            xhr.onload = function() {
                resolve(true)
                //resolve(xhr.responseText)
            }
        
            xhr.onabort = reject
            xhr.onerror = reject
            xhr.ontimeout = reject

            xhr.open(method, url)

            if (method === Http.METHODS.GET || !data) {
                xhr.send()
            } else {
                xhr.send(data)
            }
        })
    }
}

export const http = new Http()