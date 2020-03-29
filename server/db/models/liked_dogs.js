// NOTE: MIGHT DELET THIS!
const Sequelize = require('sequelize')
const db = require('../db')

const LikedDog = db.define('LikedDogs', {
  userId: {
    type: Sequelize.STRING
  },
  dogId: {
    type: Sequelize.STRING
  }
})

module.exports = LikedDog
