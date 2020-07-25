import { loadSprites } from './utils/sprites'
import { router } from './modules/router'
import { Error } from './pages/Error'
import { Signin } from './pages/Signin'
import { Messenger } from './pages/Messenger'
import { Settings } from './pages/Settings'
import { Signup } from './pages/Signup'

import './styles/main.scss'

router
    .use('/chats', Messenger)
    .use('/error', Error)
    .use('/signin', Signin)
    .use('/signup', Signup)
    .use('/settings', Settings)
    .listen()

loadSprites('./images/sprites.svg')