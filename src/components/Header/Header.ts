import { Component } from '../../modules/component'
import { router } from '../../modules/router'

export class Header extends Component {
    componentDidMount() {
        this.node.addEventListener('click', (event: Event) => {
            event.preventDefault()
            router.go('/chats')
        })
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