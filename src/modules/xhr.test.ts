import nock from 'nock'

import { xhr } from './xhr'

describe('Модуль Http запросов', () => {

    const scope = nock('http://foo.bar')
        .defaultReplyHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        })


    test('получает данные', () => {
        scope
            .get('/')
            .reply(200, { foo: 'bar' })

        return xhr
            .get('http://foo.bar')
            .then(response => {
                expect(response.ok).toBe(true)
            })
    })

    test('отправляет данные', () => {
        scope
            .post('/', { bar: 'buzz' })
            .reply(200)

        return xhr
            .post('http://foo.bar', { body: { bar: 'buzz' } })
    })

})