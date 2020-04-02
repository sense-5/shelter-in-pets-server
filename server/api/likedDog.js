const router = require('express').Router()
const {Dog, User, LikedDog} = require('../db/models')
const {getToken} = require('../../utils')
module.exports = router
const axios = require('axios')

// LIKED DOGS ROUTE: '/api/likedDog

// GET likedDog
router.get('/', getToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)

    if (user) {
      let dogs = await LikedDog.findAll({
        where: {
          userId: user.id
        }
      })
      let petfinderIds = dogs.map(dog => {
        return dog.petFinderId
      })

      let petfinderDogs = []
      for (let i = 0; i < petfinderIds.length; i++) {
        try {
          let {data} = await axios.get(
            `https://api.petfinder.com/v2/animals/${petfinderIds[i]}`,
            {headers: {Authorization: process.env.BEARER_TOKEN}}
          )
          petfinderDogs.push(data.animal)
        } catch (error) {
          continue
        }
      }

      res.status(200).json(petfinderDogs)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/ids', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)

    if (user) {
      let dogs = await LikedDog.findAll({
        where: {
          userId: user.id
        }
      })
      let petfinderIds = dogs.map(dog => {
        return dog.petFinderId
      })
      res.status(200).json(petfinderIds)
    }
  } catch (error) {
    next(error)
  }
})

// POST likedDog to database
router.post('/', async (req, res, next) => {
  try {
    let newLikedDog
    //find user
    const user = await User.findByPk(req.user.id)
    //if user is found, find the dog
    if (user) {
      let dog = await Dog.findOne({
        where: {petFinderId: String(req.body.petFinderId), userId: req.user.id}
      })
      //if dog is not found, create the dog
      if (!dog) {
        newLikedDog = await Dog.create({
          petFinderId: String(req.body.petFinderId),
          breed: req.body.breed,
          userId: req.user.id,
          liked: true
        })
      } else {
        newLikedDog = dog
      }

      //find if dog has been liked before

      let likedDog = await LikedDog.findOne({
        where: {
          dogId: newLikedDog.id
        }
      })

      //if dog has been liked before, we remove it
      if (likedDog) {
        await user.removeLikedDog(newLikedDog)
        await newLikedDog.update({liked: false})
        res.status(201).json(newLikedDog)
      } else {
        //if dog has not been liked, we add the association
        await user.addLikedDog(newLikedDog, {
          through: {petFinderId: String(req.body.petFinderId)}
        })
        await newLikedDog.update({liked: true})
        res.status(201).json(newLikedDog)
      }
    } else {
      res.status(404).json('User does not exist')
    }
  } catch (error) {
    next(error)
  }
})
