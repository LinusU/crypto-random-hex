'use strict'

const crypto = require('crypto')

module.exports = function randomHex (bytes) {
  return crypto.randomBytes(bytes).toString('hex')
}
