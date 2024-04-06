import axios from "axios"
import api from "./api"


export const getLatestMovies = async (page) => {
    const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=50&page=${page}&sort_by=download_count&with_images=true`)

    return response.data.data
}

export const searchMovies = async (movieName) => {
    const response = await api.get("/search/movie", {
        params: {
            query: movieName
        }
    })

    return response.data.results
}

export const getIMDBId = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/external_ids`)

    return response.data.imdb_id
}