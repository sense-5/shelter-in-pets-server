const User = require('./user')
const FavoriteDogs = require('./favoriteDogs')
const ViewedPets = require('./viewedPets')

User.hasOne(ViewedPets)
ViewedPets.belongsTo(User)

User.hasOne(FavoriteDogs)
FavoriteDogs.belongsTo(User)

module.exports = {User, FavoriteDogs, ViewedPets}
