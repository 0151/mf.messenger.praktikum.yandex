import { combineReducers } from '../modules'
import { messages } from './messages'
import { chats } from './chats'
import { user } from './user'

export const rootReducer = combineReducers({
    messages,
    chats,
    user
})