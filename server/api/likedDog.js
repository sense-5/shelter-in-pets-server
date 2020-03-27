const router = require('express').Router()
const {Dog, User} = require('../db/models')
module.exports = router

// LIKED DOGS ROUTE: '/api/likedDog

// POST likedDog to database
router.post('/', async (req, res, next) => {
  console.log('in post api:', req.body)
  //   console.log('user:', req.user.id)
  try {
    const likedDog = await Dog.findOne({
      where: {petFinderId: String(req.body.petFinderId)}
    })

    if (likedDog) {
      await likedDog.update({liked: req.body.liked})
    } else {
      await Dog.create({
        petFinderId: String(req.body.petFinderId),
        breed: req.body.breed
      })
    }
    // const user = await User.findByPk(req.user.id)
    // if (user) {
    //   await newLikedDog.addUser(user)
    // } else {
    //   res.sendStatus(404)
    // }

    if (likedDog) {
      res.status(201).json(likedDog)
    } else {
      res.status(400).send('YOU HAVE NOT LIKED A DOG YET')
    }
  } catch (error) {
    next(error)
  }
})
