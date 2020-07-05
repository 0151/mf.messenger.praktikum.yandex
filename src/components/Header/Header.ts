import { Component } from '../../modules/component.js'

export class Header extends Component {
    render() {
        return `
            <header class="header">
                <a href="./messenger.html">
                    <img class="logo logo_size_s" src="./images/logo.svg" />
                </a>
            </header>
        `
    }
}