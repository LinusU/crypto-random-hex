# Crypto Random Hex

Get a, cryptographically strong, string of random hexadecimal characters.

## Installation

```sh
npm install --save crypto-random-hex
```

## Usage

```js
const randomHex = require('crypto-random-hex')

console.log(randomHex(4))
//=> b55802d9
```

## API

### `randomHex(bytes: number): string`

Returns `bytes` number of bytes cryptographically strong random data, encoded as a string of hexadecimal characters.

## Browser support

This module works both in Node.js, and inside modern browsers.

Browser | Version
------- | -------
Android | >= 4.4
Chrome  | >= 11
Edge    | >= 12
Firefox | >= 21
IE      | >= 11
Opera   | >= 15
Safari  | >= 6.1
Safari iOS | >= 7.1
