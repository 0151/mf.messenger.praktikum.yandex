import { RECIEVE_CHATS } from '../constants/actionTypes'
import { ChatsResponse } from '../modules/api/models/chats'
import { Reducer } from '../modules/store'

export const chats: Reducer<ChatsResponse[]> = (state = [], action) => {
    switch (action.type) {
    case RECIEVE_CHATS: {
        const { 
            chats
        } = action

        return [
            chats
        ]
    }
    default:
        return state
    }
}
