import { Avatar } from './Avatar'
import * as Handlebars from 'handlebars'

beforeAll(() => {
    window.Handlebars = Handlebars
})

test('Тест', () => {
    const avatar = new Avatar()
    expect(true).toBe(true);
});