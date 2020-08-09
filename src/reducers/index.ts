import { combineReducers } from '../modules'
import { messages } from './messages'
import { chats, current } from './chats'
import { user, loggedin } from './user'

export const rootReducer = combineReducers({
    messages,
    chats,
    user,
    current,
    loggedin,
})