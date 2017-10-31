/* globals crypto msCrypto */

'use strict'

const arrayBufferToHex = require('array-buffer-to-hex')

module.exports = function randomHex (bytes) {
  const view = new Uint8Array(bytes)

  if (typeof crypto === 'object' && typeof crypto.getRandomValues === 'function') {
    crypto.getRandomValues(view)
  } else if (typeof msCrypto === 'object' && typeof msCrypto.getRandomValues === 'function') {
    msCrypto.getRandomValues(view)
  } else {
    throw new Error('No secure random number generator available')
  }

  return arrayBufferToHex(view.buffer)
}
