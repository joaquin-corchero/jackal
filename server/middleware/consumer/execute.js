'use strict'

const graphResults = require('../../../lib/graph-results')
const mapResult = require('../../../lib/map-result')
const execute = require('../../../lib/contract/execute')
const mapContractObjectToContractArray = require('../../../lib/map-contract-object-to-contract-array')

const createExecuteConsumer = (grapher) => (req, res, next) => {
  const contracts = req.body
  const parsedContracts = mapContractObjectToContractArray(contracts)

  const startTime = Date.now()
  execute(parsedContracts, (err, results) => {
    if (err) { return next(err) }

    graphResults(results, grapher, startTime)

    const mappedResults = results.map(mapResult)

    if (mappedResults.some(result => result.status === 'Fail')) {
      const body = {
        message: 'Failures Exist',
        status: 'FAILED',
        results: mappedResults
      }

      res.status(200).send(body)
    } else {
      req.contractResults = mappedResults
      next()
    }
  })
}

module.exports = createExecuteConsumer
