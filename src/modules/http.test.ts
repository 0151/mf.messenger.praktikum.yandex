import nock from 'nock';

import { http as HttpTransport } from './http'

beforeAll(() => {
    global.XMLHttpRequest = require('xhr2')
})

test('получает данные', () => {
    nock('http://foo.bar')
        .get('/')
        .reply(200, {
            foo: 'bar'
    })

    return HttpTransport.get('http://foo.bar').then(data => {
        expect(data).toMatchObject({foo: 'bar'})
    })
})