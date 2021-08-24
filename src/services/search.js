import {fetchApi} from './axios';

export const findSearch = async (query) => {
	await fetchApi.get(`/database/search?q=${query}`
	).then(response => {
		console.log(response.data);
	}).catch((e) => {
		console.log(e);
	})
};