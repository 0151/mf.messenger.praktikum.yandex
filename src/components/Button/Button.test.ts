import { Button } from './'

describe('Аватар', () => {
    test('правильно рендерится', () => {
        const buttonProps = {
            text: 'Duck'
        }
        const button = new Button(buttonProps)

        expect(button.node.outerHTML.replace(/( ){2,}|\n/g, '')).toBe('<button class="button">Duck</button>')
    })
})

