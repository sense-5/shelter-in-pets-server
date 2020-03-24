const router = require('express').Router()
const axios = require('axios')
module.exports = router
// ROUTE: '/api/dogs
router.get('/', async (req, res, next) => {
  try {
    const token = await getToken()
    console.log('token:', token)
    res.json(token).status(200)
  } catch (error) {
    next(error)
  }
})
async function getToken() {
  const {data} = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
    grant_type: 'client_credentials',
    client_id: process.env.PETFINDER_KEY,
    client_secret: process.env.PETFINDER_SECRET
  })
  const tokenObj = {}
  tokenObj.token_type = data.token_type
  tokenObj.access_token = data.access_token
  return tokenObj
}
