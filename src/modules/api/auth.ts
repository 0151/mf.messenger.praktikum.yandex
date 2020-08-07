import { Api } from './'
import { Response, IRequestOptions } from '../xhr'
import {
    SignInRequest,
    SignUpRequest,
    //UserResponse,
} from './models/auth'



class AuthApi extends Api {

    signin(params: SignInRequest) {
        const options: IRequestOptions = {
            credentials: true,
            body: params
        }

        return this._xhr
            .post(`${this._baseUrl}/auth/signin`, options)
    }

    signup(params: SignUpRequest): Promise<Response> {
        const options: IRequestOptions = {
            credentials: true,
            body: params
        }

        return this._xhr
            .post(`${this._baseUrl}/auth/logout`, options)
    }

    getUserInfo(): Promise<Response> {
        const options: IRequestOptions = {
            credentials: true,
        }

        return this._xhr
            .get(`${this._baseUrl}/auth/user`, options)
    }

    logout(): Promise<Response> {
        const options: IRequestOptions = {
            credentials: true,
        }

        return this._xhr
            .post(`${this._baseUrl}/auth/logout`, options)
    }
}

export const authApi = new AuthApi()