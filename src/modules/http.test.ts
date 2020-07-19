import nock from 'nock';

import { http as HttpTransport } from './http'

beforeAll(() => {
    global.XMLHttpRequest = require('xhr2')
})

describe('Модуль Http запросов', () => {
    test('получает данные', () => {
        nock('http://foo.bar')
            .get('/')
            .reply(200, {
                foo: 'bar'
            })
    
        return HttpTransport.get('http://foo.bar').then(data => {
            expect(data).toMatchObject({ foo: 'bar' })
        })
    })
    
    test('возвращает ошибку, если сервер недоступен', () => {
        return expect(HttpTransport.get('http://foo.bar')).rejects.toMatch('error')
    })
    
    test('преобразует параметры в строку запроса', () => {
        nock('http://foo.bar').get('/?foo=bar').reply(200)

        return expect(HttpTransport.get('http://foo.bar', { data: { foo: 'bar' } })).resolves.toMatchObject({})
    })

    test('отправляет данные', () => {
        nock('http://foo.bar')
            .post('/', { foo: 'bar' })
            .reply(200, {
                bar: 'buzz'
            })
    
        return HttpTransport.post('http://foo.bar', {data: { foo: 'bar' }}).then(data => {
            expect(data).toMatchObject({ bar: 'buzz' })
        })
    })
})