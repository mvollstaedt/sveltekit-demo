import type { RES_MOVIE_POPULAR } from '../types/types.js';
import { resMoviePopularSchema } from '../types/zod-validators.js';
import { TMDB_API_URL, TMDB_API_KEY } from '$env/static/private';

type LoadReturnType = Promise<{ popularMovies: RES_MOVIE_POPULAR['results'] }>;

export async function load({ fetch }): LoadReturnType {
	const returnObj: Awaited<LoadReturnType> = { popularMovies: [] };

	const res = await fetch(`${TMDB_API_URL}movie/popular?api_key=${TMDB_API_KEY}`);

	if (!res.ok) {
		res.text().then((text) => {
			console.error(text);
			return returnObj;
		});
	}

	try {
		const popularMovies = resMoviePopularSchema.parse(await res.json());

		returnObj.popularMovies = popularMovies?.results;
	} catch (e) {
		console.error(e);
	}

	return returnObj;
}
