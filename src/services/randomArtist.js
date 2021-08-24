import {fetchApi} from './axios';

export const getRandomArtist = async () => {
	const randomArtist = Math.ceil(Math.random()*10000);
	console.log('randomArtist', randomArtist)
	await fetchApi.get(`/artists/${randomArtist}`
	).then(response => {
		console.log(response.data);
	}).catch((e) => {
		console.log(e);
	})
};
