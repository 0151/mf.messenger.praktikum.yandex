import Header from '../components/Header.js'
import Error from '../components/Error.js'

const header = new Header('header')
header.render()

const error = new Error('error', {
    code: '404',
    message: new Handlebars.SafeString('<strong>Страница не найдена.</strong> Вероятно, вы ошиблись в запросе.'),
})
error.render()