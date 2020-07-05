import { Component } from '../modules/component.js'
import { SettingsForm } from '../components/SettingsForm/SettingsForm.js'
import { Header } from '../components/Header/Header.js'

export class Settings extends Component {
    constructor() {
        const header = new Header()
        const form = new SettingsForm()

        super({
            header,
            form
        })
    }

    render() {
        return `
            <div>
                {{h header}}
                <div class="settings">
                    <div class="settings__inner">
                        <h1 class="settings__title">
                            Ваш профиль
                        </h1>
                        {{h form}}
                    </div>
                </div>
            </div>
        `
    }
}