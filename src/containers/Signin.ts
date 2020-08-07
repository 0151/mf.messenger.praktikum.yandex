import { Component } from '../modules/component'
import { SigninForm } from '../components/SigninForm/SigninForm'

const form = new SigninForm()

export class Signin extends Component {
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
                        <span class="form-title">Вход</span>
                        {{h form}}
                    </div>
                </div>
            </div>
        `
    }
}