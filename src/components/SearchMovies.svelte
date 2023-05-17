<script lang="ts">
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let inputValue = '';
	let active = false;

	function blurHandler() {
		if (!inputValue) {
			active = false;
		}
	}

	function submitHandler() {
		if (!inputValue) {
			return;
		}

		goto(`/search/${inputValue}`);
	}
</script>

<form class="search" on:submit|preventDefault={submitHandler}>
	{#if !active}
		<label in:fly={{ y: -10, duration: 200 }} out:fly={{ y: -10, duration: 200 }} for="search-input"
			>Search Movie</label
		>
	{/if}
	<div class="search-bar">
		<input
			on:blur={blurHandler}
			on:focus={() => (active = true)}
			bind:value={inputValue}
			id="search-input"
			type="text"
		/>
		<button>Search</button>
	</div>
</form>

<style>
	.search {
		width: 40%;
		margin: 1rem 0rem 1rem 0rem;
		position: relative;
	}

	label {
		position: absolute;
		width: auto;
		top: 0.6rem;
		bottom: 0.5rem;
		left: 1rem;
		right: 3.5rem;
		color: rgba(255, 255, 255, 0.6);
		z-index: 1;
		cursor: auto;
		font-size: 0.8rem;
		font-style: italic;
		pointer-events: none;
	}

	.search-bar {
		position: relative;
	}

	button {
		font-size: 0.7rem;
		padding: 0 0.5rem;
		background: rgb(96, 110, 201);
		color: #fff;
		font-weight: bold;
		border: none;
		position: absolute;
		bottom: 50%;
		right: 0;
		transform: translate(0, 50%);
		height: 100%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		cursor: pointer;
	}

	input {
		width: 100%;
		border: none;
		font-size: 0.8rem;
		font-family: 'Poppins', sans-serif;
		outline: none;
		color: #fff;
		padding: 0.6rem 3.5rem 0.6rem 1rem;
		transition: background 0.75s ease-out;
		font-weight: bold;
		background: rgb(63, 63, 63);
		border-radius: 10px;
	}

	input:focus {
		background: rgb(39, 39, 39);
	}
</style>
