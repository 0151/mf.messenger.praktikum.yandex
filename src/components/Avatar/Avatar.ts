import { Component } from '../../modules/component'
import { router } from '../../modules/router'

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
        return `
            <a class="settings-link avatar avatar_size_{{size}}"{{#if href}} href="{{ href }}{{/if}}">
                {{#if url}}<img class="avatar__image" src="{{ url }}" />{{/if}}
            </a>
        `
    }
}