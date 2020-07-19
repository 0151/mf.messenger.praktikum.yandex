import { Component } from '../../modules/component.js'
import { Input } from '../Input/Input.js'
import { Button } from '../Button/Button.js'
import { AvatarInput } from '../AvatarInput/AvatarInput.js'
import { validate } from '../../utils/validate.js'
import { router } from '../../modules/router.js'

const avatar = new AvatarInput({
    avatar: './images/avatars/pushkin.jpg'
})

const name = new Input({
    name: 'name',
    value: 'Александр',
    placeholder: 'Введите имя',
    rules: {
        required: 'Введите имя'
    }
})

const email = new Input({
    name: 'email',
    value: 'frenchman@foo.bar',
    placeholder: 'Введите адрес электронной почты',
    rules: {
        required: 'Введите адрес электронной почты',
        email: 'Неверный формат',
    }
})

const oldPassword = new Input({
    name: 'oldPassword',
    type: 'password',
    value: 'demo',
    placeholder: 'Действующий пароль',
    rules: {
        validPassword: 'Пароль неверный',
        required: 'Необходимо заполнить',
    }
})

validate.rule('validPassword', value => value === 'demo')

const newPassword = new Input({
    name: 'newPassword',
    type: 'password',
    placeholder: 'Введите новый пароль',
})

const newPasswordConfirm = new Input({
    name: 'newPasswordConfirm',
    type: 'password',
    placeholder: 'Повторите новый пароль',
    rules: {
        settingsEqualPassword: 'Необходимо заполнить'
    }
})

validate.rule('settingsEqualPassword', value => value === newPassword.value)

const submit = new Button({
    text: 'Сохранить',
    view: 'action'
})

export class SettingsForm extends Component {
    constructor() {
        super({
            avatar,
            name,
            email,
            oldPassword,
            newPassword,
            newPasswordConfirm,
            submit,
        })
    }

    get data(): string {
        //@ts-ignore
        return Object.fromEntries(new FormData(this.node))
    }

    handleSubmit(event: Event) {
        event.preventDefault()

        const hasErrors = [
            name,
            email,
            oldPassword,
            newPassword,
            newPasswordConfirm
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
        return `
            <form>
                <div class="form-field">
                    {{h avatar}}
                </div>
                <div class="form-field">
                    {{h name}}
                </div>
                <div class="form-field">
                    {{h email}}
                </div>
                <div class="form-field">
                    {{h oldPassword}}
                </div>
                <div class="form-field">
                    {{h newPassword}}
                </div>
                <div class="form-field">
                    {{h newPasswordConfirm}}
                </div>
                <div class="form__button">
                    {{h submit}}
                </div>
            </form>
        `
    }
}