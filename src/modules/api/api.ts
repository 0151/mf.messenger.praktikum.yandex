import { xhr, IXhr, Response, CONTENT_TYPES } from '..'
import { API_BASE_URL } from '../../constants/api'

export class Api {
    protected _baseUrl: string
    protected _xhr: IXhr

    constructor() {
        this._baseUrl = API_BASE_URL
        this._xhr = xhr
    }
}

export const proceed = <T>(response: Response): Promise<T> =>
    new Promise((resolve, reject) => {
        switch (response.status) {
        case 200:
            resolve((response.contentType.indexOf(CONTENT_TYPES['application/json']) !== -1
                ? response.json
                : response.text) as T)
            break
        case 400:
            try {
                reject(response.json.message ?? response.json.reason)
            } catch(error) {
                reject(error)
            }
            break
        case 401:
        case 500:
            reject(response.text)
        }
    })