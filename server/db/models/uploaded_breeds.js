const Sequelize = require('sequelize')
const db = require('../db')

const UploadedBreeds = db.define('UploadedBreeds', {
  breed: {
    type: Sequelize.STRING
  }
})

module.exports = UploadedBreeds
