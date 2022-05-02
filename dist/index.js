
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./node-beem.cjs.production.min.js')
} else {
  module.exports = require('./node-beem.cjs.development.js')
}
