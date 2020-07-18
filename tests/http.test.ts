import { expect } from 'chai';

describe('Hello', () => {
  it('возвращает hello world', () => {
    const result = 'Hello World!'
    expect(result).to.equal('Hello World!')
  })
})