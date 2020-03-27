const router = require('express').Router()
const {Dog, User} = require('../db/models')
module.exports = router

// LIKED DOGS ROUTE: '/api/likedDog

// POST likedDog to database
router.post('/', async (req, res, next) => {
  console.log('in post api:', req.body)
  console.log('type user id', typeof req.user.id)
  console.log(Object.keys(User.prototype))

  try {
    const user = await User.findByPk(req.user.id)

    if (!user) {
      res.status(404).json('User does not exist')
      return
    }

    let dog = await Dog.findOne({
      where: {petFinderId: String(req.body.petFinderId), userId: req.user.id}
    })

    if (!dog) {
      let likedDog = await Dog.create({
        petFinderId: String(req.body.petFinderId),
        breed: req.body.breed,
        liked: true,
        userId: req.user.id
      })
      res.status(201).json(likedDog)
      return
    }

    await dog.update({liked: !dog.liked})

    if (dog.liked) {
      await user.addLikedDog(dog)
      return
    }

    if (!dog.liked) {
      await user.removeLikedDog(dog)
      return
    }

    res.sendStatus(200)
    return
  } catch (error) {
    next(error)
  }
})
