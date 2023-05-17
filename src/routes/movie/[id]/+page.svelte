<script lang="ts">
	import { fly } from 'svelte/transition';

	export let data;
</script>

<div
	class="movie-details"
	in:fly={{ duration: 300, y: 100, delay: 300 }}
	out:fly={{ duration: 300, y: 100 }}
>
	<div class="img-container">
		<img
			src={`https://image.tmdb.org/t/p/original/${data.movieDetails?.backdrop_path}`}
			alt={data.movieDetails?.title}
		/>
	</div>

	<div class="txt-container">
		<h1>{data.movieDetails?.title}</h1>
		<p class="overview">{data.movieDetails?.overview}</p>

		<p>
			<span>Release Date: </span>{data.movieDetails?.release_date}<br />
			<span>Budget:</span> ${data.movieDetails?.budget}<br />
			<span>Rating:</span>{data.movieDetails?.vote_average}<br />
			<span>Runtime:</span>{data.movieDetails?.runtime}mins
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}

	p {
		padding: 1rem 0rem;
	}

	.img-container {
		width: 100%;
	}

	img {
		width: 100%;
		border-radius: 1rem;
	}

	.movie-details {
		margin: 2rem 20%;
	}

	span {
		font-weight: bold;
	}
</style>
