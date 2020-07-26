import Handlebars from 'handlebars'
window.Handlebars = Handlebars

import { Button } from './'

describe('Аватар', () => {
    test('Тест', () => {
        const avatar = new Avatar({
            url: 'foo.jpg'
        })    

        expect(avatar.node.innerHTML.trim()).toBe('<img class="avatar__image" src="foo.jpg">')
    })
})

