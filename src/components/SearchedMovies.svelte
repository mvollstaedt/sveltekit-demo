<script lang="ts">
	import type { Movie } from '../types/types';
	import MovieCard from './MovieCard.svelte';

	export let movies: Movie[] = [];
	export let searchTerm: string = '';
	export let totalResults: number = 0;
</script>

<h3>{totalResults} Result{totalResults !== 1 ? 's' : ''} for "{searchTerm}"</h3>
<div class="movies">
	{#each movies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h3 {
		padding: 0 1rem;
	}

	.movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 1rem;
	}
</style>
