import { Component } from '../../modules/component'
import { router } from '../../modules/router'
import template from './Avatar.handlebars'

interface IAvatarProps {
    url?: string
    href?: string
    size: 's' | 'xl'
}

export class Avatar extends Component<IAvatarProps> {
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