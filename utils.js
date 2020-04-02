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

function max3(breedsArr, breedCountsArr) {
  let newArr = []
  for (let i = 0; i < breedsArr.length; i++) {
    newArr.push([breedsArr[i], breedCountsArr[i]])
  }
  let sortedArr = newArr.sort()

  let reverseArr = sortedArr.reverse()

  let top3WithCount = reverseArr.slice(0, 3)
  let final = top3WithCount
    .map(el => {
      return el[0].toLowerCase()
    })
    .join(',')
  return final
}

const recBreeds = (dogs, likedDogs) => {
  let breedsHash = {}
  // for setting viewed
  for (let i = 0; i < dogs.length; i++) {
    let breed = dogs[i].breed
    if (breedsHash.hasOwnProperty(breed)) {
      breedsHash[breed] += 1
    } else {
      breedsHash[breed] = 1
    }
  }
  // for setting liked
  if (likedDogs) {
    for (let j = 0; j < likedDogs.length; j++) {
      let likedBreed = likedDogs[j].breed
      if (breedsHash.hasOwnProperty(likedBreed)) {
        breedsHash[likedBreed] += 2
      } else {
        breedsHash[likedBreed] = 2
      }
    }
  }
  // for counting top 3
  let breedCountsArr = Object.values(breedsHash)
  let breedsArr = Object.keys(breedsHash)

  return max3(breedsArr, breedCountsArr)
}

module.exports = {isAdmin, isUser, getToken, recBreeds}
