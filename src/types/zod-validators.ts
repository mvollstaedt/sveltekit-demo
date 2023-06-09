// Generated by ts-to-zod
import { z } from 'zod';

const spokenlanguageSchema = z.object({
	english_name: z.string().optional(),
	iso_639_1: z.string().optional(),
	name: z.string().optional()
});

const productioncountrySchema = z.object({
	iso_3166_1: z.string().optional(),
	name: z.string().optional()
});

const productioncompanySchema = z.object({
	id: z.number().optional(),
	logo_path: z.string().optional().nullable(),
	name: z.string().optional(),
	origin_country: z.string().optional()
});

const genreSchema = z.object({
	id: z.number().optional(),
	name: z.string().optional()
});

export const movieSchema = z.object({
	adult: z.boolean().optional(),
	backdrop_path: z.string().optional().nullable(),
	genre_ids: z.array(z.number()).optional(),
	id: z.number().optional(),
	original_language: z.string().optional(),
	original_title: z.string().optional(),
	overview: z.string().optional(),
	popularity: z.number().optional(),
	poster_path: z.string().optional().nullable(),
	release_date: z.string().optional(),
	title: z.string().optional(),
	video: z.boolean().optional(),
	vote_average: z.number().optional(),
	vote_count: z.number().optional()
});

export const moviesSchema = z.array(movieSchema);

export const resMovieDetailSchema = z.object({
	adult: z.boolean().optional(),
	backdrop_path: z.string().optional().nullable(),
	belongs_to_collection: z.any().optional(),
	budget: z.number().optional(),
	genres: z.array(genreSchema).optional(),
	homepage: z.string().optional(),
	id: z.number().optional(),
	imdb_id: z.string().optional(),
	original_language: z.string().optional(),
	original_title: z.string().optional(),
	overview: z.string().optional(),
	popularity: z.number().optional(),
	poster_path: z.string().optional().nullable(),
	production_companies: z.array(productioncompanySchema).optional(),
	production_countries: z.array(productioncountrySchema).optional(),
	release_date: z.string().optional(),
	revenue: z.number().optional(),
	runtime: z.number().optional(),
	spoken_languages: z.array(spokenlanguageSchema).optional(),
	status: z.string().optional(),
	tagline: z.string().optional(),
	title: z.string().optional(),
	video: z.boolean().optional(),
	vote_average: z.number().optional(),
	vote_count: z.number().optional()
});

export const resMoviePopularSchema = z.object({
	page: z.number().optional(),
	results: moviesSchema.optional(),
	total_pages: z.number().optional(),
	total_results: z.number().optional()
});
