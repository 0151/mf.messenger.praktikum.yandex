import { loadSprites } from './utils/sprites.js'
import { router } from './modules/router.js'
import { Error } from './pages/Error.js'
import { Signin } from './pages/Signin.js'
import { Messenger } from './pages/Messenger.js'
import { Settings } from './pages/Settings.js'
import { Signup } from './pages/Signup.js'

router
    .use('/chats', Messenger)
    .use('/error', Error)
    .use('/signin', Signin)
    .use('/signup', Signup)
    .use('/settings', Settings)
    .listen()

loadSprites('./images/sprites.svg')