import { loadSprites } from './utils/sprites'
import { router } from './modules/router'
import { Error } from './containers/Error'
import { Signin } from './containers/Signin'
import { Messenger } from './containers/Messenger/Messenger'
import { Settings } from './containers/Settings'
import { Signup } from './containers/Signup'
import { authApi, chatsApi } from './modules/api'
import { dispatch, store } from './store'
import { recieveChats } from './actions'
import './styles/main.scss'

router
    .use('/chats', Messenger)
    .use('/error', Error)
    .use('/signin', Signin)
    .use('/signup', Signup)
    .use('/settings', Settings)
    .listen()

loadSprites('./images/sprites.svg')

authApi.logout()