import axios from "axios";

const api = axios.create({
	baseURL: "http://127.0.0.1:8000/api",
	//baseURL: "https://api.primebet.bet/api",
	headers: {
	    Authorization: 'Bearer '+JSON.parse(localStorage.getItem('user'))?.token,
	    'Access-Control-Allow-Origin': '*',
	}
});

export default api