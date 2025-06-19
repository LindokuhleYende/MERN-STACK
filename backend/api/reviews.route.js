import express from 'express'
import ReviewsController from './reviews.controller.js'

const router = express.Router()

router
    .route('/')
    .post(ReviewsController.apiPostReview)
    .put(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview)

export default router
