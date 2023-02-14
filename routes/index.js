const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the root path'))

router.get('/stadium/:id/reviews', controllers.getAllReviews)

router.get('/review/:id', controllers.getReviewById)

router.post('/stadium/:id/review', controllers.createReview)

router.put('/review/:id', controllers.updateReview)

router.delete('/review/:id', controllers.deleteReview)

router.get('/stadiums', controllers.getStadiums)

router.put('/stadium/:id', controllers.updateStadium)

module.exports = router
