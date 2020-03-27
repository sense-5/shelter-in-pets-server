const router = require('express').Router()
const {Dog, User} = require('../db/models')
module.exports = router

// LIKED DOGS ROUTE: '/api/viewedDog

// POST likedDog to database
router.post('/', async (req, res, next) => {
  console.log('in view post api:', req.body)
  try {
    const user = await User.findByPk(req.user.id)

    if (!user) {
      res.status(404).json('User does not exist')
      return
    }

    if (user) {
      let dog = await Dog.findOrCreate({
        where: {
          petFinderId: String(req.body.petFinderId),
          breed: req.body.breed,
          userId: req.user.id
        }
      })
      //   await user.addDog(dog)
      console.log(dog)
      res.sendStatus(201)
    }
  } catch (error) {
    next(error)
  }
})
