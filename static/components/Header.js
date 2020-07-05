import Component from './Component.js'

export class Header extends Component {
    constructor(DOMNode, props, children) {
        super(DOMNode, props, children)
    }

    template = `
        <header class="header">
            <a href="./messenger.html">
                <img class="logo logo_size_s" src="./images/logo.svg" />
            </a>
        </header>
   `
}

export default Header