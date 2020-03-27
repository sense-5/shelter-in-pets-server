const Sequelize = require('sequelize')
const db = require('../db')

const Dog = db.define('dog', {
  petFinderId: {
    type: Sequelize.STRING
  },
  breed: {
    type: Sequelize.STRING
  },
  liked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  viewed: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Dog
