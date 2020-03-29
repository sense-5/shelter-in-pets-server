const router = require('express').Router()
const {User} = require('../db/models')
const {isUser} = require('../../utils')
module.exports = router

//To do: eagerloading to show liked dogs
router.get('/', isUser, (req, res, next) => {
  try {
    res.json(req.user)
  } catch (error) {
    next(error)
  }
})
