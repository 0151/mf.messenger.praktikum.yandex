import { Component } from '../../modules/component.js'

interface IAvatarInputProps {
    avatar?: string
}

export class AvatarInput extends Component<IAvatarInputProps> {
    render() {
        return `
            <div class="avatar avatar_size_xl settings-avatar">
                <img class="avatar__image" src="{{avatar}}" />
                <input class="hidden" type="file" name="{{name}}"/>
            </div>
        `
    }

    componentDidMount() {
        this.node.addEventListener('click', function() {
            const control: HTMLInputElement = (<HTMLDivElement>this).querySelector('input[type="file"]')
            
            control.click()
        })
    }
}