import { SELECT_CHAT, RECIEVE_CHATS } from '../constants/actionTypes'
import { ActionCreator } from '../modules/store'
import { ChatsResponse } from '../modules/api/models/chats'
import { chatsApi } from '../modules/api'

export const recieveChats: ActionCreator = (chats: ChatsResponse[]) => {
    return {
        type: RECIEVE_CHATS,
        chats
    }
}

export const loadChats = () => (dispatch) => {
    chatsApi
        .getChats()
        .then(chats => 
            dispatch({ type: RECIEVE_CHATS, chats})
        )
        .catch(error => {
            console.error(error)
        })
}

export const selectChat: ActionCreator = (id: number) => {
    return {
        type: SELECT_CHAT,
        id
    }
}