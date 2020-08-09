import { loadSprites } from './utils/sprites'
import { router } from './modules/router'
import { Error } from './containers/Error'
import { Signin } from './containers/Signin'
import { Messenger } from './containers/Messenger/Messenger'
import { Settings } from './containers/Settings'
import { Signup } from './containers/Signup'
import { store } from './store'
import { Route } from './modules/router'
import { authApi } from './modules/api'
import './styles/main.scss'

function checkAuth(route: Route) {
    if (route.guarded && !store.getState.loggedin) return false
    return true
}

router
    .use('/', Messenger, true)
    .use('/error', Error)
    .use('/signin', Signin)
    .use('/signup', Signup)
    .use('/settings', Settings, true)
    .beforeEach(checkAuth)
    .listen()

loadSprites('./images/sprites.svg')

authApi.logout()
//Для удобства тестирования авторизации во время разработки
//При использовании раскомментировать импорт