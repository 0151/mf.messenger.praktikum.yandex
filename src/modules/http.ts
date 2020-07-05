export class Http {
    constructor() {

    }

    request(url, options) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            
            function requestListener () {
                resolve(this.responseText)
            }

            xhr.open('GET', url)
            xhr.send()
            xhr.onerror = reject
            xhr.onload = requestListener
        })
    }
}