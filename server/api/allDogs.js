const router = require('express').Router()
const axios = require('axios')
module.exports = router

// ROUTE: '/api/dogs
router.get('/', async (req, res, next) => {
  try {
    const tokenRequest = await axios.post(
      'https://api.petfinder.com/v2/oauth2/token',
      {
        grant_type: 'client_credentials',
        client_id: process.env.PETFINDER_KEY,
        client_secret: process.env.PETFINDER_SECRET
      }
    )
    const allDogs = await axios.get()
  } catch (error) {
    next(error)
  }
})
