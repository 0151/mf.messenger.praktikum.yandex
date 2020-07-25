import { Component } from '../../modules/component'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { router } from '../../modules/router'
import { validate } from '../../utils/validate'

const login = new Input({
    name: 'login',
    placeholder: 'Придумайте логин',
    rules: {
        loginAvailable: 'Этот логин занят',
        required: 'Введите логин'
    }
})

validate.rule('loginAvailable', value => value !== 'demo')

const password = new Input({
    name: 'password',
    type: 'password',
    placeholder: 'Придумайте пароль',
    rules: {
        required: 'Введите пароль'
    }
})

const passwordConfirm = new Input({
    name: 'passwordConfirm',
    type: 'password',
    placeholder: 'Повторите пароль',
    rules: {
        signupEqualsPassword: 'Пароли должны совпадать'
    },
})

validate.rule('signupEqualsPassword', value => {
    if (!password.value) return true
    return value === password.value
})

const submit = new Button({
    text: 'Зарегистрироваться',
    view: 'action',
})

const register = new Button({
    text: 'Войти с паролем',
    view: 'pseudo',
    href: '/signin'
})

export class SignupForm extends Component {
    constructor() {
        super({
            login,
            password,
            passwordConfirm,
            submit,
            register,
        })
    }

    get data(): Record<string, unknown> {
        //@ts-ignore
        return Object.fromEntries(new FormData(this.node))
    }

    handleSubmit(event: Event): void {
        event.preventDefault()

        const hasErrors = [login, password, passwordConfirm].some(component => !component.validate())

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
                <div class="form-field">
                    {{h passwordConfirm}}
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