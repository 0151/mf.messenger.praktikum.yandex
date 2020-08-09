import { RECIEVE_USER_INFO, USER_LOGIN } from '../constants/actionTypes'
import { authApi } from '../modules/api'

export const loadUserInfo = () => (dispatch) => {
    authApi
        .getUserInfo()
        .then(info => 
            dispatch({ type: RECIEVE_USER_INFO, info})
        )
        .catch(error => {
            console.error(error)
        })
}

export const login = () => {
    return {
        type: USER_LOGIN,
        loggedin: true
    }
}