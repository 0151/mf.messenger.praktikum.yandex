import { Component } from '../modules/component.js'
import { SigninForm } from '../components/SigninForm/SigninForm.js'

export class Signin extends Component<{}> {
    constructor() {
        const form = new SigninForm()

        super({
            title: 'Вход',
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
                        <span class="form-title">{{title}}</span>
                        {{h form}}
                    </div>
                </div>
            </div>
        `
    }
}