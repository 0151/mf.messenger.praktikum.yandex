import { ComponentFactory } from "./component"

class Router {
    routes: Route[] = []
    history = window.history
    current: Route | null = null

    use(pathname, component) {
        const route = new Route(pathname, component)

        this.routes.push(route)

        return this
    }

    listen() {
        window.onpopstate = event => {
            const pathname = event.currentTarget.location.pathname
            this._onRoute(pathname)
        }

        const current = window.location.pathname
        this._onRoute(current)
    }

    _onRoute(pathname: string) {
        const route = this.lookupRoute(pathname)

        if (undefined === route) {
            //TODO:
            throw new Error()
        } else {
            if (this.current) {
                this.current.leave()
            }
            
            this.current = route
            route.render()
        }
    }

    lookupRoute(pathname: string) {
        const route = this.routes.find(route => 
            route.match(pathname)
        )

        return route
    }

    go(pathname: string) {
        this.history.pushState({}, "", pathname)
        this._onRoute(pathname)
    }

    back() {
        this.history.back()
    }

    forward() {
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

    match(pathname) {
        return pathname === this._pathname
    }

    render() {
        if (!this._node) {
            this._node = new this._component().node
            document.getElementById('app').appendChild(this._node)
        } else {
            this._node.style.display = ''
        }
    }

    leave() {
        if (this._component) {
            this._node.style.display = 'none'
        }
    }
}

export const router = new Router()