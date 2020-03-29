const router = require('express').Router()
const {Dog, User} = require('../db/models')
module.exports = router

// LIKED DOGS ROUTE: '/api/likedDog
let count = 1
// POST likedDog to database
router.post('/', async (req, res, next) => {
  console.log('likeDog route')
  try {
    if (count > 0) {
      console.log('liking dog', count)
      console.log('user id:', req.user.id, count)
      count++
    }
    const user = await User.findByPk(req.user.id)

    if (!user) {
      console.log('i am not a user')
      res.status(404).json('User does not exist')
      return
    }

    let dog = await Dog.findOne({
      where: {petFinderId: String(req.body.petFinderId), userId: req.user.id}
    })

    if (!dog) {
      console.log('i have not liked or viewed this dog before')
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
      console.log('i have liked this dog')
      await user.addLikedDog(dog)
      console.log('added liked dog to db')
      return
    }

    if (!dog.liked) {
      console.log('i disliked this dog')
      await user.removeLikedDog(dog)
      return
    }

    res.sendStatus(200)
    return
  } catch (error) {
    next(error)
  }
})
