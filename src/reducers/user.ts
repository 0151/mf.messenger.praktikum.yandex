import { RECIEVE_USER_INFO } from '../constants/actionTypes'
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
