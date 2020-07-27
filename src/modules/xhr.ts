type requestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
type requestContentType = 'text/json' | 'application/json' | 'text/plain'

export interface IRequestOptions {
    baseUrl?: string
    method?: requestMethod
    headers?: Record<string, string>
    withCredentials?: boolean
    contentType?: requestContentType
    responseType?: XMLHttpRequestResponseType
    data?: Record<string, unknown>
    timeout?: number
}

export class Request {
    method: requestMethod
    url: string
    data: Record<string, unknown>
    contentType: requestContentType
    responseType: XMLHttpRequestResponseType
    xhr: XMLHttpRequest


    constructor(url: string, options: IRequestOptions = {}) {
        this.method = options.method ?? 'GET'
        this.url = url
        this.data = options.data ?? {}
        this.contentType = options.contentType
        this.responseType = options.responseType

        this.xhr = new XMLHttpRequest()
    }

    send(): Promise<Response> {
        return new Promise((resolve, reject) => {
            this.xhr.addEventListener('error', () => reject('Error'))
            this.xhr.addEventListener('load', () => resolve(new Response(this.xhr)))

            this.xhr.open(this.method, this.url, true)
            this.xhr.send()
        })
    }
}

export class Response {
    xhr: XMLHttpRequest

    constructor(xhr: XMLHttpRequest) {
        this.xhr = xhr
    }

    get ok(): boolean {
        return this.xhr.status >= 200 && this.xhr.status < 400
    }

    json(): Promise<object> {
        return this.xhr.getResponseHeader('Content-Type') === 'application/json'
            ? Promise.resolve(JSON.parse(this.xhr.response))
            : Promise.reject('Error')
    }
}

export const xhr = {
    get(url: string, options: Omit<IRequestOptions, 'method'> = {}): Promise<Response> {
        return new Request(url, {method: 'GET', ...options}).send()
    },
    post(url: string, options: Omit<IRequestOptions, 'method'> = {}): Promise<Response> {
        return new Request(url, {method: 'POST', ...options}).send()
    }
}