const User = require('./user')
const Dog = require('./dog')
const LikedDogs = require('./liked_dogs')
const ViewedDogs = require('./viewed_dogs')

Dog.belongsToMany(User, {through: LikedDogs})

User.belongsToMany(Dog, {through: ViewedDogs})

module.exports = {User, Dog}
