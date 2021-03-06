'use strict'

module.exports = () => {
  return {
    db: {
      path: 'db.json'
    },
    jackal: {
      port: 25863
    },
    logger: {
      environment: 'production'
    },
    statsD: {
      host: 'localhost',
      port: 8125,
      prefix: 'jackal'
    },
    quiet: false
  }
}
