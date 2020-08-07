import { Component } from '../../modules/component'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { router } from '../../modules/router'
import { validate } from '../../utils/validate'
import { authApi } from '../../modules/api'
import { loadChats } from '../../actions'
import { dispatch } from '../../store'

const login = new Input({
    name: 'login',
    value: 'yp-demo',
    placeholder: 'Введите логин',
    rules: {
        login: 'Неверный логин'
    }
})

validate.rule('login', value => value === 'yp-demo')

const password = new Input({
    name: 'password',
    type: 'password',
    value: 'yp-demo',
    placeholder: 'Введите пароль',
    rules: {
        required: 'Введите пароль'
    }
})

const submit = new Button({
    text: 'Войти',
    view: 'action',
})

const register = new Button({
    text: 'Зарегистрироваться',
    view: 'pseudo',
    href: '/signup'
})

export class SigninForm extends Component {
    constructor() {
        super({
            login,
            password,
            submit,
            register,
        })
    }

    get data(): {
        login: string,
        password: string,
        } {
        //@ts-ignore
        return Object.fromEntries(new FormData(this.node))
    }

    handleSubmit(event: Event): void {
        event.preventDefault()

        const hasErrors = [login, password].some(component => !component.validate())

        if (!hasErrors) {
            authApi
                .signin(this.data)
                .then(() => {
                    router.go('/chats')

                    dispatch(loadChats())

                    // authApi.getUserInfo()
                    //     .then(user => {
                    //         console.log(user)
                    //     })
                    //     .catch(error => {
                    //         console.error(error)
                    //     })

                })
                .catch(error => {
                    console.error(error)
                })
        }
    }

    componentDidMount() {
        this.node.addEventListener('submit', this.handleSubmit.bind(this))
    }

    render() {
        return `
            <form>
                <div class="form-field">
                    {{h login}}
                </div>
                <div class="form-field">
                    {{h password}}
                </div>
                <div class="form__button">
                    {{h submit}}
                </div>
                <div class="form__button">
                    {{h register}}
                </div>
            </form>
        `
    }
}