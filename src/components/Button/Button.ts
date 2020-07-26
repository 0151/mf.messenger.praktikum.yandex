import { Component } from '../../modules/component'
import { router } from '../../modules/router'

import './Button.scss'
import template from './Button.handlebars'

interface IButtonProps {
    text: string,
    href?: string,
    type?: 'password' | 'text' | 'number'
    view?: 'action' | 'pseudo'
}

export class Button extends Component<IButtonProps> {
    componentDidMount() {
        if (this.props.href) {
            this.node.addEventListener('click', (event: Event) => {
                event.preventDefault()
                router.go(this.props.href)
            })
        }
    }

    render() {
        return template
    }
}