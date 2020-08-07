import { RECIEVE_USER_INFO } from '../constants/actionTypes'
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