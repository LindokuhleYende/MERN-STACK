import express from 'express'
import cors from 'cors' //cross origin resourse sharing =>ensures that our backend is shared across any domains
import movies from './api/movies.route.js'
import reviews from './api/reviews.route.js'

const app = express() //create the server

//Middleware configuration
app.use(cors())
app.use(express.json()) //nsures the server can parse incoming JSON request bodies

//Every route will start with this url
app.use("/api/v1/movies", movies)
app.use('*', (req, res) => {
    res.status(404).json({ error: "not found" })
})

//reviews url
app.use('/api/v1/reviews', reviews)
export default app