import type { RES_MOVIE_POPULAR } from '../../../types/types.js';
import { resMoviePopularSchema } from '../../../types/zod-validators.js';
import { TMDB_API_KEY, TMDB_API_URL } from '$env/static/private';

type LoadReturnType = Promise<{
	movies: RES_MOVIE_POPULAR['results'];
	searchTerm: string;
	totalResults: number;
}>;

export async function load({ params }): LoadReturnType {
	let returnObj: Awaited<LoadReturnType> = {
		movies: [],
		searchTerm: params.id ?? '',
		totalResults: 0
	};

	const res = await fetch(`${TMDB_API_URL}search/movie?api_key=${TMDB_API_KEY}&query=${params.id}`);

	if (!res.ok) {
		res.text().then((text) => {
			console.error(text);
			return returnObj;
		});
	}

	try {
		const movies = resMoviePopularSchema.parse(await res.json());

		returnObj = {
			...returnObj,
			movies: movies.results ?? [],
			totalResults: movies.total_results ?? 0
		};
	} catch (e) {
		// somehow it is not possible to return errors or empty arrays without loosing the automatic typings of the data object inside +page.svelte
		console.error(e);
	}

	return returnObj;
}
