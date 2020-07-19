import { Component } from '../../modules/component.js'
import { router } from '../../modules/router.js'

export class Header extends Component {
    go(): void {
        router.go('/chats')
    }

    componentDidMount() {
        this.node.addEventListener('click', this.go)
    }

    render() {
        return `
            <header class="header">
                <a href="/chats">
                    <img class="logo logo_size_s" src="./images/logo.svg" />
                </a>
            </header>
        `
    }
}