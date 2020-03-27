const router = require('express').Router()
const {Dog, User} = require('../db/models')
module.exports = router

// LIKED DOGS ROUTE: '/api/viewedDog

// POST likedDog to database
router.post('/', async (req, res, next) => {
  console.log('in view post api:', req.body)
  //   console.log('user:', req.user.id)
  try {
    let viewedDog = await Dog.findOne({
      where: {petFinderId: String(req.body.petFinderId), breed: req.body.breed}
    })

    res.status(201).json(viewedDog)
    // const user = await User.findByPk(req.user.id)
    // if (user) {
    //   await newLikedDog.addUser(user)
    // } else {
    //   res.sendStatus(404)
    // }
  } catch (error) {
    next(error)
  }
})
