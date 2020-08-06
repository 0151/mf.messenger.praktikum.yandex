import { xhr, IXhr } from '..'
import { API_BASE_URL } from '../../constants/api'

export abstract class Api {
    protected _baseUrl: string
    protected _xhr: IXhr

    constructor() {
        this._baseUrl = API_BASE_URL
        this._xhr = xhr
    }
}