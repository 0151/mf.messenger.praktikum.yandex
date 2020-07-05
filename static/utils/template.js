export const load = (path, resolve, reject) => {
    const request = new XMLHttpRequest()

    request.open('GET', path, true)

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            resolve(this.response)
        } else {
            reject()
        }
    }

    request.send()
}