import { ComponentFactory } from './component'

class Router {
    private routes: Route[] = []
    private history = window.history
    private current: Route | null = null
    private _beforeEach: (route: Route) => boolean

    use(pathname: string, component: ComponentFactory, guarded = false): Router {
        const route = new Route(pathname, component, guarded)

        this.routes.push(route)

        return this
    }

    beforeEach(handle: (route: Route) => boolean): Router {
        this._beforeEach = handle.bind(this)

        return this
    }

    listen(): void {
        window.onpopstate = event => {
            const pathname = event.currentTarget.location.pathname
            this._onRoute(pathname)
        }

        const current = window.location.pathname
        this._onRoute(current)
    }

    _onRoute(pathname: string): void {
        const route = this.lookupRoute(pathname)
        
        if (route) {
            if (!this._beforeEach(route)) {
                this.go('/signin')
                return
            }

            if (this.current) this.current.leave()

            this.current = route
            route.render()
        } else {
            this.go('/error')
        }
    }

    lookupRoute(pathname: string): Route {
        const route = this.routes.find(route => 
            route.match(pathname)
        )

        return route
    }

    go(pathname: string): void {
        this.history.pushState({}, '', pathname)
        this._onRoute(pathname)
    }

    back(): void {
        this.history.back()
    }

    forward(): void {
        this.history.forward()
    }
}

export class Route {
    private _component: ComponentFactory
    private _pathname: string
    private _node = null
    guarded: boolean

    constructor(pathname: string, component: ComponentFactory, guarded: boolean) {
        this._pathname = pathname
        this._component = component
        this.guarded = guarded
    }

    match(pathname: string): boolean {
        return pathname === this._pathname
    }

    render(): void {
        if (!this._node) {
            this._node = new this._component().node
            document.getElementById('app').appendChild(this._node)
        } else {
            this._node.style.display = ''
        }
    }

    leave(): void {
        if (this._component) {
            this._node.style.display = 'none'
        }
    }
}

export const router = new Router()