import { Component } from '../../modules/component.js'
import { router } from '../../modules/router.js'

interface IButtonProps {
    text: string,
    href?: string,
    type?: 'password' | 'text' | 'number'
    view?: 'action' | 'pseudo'
}

export class Button extends Component<IButtonProps> {
    go(): void {
        router.go(this.props.href)
    }

    componentDidMount() {
        if (this.props.href) {
            this.node.addEventListener('click', this.go.bind(this))
        }
    }

    render() {
        return `
            <{{#if href}}a{{else}}button{{/if}}
                {{#if href}}href="{{href}}"{{/if}}
                {{#if submit}}type="submit"{{/if}}
                class="button{{#if view}} button_view_{{view}}{{/if}}
            ">
                {{text}}
            </{{#if href}}a{{else}}button{{/if}}>
        `
    }
}