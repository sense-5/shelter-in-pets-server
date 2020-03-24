const Sequelize = require('sequelize')
const db = require('../db')

const ViewedDogs = db.define('ViewedDogs', {
  petFinderId: {
    type: Sequelize.STRING
  }
})

module.exports = ViewedDogs
