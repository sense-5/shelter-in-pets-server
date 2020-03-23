const Sequelize = require('sequelize')
const db = require('../db')

const FavoriteDogs = db.define('favoriteDogs', {
  favorite: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

FavoriteDogs.prototype.add = function(dogId) {
  this.favorite.push(dogId)
}

FavoriteDogs.prototype.remove = function(dogId) {
  this.favorite.filter(el => {
    return el !== dogId
  })
}

module.exports = FavoriteDogs
