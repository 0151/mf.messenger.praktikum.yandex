import { uid } from '../utils/helpers.js'

export class Component {
    constructor(DOMNode, props, children = []) {
        this._DOMNode = DOMNode
        this._children = children

        this._id = uid()
    }

    setState(props) {
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                this.state[key] = props[key]
            }
        }

        this.render()
    }

    didMount() { }

    render() {
        const _template = Handlebars.compile(this.template)(this.state)
        if (!this._DOMNode) return _template

        const _DOMNode = typeof this._DOMNode === 'object'
            ? this._DOMNode
            : document.getElementById(this._DOMNode)

        if (_DOMNode.innerHTML === _template && !this._children.length) return
        _DOMNode.innerHTML = _template

        this._children.forEach(childComponent => {
            childComponent.render()
        })

        this.didMount()
    }
}

export default Component