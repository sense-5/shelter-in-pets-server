const User = require('./user')
const Dog = require('./dog')
const LikedDog = require('./liked_dogs')
const ViewedDog = require('./viewed_dogs')

Dog.belongsToMany(User, {through: LikedDog, as: 'likedUser'})
User.belongsToMany(Dog, {through: LikedDog, as: 'likedDog'})

Dog.belongsToMany(User, {through: ViewedDog, as: 'viewedUser'})
User.belongsToMany(Dog, {through: ViewedDog, as: 'viewedDog'})

module.exports = {User, Dog, LikedDog, ViewedDog}
