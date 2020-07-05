export const loadSprites = path => {

    const render = data => {
        document.body.insertAdjacentHTML('afterbegin', data)
    }

    let data
    const haslocalStorage = 'localStorage' in window

    if (haslocalStorage) {
        data = localStorage.getItem('yp-sprites')

        if (data) {
            render(data)

            return
        }
    }

    const request = new XMLHttpRequest()

    request.open('GET', path, true)
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            data = request.responseText
            render(data)

            if (haslocalStorage) {
                localStorage.setItem('yp-sprites', data)
            }
        }
    }
    request.send()
}