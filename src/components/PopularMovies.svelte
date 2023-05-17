<script lang="ts">
	import type { Movie } from '../types/types';
	import MovieCard from './MovieCard.svelte';
	import SearchMovies from './SearchMovies.svelte';

	export let popularMovies: Movie[] = [];
</script>

<SearchMovies />
<h3>Popular Movies</h3>
<div class="popular-movies">
	{#each popularMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h3 {
		padding: 0 1rem;
	}

	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
	}
</style>
