import { Component } from '../../modules/component.js'
import { Input } from '../Input/Input.js'
import { Button } from '../Button/Button.js'
import { router } from '../../modules/router.js'
import { validate } from '../../utils/validate.js'

const login = new Input({
    name: 'login',
    value: 'demo',
    placeholder: 'Введите логин',
    rules: {
        login: 'Неверный логин'
    }
})

validate.rule('login', value => value === 'demo')

const password = new Input({
    name: 'password',
    type: 'password',
    value: 'demo',
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
})

export class SigninForm extends Component<{}> {
    constructor() {
        super({
            login,
            password,
            submit,
            register,
        })
    }

    get data() {
        //@ts-ignore
        return Object.fromEntries(new FormData(this.node))
    }

    handleSubmit(event) {
        event.preventDefault()

        const hasErrors = [login, password].some(component => !component.validate())

        if (!hasErrors) {
            console.log(this.data)
            router.go('/chats')
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