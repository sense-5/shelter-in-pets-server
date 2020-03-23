const Sequelize = require('sequelize')
const db = require('../db')

const ViewedPets = db.define('viewedPets', {
  dogBreeds: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

ViewedPets.prototype.add = function(dogBreed) {
  this.dogBreeds.push(dogBreed)
}

ViewedPets.prototype.remove = function(dogBreed) {
  this.dogBreeds.filter(el => {
    return el !== dogBreed
  })
}

module.exports = ViewedPets
