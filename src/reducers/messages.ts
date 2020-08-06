import { PUSH_MESSAGE } from '../constants/actionTypes'
import { Reducer } from '../modules/store'
import { Message, MessagesAction } from '../actions/messages'

type MessagesState = Message[]

export const messages: Reducer<MessagesState, MessagesAction> = (state = [], action) => {
    switch (action.type) {
    case PUSH_MESSAGE: {
        const {
            message
        } = action

        return [
            ...state,
            message
        ]
    }
    default:
        return state
    }
}
