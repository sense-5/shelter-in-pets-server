const Sequelize = require('sequelize')
const db = require('../db')

const Dog = db.define('dog', {
  petFinderId: {
    type: Sequelize.STRING
  },
  breed: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Dog
