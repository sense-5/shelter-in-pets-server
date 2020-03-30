// NOTE: MIGHT DELET THIS!
const Sequelize = require('sequelize')
const db = require('../db')

const LikedDog = db.define('LikedDogs', {
  petFinderId: {
    type: Sequelize.STRING
  }
})

module.exports = LikedDog
