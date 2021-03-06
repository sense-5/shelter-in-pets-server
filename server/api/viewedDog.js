const router = require('express').Router()
const {Dog, User} = require('../db/models')
const {isUser} = require('../../utils')
module.exports = router

// LIKED DOGS ROUTE: '/api/viewedDog
// POST viewedDog to database
router.post('/', isUser, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)
    if (user) {
      let dog = await Dog.findOne({
        where: {petFinderId: String(req.body.petFinderId), userId: req.user.id}
      })
      if (!dog) {
        let viewedDog = await Dog.create({
          petFinderId: String(req.body.petFinderId),
          breed: req.body.breed,
          userId: req.user.id
        })
        await user.addViewedDog(viewedDog, {
          through: {petFinderId: String(req.body.petFinderId)}
        })
        res.sendStatus(201)
      }
    } else {
      res.status(404).json('User does not exist')
    }
  } catch (error) {
    next(error)
  }
})
