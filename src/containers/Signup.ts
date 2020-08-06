import { Component } from '../modules/component'
import { SignupForm } from '../components/SignupForm/SignupForm'

const form = new SignupForm()

export class Signup extends Component {
    constructor() {
        super({
            form
        })
    }

    render() {
        return `
            <div class="wrapper">
                <div class="modal">
                    <div class="modal__header">
                        <img class="logo logo_size_s" src="./images/logo.svg" />
                    </div>
                    <div class="modal__content">
                        <span class="form-title">Регистрация</span>
                        {{h form}}
                    </div>
                </div>
            </div>
        `
    }
}