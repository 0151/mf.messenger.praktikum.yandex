import { ComponentFactory } from './component'

class Router {
    private routes: Route[] = []
    private history = window.history
    private current: Route | null = null
    public before: any

    use(pathname, component): Router {
        const route = new Route(pathname, component)

        this.routes.push(route)

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

        //const route = (pathname === '/signin') 
        //    ? this.lookupRoute(pathname)
        //    : this.lookupRoute('/signin')

        if (route) {
            if (this.current) this.current.leave()

            this.current = route
            
            route.render()
        } else {
            //TODO:
            throw new Error()
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

class Route {
    private _component: ComponentFactory
    private _pathname: string
    private _node = null

    constructor(pathname: string, component: ComponentFactory) {
        this._pathname = pathname
        this._component = component
    }

    match(pathname): boolean {
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