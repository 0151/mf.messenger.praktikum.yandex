import { PUSH_MESSAGE } from '../constants/actionTypes'
import { ActionCreator, Action } from '../modules/store'

//TODO: Здесь этому интерфейсу не место
export interface Message {
    text: string,
    date?: string,
    own?: boolean
}

export interface MessagesAction extends Action {
    message: Message
}

export const pushMessage: ActionCreator<MessagesAction, [Message]> = message => {
    return {
        type: PUSH_MESSAGE,
        message
    }
}