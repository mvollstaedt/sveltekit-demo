<script lang="ts">
	import { fly } from 'svelte/transition';
	import PopularMovies from '../components/PopularMovies.svelte';

	export let data;
</script>

<section in:fly={{ duration: 300, y: 100, delay: 300 }} out:fly={{ duration: 300, y: 100 }}>
	<PopularMovies popularMovies={data.popularMovies} />
</section>
