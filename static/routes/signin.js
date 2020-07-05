import AuthWrapper from '../components/AuthWrapper.js'
import SigninForm from '../components/SigninForm.js'
import Input from '../components/Input.js'
import Button from '../components/Button.js'
import Validate from '../utils/validate.js'

window.validate = new Validate()
validate.rule('login', value => value === 'demo')

new AuthWrapper(document.body, {
    text: 'Войдите, чтобы продолжить'
}).render()

const login = new Input('login', {
    name: 'login',
    type: 'text',
    value: 'demo',
    placeholder: 'Введите логин',
    rules: { login: 'Неверный логин' },
})

const password = new Input('password', {
    name: 'password',
    type: 'password',
    placeholder: 'Введите пароль',
    rules: { required: 'Введите пароль' }
})

const submit = new Button('submit', {
    submit: true,
    text: 'Войти',
    view: 'action'
})

const form = new SigninForm('authForm', {}, [
    login,
    password,
    submit,
])
form.render()

const registerButton = new Button('register', {
    href: './signup.html',
    text: 'Зарегистрироваться',
    view: 'pseudo',
})
registerButton.render()