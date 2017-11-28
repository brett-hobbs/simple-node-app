'use strict'
import { getHelloWorld } from './main.js'

test('returns hello word', () => {
  expect(getHelloWorld()).toBe('Hello World')
})
