const router = require('express').Router()
module.exports = router

// router.use('/users', require('./users'))
router.use('/dogs', require('./allDogs'))
router.use('/likedDog', require('./likedDog'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
