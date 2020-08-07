import { Component } from '../../modules/component'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { router } from '../../modules/router'
import { validate } from '../../utils/validate'
import template from './SignupForm.handlebars'
import { authApi } from '../../modules/api'
import { SignUpRequest } from '../../modules/api/models/auth'
import { loadChats } from '../../actions'
import { loadUserInfo } from '../../actions/auth'
import { dispatch } from '../../store'

const firstName = new Input({
    name: 'firstName',
    placeholder: 'Имя',
    rules: {
        required: 'Введите имя'
    }
})

const secondName = new Input({
    name: 'secondName',
    placeholder: 'Фамилия',
    rules: {
        required: 'Введите фамилию'
    }
})


const login = new Input({
    name: 'login',
    placeholder: 'Придумайте логин',
    rules: {
        required: 'Введите логин'
    }
})

const email = new Input({
    name: 'email',
    placeholder: 'Адрес электронной почты',
    rules: {
        email: 'Неверный формат адреса'
    }
})

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
        signupEqualsPassword: 'Пароли должны совпадать',
    },
})

const phone = new Input({
    name: 'phone',
    placeholder: 'Номер мобильного телефона',
    rules: {
        phone: 'Неверный формат',
    }
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
            firstName,
            secondName,
            login,
            email,
            password,
            passwordConfirm,
            phone,
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

        const hasErrors = [
            firstName,
            secondName,
            login,
            email,
            password,
            passwordConfirm,
            phone,
        ].some(component => !component.validate())

        if (!hasErrors) {
            const params: SignUpRequest = {
                first_name: this.data.firstName as string,
                second_name: this.data.secondName as string,
                login: this.data.login as string,
                email: this.data.email as string,
                password: this.data.password as string,
                phone: this.data.login as string,
            }

            authApi
                .signup(params)
                .then(() => {
                    dispatch(loadChats())
                    dispatch(loadUserInfo())
                    router.go('/chats')
                })
                .catch(error => {
                    console.log(error)
                })
            
        }
    }

    componentDidMount() {
        this.node.addEventListener('submit', this.handleSubmit.bind(this))
    }

    render() {
        return template
    }
}