<script lang="ts">
	import { fly } from 'svelte/transition';
	import SearchedMovies from '../../../components/SearchedMovies.svelte';

	export let data;
</script>

<section in:fly={{ duration: 300, y: 100, delay: 300 }} out:fly={{ duration: 300, y: 100 }}>
	<SearchedMovies
		movies={data.movies}
		searchTerm={data.searchTerm}
		totalResults={data.totalResults}
	/>
</section>
