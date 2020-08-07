import { RECIEVE_CHATS } from '../constants/actionTypes'
import { ActionCreator, Action } from '../modules/store'
import { ChatsResponse } from '../modules/api/models/chats'

export const recieveChats: ActionCreator<any> = (chats: ChatsResponse[]) => {
    return {
        type: RECIEVE_CHATS,
        chats
    }
}