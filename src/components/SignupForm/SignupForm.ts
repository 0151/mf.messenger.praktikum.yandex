import { Component } from '../../modules/component'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { router } from '../../modules/router'
import { validate } from '../../utils/validate'
import template from './SignupForm.handlebars'


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
            console.log(this.data)
            router.go('/chats')
        }
    }

    componentDidMount() {
        this.node.addEventListener('submit', this.handleSubmit.bind(this))
    }

    render() {
        return template
    }
}