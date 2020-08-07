import { xhr, IXhr, Response } from '..'
import { API_BASE_URL } from '../../constants/api'
import { rejects } from 'assert'

export class Api {
    protected _baseUrl: string
    protected _xhr: IXhr

    constructor() {
        this._baseUrl = API_BASE_URL
        this._xhr = xhr
    }
}

export const crutch = (response: Response) =>
    new Promise((resolve, reject) => {
        //
    })
