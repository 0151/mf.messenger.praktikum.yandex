import { RECIEVE_USER_INFO, USER_LOGIN } from '../constants/actionTypes'
import { UserResponse } from '../modules/api/models/auth'
import { Reducer } from '../modules/store'

export const user: Reducer<UserResponse> = (state = undefined, action) => {
    switch (action.type) {
    case RECIEVE_USER_INFO: {
        const { 
            info
        } = action

        return info
    }
    default:
        return state
    }
}

export const loggedin: Reducer<boolean> = (state = false, action) => {
    switch (action.type) {
    case USER_LOGIN: {
        const { 
            loggedin
        } = action

        return loggedin
    }
    default:
        return state
    }
}

