import { Api } from './'
import { Response, IRequestOptions } from '../xhr'

class Auth extends Api {

    signin(params: { login: string, password: string }): Promise<Response> {
        const options: IRequestOptions  = {
            credentials: true,
            body: params
        }

        return this._xhr.post(`${this._baseUrl}/auth/signin`, options)
    }

    logout(): Promise<Response> {
        const options: IRequestOptions = {
            credentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return this._xhr.post(`${this._baseUrl}/auth/logout`, options)
    }
}

export const auth = new Auth()