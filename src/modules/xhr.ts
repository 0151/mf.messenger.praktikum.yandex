import { qs } from '../utils'

const METHODS = <const>{
    GET: 'GET',
    HEAD: 'HEAD',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
}

type RequestMethod = typeof METHODS[keyof typeof METHODS]

const CONTENT_TYPES = <const> {
    'application/json': 'application/json',
    'text/plain': 'text/plain',
    'application/x-www-form-urlencoded': 'application/x-www-form-urlencoded',
    'multipart/form-data': 'multipart/form-data',
    'application/xml': 'application/xml',
}

type ContentType = typeof CONTENT_TYPES[keyof typeof CONTENT_TYPES]

interface IRequestHeaders {
    'Content-Type'?: ContentType
    //TODO: ...
    [key: string]: string
}

type XMLHttpRequestBody = string | Document | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array>

type RequestBody = Record<string, unknown> | XMLHttpRequestBody

export interface IRequestOptions {
    method?: RequestMethod
    credentials?: boolean
    headers?: IRequestHeaders
    timeout?: number
    body?: RequestBody
}

export class Request {
    xhr: XMLHttpRequest
    url: string
    method: RequestMethod
    credentials?: boolean
    headers?: IRequestHeaders
    timeout?: number
    body: RequestBody


    constructor(url: string, options: IRequestOptions = {}) {
        this.xhr = new XMLHttpRequest()
        this.url = url
        this.method = options.method ?? METHODS.GET
        this.credentials = options.credentials ?? false
        this.headers = options.headers = {}
        this.timeout = options.timeout ?? 0
        this.body = options.body ?? {}
    }

    send(): Promise<Response> {
        let body: XMLHttpRequestBody = null
        let url: string = this.url

        if (this.method === METHODS.GET || this.method === METHODS.HEAD) {
            if (typeof this.body === 'object' && this.body !== null && !Array.isArray(this.body)) {
                url += qs(this.body as Record<string, unknown>)
            }
        } else {
            switch (typeof this.body) {
            case 'object':
                body = JSON.stringify(this.body)
                this.headers['Content-Type'] = this.headers['Content-Type'] ?? CONTENT_TYPES['application/json']
                break
            //TODO: ...
            default:
                body = this.body
            }
        }

        this.xhr.timeout = this.timeout
        this.xhr.withCredentials = this.credentials

        return new Promise((resolve) => {
            this.xhr.addEventListener('error', () => resolve(new Response(this.xhr)))
            this.xhr.addEventListener('timeout', () => resolve(new Response(this.xhr)))
            this.xhr.addEventListener('load', () => resolve(new Response(this.xhr)))

            this.xhr.open(this.method, url, true)

            //https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/setRequestHeader
            for (const [key, value] of Object.entries(this.headers)) {
                this.xhr.setRequestHeader(key, value)
            }

            if (this.method === METHODS.GET || this.method === METHODS.HEAD) {
                this.xhr.send()
            } else {
                this.xhr.send(body)
            }
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

    get raw(): unknown {
        return this.xhr.response
    }

    get text(): string {
        return this.xhr.responseText
    }

    get json(): Record<string, unknown> {
        try {
            console.log(this.xhr.responseText)
            return JSON.parse(this.xhr.responseText)
        } catch(error) {
            throw new Error(error)
        }
    }
}

export interface IXhr {
    [method: string]: (url: string, options?: Omit<IRequestOptions, 'method'>) => Promise<Response>
}

export const xhr: IXhr = {
    get(url, options = {}) {
        return new Request(url, {
            method: METHODS.GET,
            ...options
        }).send()
    },
    head(url, options = {}) {
        return new Request(url, {
            method: METHODS.HEAD,
            ...options
        }).send()
    },
    post(url, options = {}) {
        return new Request(url, {
            method: METHODS.POST,
            ...options
        }).send()
    },
    put(url, options = {}) {
        return new Request(url, {
            method: METHODS.PUT,
            ...options
        }).send()
    },
    patch(url, options = {}): Promise<Response> {
        return new Request(url, {
            method: METHODS.PATCH,
            ...options
        }).send()
    },
    delete(url, options = {}): Promise<Response> {
        return new Request(url, {
            method: METHODS.DELETE,
            ...options
        }).send()
    },
}