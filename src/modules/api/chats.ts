import { Api } from './'
import { Response, IRequestOptions } from '../xhr'
import {

} from './models/chats'

class ChatsApi extends Api {

    getChats(): Promise<Response> {
        const options: IRequestOptions = {
            credentials: true,
        }

        return this._xhr
            .get(`${this._baseUrl}/chats`, options)
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