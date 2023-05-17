<script lang="ts">
	import type { Movie } from '../types/types';

	export let movie: Movie;
</script>

<div class="movie-card">
	<a href={`/movie/${movie.id}`} data-sveltekit-noscroll data-sveltekit-preload-data>
		{#if movie.poster_path}
			<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
		{:else}
			<div class="img-placeholder" />
		{/if}
	</a>

	<div class="description">
		<p>{movie.title}</p>
		<p>{movie.release_date}</p>
	</div>
</div>

<style>
	img,
	.img-placeholder {
		width: 100%;
		height: 30vh;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}

	.img-placeholder {
		background: #b4f0ff;
	}
</style>
