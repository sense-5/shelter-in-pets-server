const Sequelize = require('sequelize')
const db = require('../db')

const LikedDogs = db.define('LikedDogs', {
  petFinderId: {
    type: Sequelize.STRING
  }
})

module.exports = LikedDogs
