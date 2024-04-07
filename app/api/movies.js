import axios from "axios";
import api from "./api";

export const getLatestMovies = async () => {
	const response = await api.get(`/movie/popular`);

	return response.data.results;
};

export const searchMovies = async (movieName) => {
	const response = await api.get("/search/movie", {
		params: {
			query: movieName,
		},
	});

	return response.data.results;
};

export const getIMDBId = async (movieId) => {
	const response = await api.get(`/movie/${movieId}/external_ids`);

	return response.data.imdb_id;
};
