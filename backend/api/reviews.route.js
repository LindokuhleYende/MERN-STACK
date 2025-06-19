import express from 'express'
import ReviewsController from './reviews.controller.js'

const router = express.Router()

// Get all reviews for a specific movie
router.route('/movie/:movieId').get(ReviewsController.apiGetReviewsByMovieId)

// Create a review
router.route('/')
    .post(ReviewsController.apiPostReview)
    .put(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview)

export default router
