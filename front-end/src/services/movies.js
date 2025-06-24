import axios from "axios";

class MovieDataService {
    getAll(page = 0) { //Fetches all movies with optional pagination
        return axios.get(`http://localhost:5000/api/v1/movies?page=${page}`)
    }
    get(id) {
        return axios.get(`http://localhost:5000/api/v1/movies/id/${id}`)
    }
    // find(title) {
    //     return axios.get(
    //         `http://localhost:5000/api/v1/movies?title=${title}`
    //     )
    // }
    find(query, by = "title", page = 0, rating) {//Searches for movies dynamically by a field
        return axios.get(
            `http://localhost:5000/api/v1/movies?${by}=${query}&page=${page}&rating=${rating}`
        )
    }
    createReview(data) {//Sends a new review via POST.
        return axios.post("http://localhost:5000/api/v1/movies/review", data)
    }
    updateReview(data) {//Updates an existing review via PUT.
        return axios.put("http://localhost:5000/api/v1/movies/review", data)
    }
    deleteReview(id, userId) {//Sends a DELETE request, with both review and user IDs passed in the request body.
        return axios.delete(
            "http://localhost:5000/api/v1/movies/review",
            { data: { review_id: id, user_id: userId } }
        )
    }
    getRatings() {//- Fetches a list of ratings (possibly for filters or display).

        return axios.get("http://localhost:5000/api/v1/movies/ratings")
    }
}

const movieDataService = new MovieDataService();

export default movieDataService;