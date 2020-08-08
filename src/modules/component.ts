import Handlebars from 'handlebars'

import { EventBus } from './eventBus' 
import { htmlToNode } from '../utils/dom'
import { uid } from '../utils/uid'

export abstract class Component<T extends Record<string, any> = object> {
    static EVENTS = {
        INIT: 'init',
        FLOW_RENDER: 'flow:render',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
    }

    protected _node: Element
    protected _template: (props: T) => string
    eventBus = new EventBus()
    props: T

    constructor(props: T = {} as T) {
        this.props = this._createPropsProxy(props)
        this._template = Handlebars.compile(this.render())

        this._attachEvents()
        this.eventBus.emit(Component.EVENTS.INIT)
    }

    protected _attachEvents(): void {
        this.eventBus.on(Component.EVENTS.INIT, this.init.bind(this))
        this.eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this))
        this.eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
        this.eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    }

    protected init(): void {
        this.eventBus.emit(Component.EVENTS.FLOW_RENDER)
        this.eventBus.emit(Component.EVENTS.FLOW_CDM)
    }

    componentDidMount(): void { }

    protected _componentDidMount(): void {
        this.componentDidMount()
    }

    protected _createPropsProxy(props: T): T {

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

    protected _componentDidUpdate(): void {
        this.eventBus.emit(Component.EVENTS.FLOW_RENDER)
    }

    get node(): Element {
        return this._node
    }

    protected _render(): void {
        const appendMap = {}
        const context = {
            ...this.props,
            appendMap
        }

        const vnode = htmlToNode(this._template(context))

        for (const key in appendMap) {
            const placeholder = vnode.getElementsByTagName(key)[0]
            placeholder.replaceWith(appendMap[key].node)
        }

        if (!this._node) {
            this._node = vnode
        } else {
            const classList = vnode.getAttribute('class')
            
            if (classList) this._node.setAttribute('class', classList)
            this._node.innerHTML = vnode.innerHTML
        }
    }

    abstract render(): string
}

Handlebars.registerHelper('h', h)

function h(component: Component) {
    const key = uid() 
    this.appendMap[key] = component

    return new Handlebars.SafeString(`<${key}></${key}>`)
}

export interface ComponentFactory {
    new(): Component
}