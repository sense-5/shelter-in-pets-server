const Sequelize = require('sequelize')
const db = require('../db')

const Dog = db.define('dog', {
  petFinderId: {
    type: Sequelize.STRING
  },
  breed: {
    type: Sequelize.STRING
  }
})

module.exports = Dog
