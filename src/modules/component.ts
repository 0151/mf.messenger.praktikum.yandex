import { EventBus } from './eventBus.js' 
import { htmlToNode } from '../utils/dom.js'
import { uid } from '../utils/uid.js'

export abstract class Component<T extends object = {}> {
    static EVENTS = {
        INIT: 'init',
        FLOW_RENDER: 'flow:render',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
    }

    protected _node: Element = null
    protected _template: (props: T) => string
    eventBus = new EventBus()
    props: T

    constructor(props = {} as T) {
        this.props = this._createPropsProxy(props)
        //@ts-ignore
        this._template = Handlebars.compile(this.render())
        this._attachEvents()
        this.eventBus.emit(Component.EVENTS.INIT)
    }

    private _attachEvents() {
        this.eventBus.on(Component.EVENTS.INIT, this.init.bind(this))
        this.eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this))
        this.eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
        this.eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    }

    init(): void {
        this.eventBus.emit(Component.EVENTS.FLOW_RENDER)
        this.eventBus.emit(Component.EVENTS.FLOW_CDM)
    }

    componentDidMount(): void { }

    private _componentDidMount() {
        this.componentDidMount()
    }

    private _createPropsProxy(props: T): T {

        const handler = {
            deleteProperty() {
                throw new Error()
            } 
        }

        return new Proxy(props, handler)
    }

    setProps(nextProps: { [P in keyof T]?: T[P] }): void {
        Object.assign(this.props, nextProps)

        this.eventBus.emit(Component.EVENTS.FLOW_CDU)
    }

    componentDidUpdate(): void { }

    private _componentDidUpdate() {
        this.eventBus.emit(Component.EVENTS.FLOW_RENDER)
    }

    get node(): Element {
        return this._node
    }

    _render(): void {
        const append = {}

        const context = {
            ...this.props,
            append
        }

        const vnode = htmlToNode(this._template(context))

        for (const key in append) {
            const placeholder = vnode.getElementsByTagName(key)[0]
            placeholder.replaceWith(append[key].node)
        }

        if (null === this._node) {
            this._node = vnode
        } else {
            this._node.setAttribute('class', vnode.getAttribute('class'))
            this._node.innerHTML = vnode.innerHTML
        }
    }

    abstract render(): string
}


export interface ComponentFactory {
    new(): Component
}

function h(component: Component) {
    const key = uid()
    this.append[key] = component
    //@ts-ignore
    return new Handlebars.SafeString(`<${key}></${key}>`)
}

//@ts-ignore
Handlebars.registerHelper('h', h)