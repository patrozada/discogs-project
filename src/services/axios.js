import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_DISCOGS_BASE_URL;
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_DISCOGS_TOKEN;

export const fetchApi = axios.create({
	baseURL: process.env.REACT_APP_DISCOGS_BASE_URL,
	headers: {
		'Authorization': `Discogs token=${process.env.REACT_APP_DISCOGS_TOKEN}`,
	},
});

fetchApi.defaults.timeout = 4000;
