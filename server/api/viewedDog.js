const router = require('express').Router()
const {Dog, User} = require('../db/models')
module.exports = router

// LIKED DOGS ROUTE: '/api/viewedDog
let count = 1
// POST likedDog to database
router.post('/', async (req, res, next) => {
  if (count > 0) {
    console.log('viewing dog', count)
    count++
  }

  try {
    const user = await User.findByPk(req.user.id)

    if (!user) {
      console.log('want to view do, but not a user')
      res.status(404).json('User does not exist')
      return
    }

    let dog = await Dog.findOne({
      where: {petFinderId: String(req.body.petFinderId), userId: req.user.id}
    })

    if (!dog) {
      console.log('i have not viewed this dog before')
      let viewedDog = await Dog.create({
        petFinderId: String(req.body.petFinderId),
        breed: req.body.breed,
        userId: req.user.id
      })
      await user.addViewedDog(viewedDog)
      res.status(201).json(viewedDog)
      return
    }
  } catch (error) {
    next(error)
  }
})
