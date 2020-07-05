import Header from '../components/Header.js'
import Settings from '../components/Settings.js'
import SettingsForm from '../components/SettingsForm.js'
import Input from '../components/Input.js'
import Button from '../components/Button.js'
import AvatarControl from '../components/AvatarControl.js'
import Validate from '../utils/validate.js'

window.validate = new Validate()

validate.rule('passwordsEqual', value => {
    return value === passwordNew.value
})
validate.rule('passwordNew', value => {
    return value ? validate.test('min(5)', value) : true
})

const header = new Header('header', {})
header.render()
const settings = new Settings('settings', {})
settings.render()


const avatar = new AvatarControl('avatar', {
    name: 'avatar',
    avatar: './images/avatars/pushkin.jpg',
})

const name = new Input('name', {
    name: 'name',
    value: 'Александр',
    placeholder: 'Введите имя',
    rules: { required: 'Введите имя' },
})

const email = new Input('email', {
    name: 'email',
    value: 'frenchman@foo.bar',
    placeholder: 'Адрес электронной почты',
    rules: { email: 'Введите действительный электронной почты' },
})

const password = new Input('password', {
    name: 'password',
    type: 'password',
    placeholder: 'Ваш текущий пароль',
    rules: { required: 'Необходимо ввести текущий пароль' },
})

const passwordNew = new Input('passwordNew', {
    name: 'passwordNew',
    type: 'password',
    placeholder: 'Новый пароль',
    rules: {
        passwordNew: 'Не менее 5 символов'
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
    text: 'Сохранить',
    view: 'action'
})


const form = new SettingsForm('settingsForm', {}, [
    avatar,
    name,
    email,
    password,
    passwordNew,
    passwordConfirm,
    submit,
])

form.render()