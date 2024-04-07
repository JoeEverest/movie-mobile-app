import axios from "axios";
import { API_KEY } from "../../const";

export default API = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: API_KEY,
	},
});
