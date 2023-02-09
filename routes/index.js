const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the root path'))

router.get('/reviews', controllers.getAllReviews)

router.post('/review', controllers.createReview)

router.put('/review/:id', controllers.updateReview)

router.delete('/review/:id', controllers.deleteReview)

router.get('/stadiums', controllers.getStadiums)

module.exports = router
