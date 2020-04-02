const router = require('express').Router()
const axios = require('axios')
const {getToken, recBreeds} = require('../../utils')
const {Dog, User} = require('../db/models')
module.exports = router

// GET THE RECOMMENDED DOGS FOR A USER (based on viewed / liked)
router.get('/', getToken, async (req, res, next) => {
  try {
    const dogs = await Dog.findAll({where: {userId: req.user.id}})
    console.log('these are dogs in recs: ', dogs)
    if (dogs.length === 0) {
      const {data} = await axios.get(
        'https://api.petfinder.com/v2/animals?type=dog&limit=100&status=adoptable',
        {headers: {Authorization: process.env.BEARER_TOKEN}}
      )
      console.log('await axios get random dogs: ', data)
      res.status(200).json(data)
    } else {
      const likedDogs = await Dog.findAll({
        where: {userId: req.user.id, liked: true}
      })
      console.log('lookin for liked dogs:', likedDogs)
      let top3Arr
      if (likedDogs) {
        top3Arr = recBreeds(dogs, likedDogs)
      } else {
        top3Arr = recBreeds(dogs, null)
      }
      const {data} = await axios.get(
        `https://api.petfinder.com/v2/animals?type=dog&limit=50&status=adoptable&breed=${top3Arr}`,
        {headers: {Authorization: process.env.BEARER_TOKEN}}
      )
      console.log('getting 50 of dogs: ', data)
      res.status(200).json(data)
    }
  } catch (error) {
    next(error)
  }
})
