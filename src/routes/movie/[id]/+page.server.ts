import { resMovieDetailSchema } from '../../../types/zod-validators.js';
import { TMDB_API_KEY, TMDB_API_URL } from '$env/static/private';
import type { RES_MOVIE_DETAIL } from '../../../types/types.js';

type LoadReturnType = Promise<{ movieDetails: RES_MOVIE_DETAIL | undefined }>;

export async function load({ params }): LoadReturnType {
	const returnObj: Awaited<LoadReturnType> = {
		movieDetails: undefined
	};

	const res = await fetch(`${TMDB_API_URL}movie/${params.id}?api_key=${TMDB_API_KEY}`);

	if (!res.ok) {
		res.text().then((text) => {
			console.error(text);
			return returnObj;
		});
	}

	try {
		const movieDetails = resMovieDetailSchema.parse(await res.json());

		returnObj.movieDetails = movieDetails;
	} catch (e) {
		// somehow it is not possible to return errors or empty arrays without loosing the automatic typings of the data object inside +page.svelte
		console.error(e);
	}

	return returnObj;
}
