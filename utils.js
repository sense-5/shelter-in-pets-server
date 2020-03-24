const axios = require('axios')

const isAdmin = (req, res, next) => {
  try {
    if (req.user) {
      if (req.user.isAdmin) {
        next()
      } else {
        res.status(401).send('Must be an admin!')
      }
    } else {
      res.status(401).send('Must login to access!')
    }
  } catch (error) {
    next(error)
  }
}

const isUser = (req, res, next) => {
  try {
    if (req.user) {
      next()
    } else {
      res.status(401).send('Must login to access!')
    }
  } catch (error) {
    next(error)
  }
}

const getToken = async (req, res, next) => {
  try {
    const {data} = await axios.post(
      'https://api.petfinder.com/v2/oauth2/token',
      {
        grant_type: 'client_credentials',
        client_id: process.env.PETFINDER_KEY,
        client_secret: process.env.PETFINDER_SECRET
      }
    )
    process.env.BEARER_TOKEN = 'Bearer '.concat(data.access_token)
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {isAdmin, isUser, getToken}
