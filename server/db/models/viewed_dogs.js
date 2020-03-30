const Sequelize = require('sequelize')
const db = require('../db')

const ViewedDog = db.define('ViewedDogs', {
  petFinderId: {
    type: Sequelize.STRING
  }
})

module.exports = ViewedDog
