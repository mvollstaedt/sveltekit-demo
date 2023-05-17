export interface RES_MOVIE_POPULAR {
	page?: number;
	results?: Movies;
	total_pages?: number;
	total_results?: number;
}

export interface RES_MOVIE_DETAIL {
	adult?: boolean;
	backdrop_path?: string | null;
	belongs_to_collection?: any;
	budget?: number;
	genres?: Genre[];
	homepage?: string;
	id?: number;
	imdb_id?: string;
	original_language?: string;
	original_title?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string | null;
	production_companies?: Productioncompany[];
	production_countries?: Productioncountry[];
	release_date?: string;
	revenue?: number;
	runtime?: number;
	spoken_languages?: Spokenlanguage[];
	status?: string;
	tagline?: string;
	title?: string;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
}

interface Spokenlanguage {
	english_name?: string;
	iso_639_1?: string;
	name?: string;
}

interface Productioncountry {
	iso_3166_1?: string;
	name?: string;
}

interface Productioncompany {
	id?: number;
	logo_path?: string | null;
	name?: string;
	origin_country?: string;
}

interface Genre {
	id?: number;
	name?: string;
}

export type Movies = Movie[];

export interface Movie {
	adult?: boolean;
	backdrop_path?: string | null;
	genre_ids?: number[];
	id?: number;
	original_language?: string;
	original_title?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string | null;
	release_date?: string;
	title?: string;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
}
