'use strict'

const startServer = require('../../server')

let server = null
const config = {
  db:     { path: 'db.json' },
  jackal: { 
    host: 'https://localhost', 
    port: 25863,
    ssl: {
      key: 'c:\\ssl\\key.pem',
      cert: 'c:\\ssl\\cert.pem',
      passphrase: 'jackal'
    }
  },
  quiet:  false
}

const start = (done) => {
  server = startServer(config, done)
}

module.exports = { start }
