const router = require('express').Router()
const axios = require('axios')
const {getToken} = require('../../utils')
module.exports = router

//SHOW ALL BREEDS IN PETFINDER API ROUTE: '/api/dogs/breeds'
router.get('/breeds', getToken, async (req, res, next) => {
  try {
    const {data} = await axios.get(
      'https://api.petfinder.com/v2/types/dog/breeds',
      {
        headers: {Authorization: process.env.BEARER_TOKEN}
      }
    )

    res.status(200).json(data.breeds)
  } catch (error) {
    next(error)
  }
})

//GET specific user search request '/api/dogs/request/?age=age&size=size&coat=coat'
router.get('/request', getToken, async (req, res, next) => {
  try {
    const age = req.query.age
    const size = req.query.size
    const coat = req.query.coat

    const {data} = await axios.get(
      `https://api.petfinder.com/v2/animals?type=dog&status=adoptable&age=${age}&size=${size}&coat=${coat}`,
      {headers: {Authorization: process.env.BEARER_TOKEN}}
    )
    res.json(data).status(200)
  } catch (error) {
    next(error)
  }
})

// SHOW DOGS OF A BREED ROUTE: '/api/dogs/:breed
router.get('/type/:breed', getToken, async (req, res, next) => {
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

// ALL DOGS ROUTE: '/api/dogs

router.get('/:page', getToken, async (req, res, next) => {
  try {
    const {data} = await axios.get(
      `https://api.petfinder.com/v2/animals?type=dog&limit=100&status=adoptable&page=${
        req.params.page
      }`,
      {headers: {Authorization: process.env.BEARER_TOKEN}}
    )
    res.json(data)
  } catch (error) {
    next(error)
  }
})
