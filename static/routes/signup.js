import AuthWrapper from '../components/AuthWrapper.js'
import SignupForm from '../components/SignupForm.js'
import Input from '../components/Input.js'
import Button from '../components/Button.js'
import Validate from '../utils/validate.js'

window.validate = new Validate()
validate.rule('login', value => {
    //Проверяем доступность логина
    return true
})
validate.rule('passwordsEqual', value => value === password.value)

new AuthWrapper(document.body, {
    title: 'Регистрация'
}).render()

const email = new Input('email', {
    name: 'email',
    placeholder: 'Адрес электронной почты',
    rules: { email: 'Неверный формат электронной почты' },
})

const login = new Input('login', {
    name: 'login',
    placeholder: 'Придумайте логин',
    rules: {
        required: 'Введите логин',
        login: 'Этот логин уже занят'
    },
})

const password = new Input('password', {
    name: 'passwordNew',
    type: 'password',
    placeholder: 'Придумайте пароль',
    rules: {
        'min(5)': 'Не менее 5 символов'
        //Еще проверки
    }
})

const passwordConfirm = new Input('passwordConfirm', {
    name: 'passwordConfirm',
    type: 'password',
    placeholder: 'Повторите пароль',
    rules: {
        passwordsEqual: 'Пароли не совпадают'
    }
})

const submit = new Button('submit', {
    submit: true,
    text: 'Войти',
    view: 'action'
})

const form = new SignupForm('authForm', {}, [
    email,
    login,
    password,
    passwordConfirm,
    submit,
])
form.render()

const loginButton = new Button('loginButton', {
    href: '/signin.html',
    text: 'Войти с паролем',
    view: 'pseudo',
})
loginButton.render()