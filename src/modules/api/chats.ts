import { Api, proceed } from './api'
import { IRequestOptions } from '../xhr'
import {
    ChatsResponse, CreateChatRequest
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

    createChat(params: CreateChatRequest): Promise<string> {
        const options: IRequestOptions = {
            credentials: true,
            body: params
        }

        return this._xhr
            .post(`${this._baseUrl}/chats`, options)
            .then(response => proceed(response))
    }
}

export const chatsApi = new ChatsApi()