import { combineReducers } from '../modules'
import { messages } from './messages'
import { chats } from './chats'

export const rootReducer = combineReducers({
    messages,
    chats
})