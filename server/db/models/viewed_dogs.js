const Sequelize = require('sequelize')
const db = require('../db')

const ViewedDog = db.define('ViewedDogs', {
  userId: {
    type: Sequelize.STRING
  },
  dogId: {
    type: Sequelize.STRING
  }
})

module.exports = ViewedDog
