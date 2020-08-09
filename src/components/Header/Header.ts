import { Component } from '../../modules/component'
import { router } from '../../modules/router'

export class Header extends Component {
    componentDidMount() {
        this.node.addEventListener('click', (event: Event) => {
            event.preventDefault()
            router.go('/')
        })
    }

    render() {
        return `
            <header class="header">
                <a href="/">
                    <img class="logo logo_size_s" src="./images/logo.svg" />
                </a>
            </header>
        `
    }
}