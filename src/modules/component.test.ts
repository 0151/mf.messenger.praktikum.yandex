//@ts-nocheck
import Handlebars from 'handlebars'
window.Handlebars = Handlebars

import { Component } from './component'

interface ICProps {
    text: string
}

class C extends Component<ICProps> {
    render() {
        return '<div>{{text}}</div>'
    }
}

const component = new C({
    text: 'foo'
})

describe('Базовый класс компонента', () => {  
    test('рендерит элемент из шаблона', () => {
        expect(component.node.outerHTML.trim()).toBe(`<div>foo</div>`)
    })

    test('перерисовывается при обновлении пропсов', () => {
        component.setProps({
            text: 'buzz'
        })

        expect(component.node.outerHTML.trim()).toBe(`<div>buzz</div>`)
    })
})