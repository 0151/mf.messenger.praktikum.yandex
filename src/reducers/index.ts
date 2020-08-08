import { combineReducers } from '../modules'
import { messages } from './messages'
import { chats, current } from './chats'
import { user } from './user'

export const rootReducer = combineReducers({
    messages,
    chats,
    user,
    current
})