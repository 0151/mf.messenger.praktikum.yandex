import { RECIEVE_CHATS, SELECT_CHAT } from '../constants/actionTypes'
import { ChatsResponse } from '../modules/api/models/chats'
import { Reducer } from '../modules/store'

export const chats: Reducer<ChatsResponse[]> = (state = [], action) => {
    switch (action.type) {
    case RECIEVE_CHATS: {
        const { 
            chats
        } = action

        return chats
    }
    default:
        return state
    }
}

export const current: Reducer<number> = (state = undefined, action) => {
    switch (action.type) {
    case SELECT_CHAT: {
        const { 
            id
        } = action

        return id
    }
    default:
        return state
    }
}