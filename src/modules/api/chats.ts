import { Api, proceed } from './'
import { Response, IRequestOptions } from '../xhr'
import {
    ChatsResponse
} from './models/chats'

class ChatsApi extends Api {

    getChats(): Promise<ChatsResponse> {
        const options: IRequestOptions = {
            credentials: true,
        }

        return this._xhr
            .get(`${this._baseUrl}/chats`, options)
            .then(response => proceed(response))
    }

    createChat(params: { title: string }): Promise<Response> {
        const options: IRequestOptions = {
            credentials: true,
            body: params
        }

        return this._xhr
            .post(`${this._baseUrl}/chats`, options)
    }
}

export const chatsApi = new ChatsApi()