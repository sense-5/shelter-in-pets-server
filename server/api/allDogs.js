const router = require('express').Router()
const axios = require('axios')
const {getToken} = require('../../utils')
module.exports = router

// ALL DOGS ROUTE: '/api/dogs
// TODO: ask sarah about loading more dogs when making the request. Ask about SDK.
router.get('/', getToken, async (req, res, next) => {
  try {
    const {data} = await axios.get(
      'https://api.petfinder.com/v2/animals?type=dog&limit=100&status=adoptable',
      {headers: {Authorization: process.env.BEARER_TOKEN}}
    )
    res.json(data)
  } catch (error) {
    next(error)
  }
})

//SHOW ALL BREEDS IN PETFINDER API ROUTE: '/api/dogs/breeds'
router.get('/breeds', getToken, async (req, res, next) => {
  try {
    const {data} = await axios.get(
      'https://api.petfinder.com/v2/types/dog/breeds',
      {
        headers: {Authorization: process.env.BEARER_TOKEN}
      }
    )
    console.log(data.breeds)
    res.status(200).json(data.breeds)
  } catch (error) {
    next(error)
  }
})

// SINGLE DOGS ROUTE: '/api/dogs/:dogId (Maybe for a search??)
router.get('/:dogId', getToken, async (req, res, next) => {
  try {
    const {data} = await axios.get(
      `https://api.petfinder.com/v2/animals/${req.params.dogId}`,
      {headers: {Authorization: process.env.BEARER_TOKEN}}
    )
    res.json(data).status(200)
  } catch (error) {
    next(error)
  }
})

// SHOW DOGS OF A BREED ROUTE: '/api/dogs/:breed
router.get('/:breed', getToken, async (req, res, next) => {
  try {
    const {data} = await axios.get(
      `https://api.petfinder.com/v2/animals?type=dog&status=adoptable&breed=${
        req.params.breed
      }`,
      {headers: {Authorization: process.env.BEARER_TOKEN}}
    )
    res.json(data).status(200)
  } catch (error) {
    next(error)
  }
})
