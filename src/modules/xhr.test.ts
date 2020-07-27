import nock from 'nock';

import { xhr } from './xhr'

describe('Модуль Http запросов', () => {
    
    describe('Класс Request', () => {

        test('получает данные', () => {
            nock('http://foo.bar')
                .defaultReplyHeaders({
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                })
                .get('/')
                .reply(200, { foo: 'bar' })

            return xhr
                .get('http://foo.bar')
                .then(response => response.json())
                .then(data => {
                    expect(data).toMatchObject({foo: 'bar'})
                })
        })
    })
})