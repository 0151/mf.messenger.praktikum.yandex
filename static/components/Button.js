import Component from './Component.js'

export class Button extends Component {
    constructor(DOMNode, props, children) {
        super(DOMNode, props, children)
        this.state = {
            ...props
        }
    }

    template = `
        <{{#if href}}a{{else}}button{{/if}}
            {{#if href}}href="{{href}}"{{/if}}
            {{#if submit}}type="submit"{{/if}}
            class="button{{#if view}} button_view_{{view}}{{/if}}
        ">
            {{text}}
        </{{#if href}}a{{else}}button{{/if}}>
    `
}

export default Button