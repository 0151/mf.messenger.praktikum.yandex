import { expect } from 'chai'
import nock from 'nock';

import { http } from '../src/modules/http'

describe('Модуль Http', () => {

    beforeEach(() => {
      nock('http://foo.bar')
        .get('/')
        .reply(200, {
          a: 'b'
        });
    })

    global.XMLHttpRequest = require('xhr2')

    it('Получает данные с сервера', () => {
      return http.get('http://foo.bar')
        .then(data => {
          expect(data).to.equal(true);
        });
    });


})