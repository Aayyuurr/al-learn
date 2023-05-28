<script lang="ts">
	import { slide } from 'svelte/transition';
	let open = false;
	const toggle = () => {
		open = !open;
	};

	import { page } from '$app/stores';
	console.log($page.url.pathname);
</script>

<div class="nav-wrapper">
	{#if !open}
		<button on:click={toggle}
			><span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					><path
						d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
					/></svg
				>
			</span></button
		>
	{:else}
		<button on:click={toggle}
			><span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 384 512"
					><path
						d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
					/></svg
				>
			</span></button
		>
	{/if}
	<a href="/">
		<h1>Algerien Learn</h1>
	</a>
	{#if open}
		<div
			class="nav-links"
			transition:slide={{ duration: 300, axis: 'x' }}
		>
			<nav>
				<ul>
					<li aria-current={$page.url.pathname === '/home'}>
						<a href="/home">home</a>
					</li>
					<li
						aria-current={$page.url.pathname === '/cours'}
					>
						<a href="/cours">cours</a>
					</li>
					<li aria-current={$page.url.pathname === '/path'}>
						<a href="/path">parcours</a>
					</li>
					<li
						aria-current={$page.url.pathname ===
							'/workshops'}
					>
						<a href="/workshops">workshops</a>
					</li>
					<li
						aria-current={$page.url.pathname === '/tarif'}
					>
						<a href="tarif">tarification</a>
					</li>
				</ul>
			</nav>

			<div class="social">
				<a href="/">
					<!-- facebook -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						> <path
							d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
						/></svg
					>
				</a>
				<a href="/">
					<!-- instagram -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						> <path
							d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
						/></svg
					>
				</a>
				<a href="/">
					<!-- tiktook -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						> <path
							d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
						/></svg
					>
				</a>
			</div>
		</div>
	{/if}
	<div>
		<button>
			<!-- use  data-sveltekit-keepfocus -->
			<span
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					><path
						d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
					/></svg
				></span
			></button
		>
		<button
			><span
				><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					><path
						d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
					/></svg
				></span
			></button
		>
	</div>
</div>

<style lang="scss">
	.nav-wrapper {
		height: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		
		.social{
			height: 5rem;
			display: flex;
			flex-direction: row;
			gap: 2rem;
			justify-content: left;
			align-items: center;
			padding-left: 4rem;
			background-color: var(--primary-color);
		}
		.nav-links {
			border-right: 1px solid var(--black-color);

			display: flex;
			flex-direction: column;
			justify-content: space-between;
			position: fixed;
			top: 68px;
			left: 0;
			width: 94%;
			background: var(--bg-color);
			height: calc(100vh - 68px);

			padding-top: 5rem;

			text-transform: uppercase;

			text-justify: left;
			ul li {
				text-align: left;
				margin-bottom: 0.3rem;
				width: 100%;
				height: 100%;
				a {
					padding: 0.5rem 4rem;
					display: inline-block;
					width: 100%;
					height: 100%;
				}
			}
			ul li:hover {
				background-color: var(--shadow-color);
			}
		}
		svg {
				width: 20px;
				height: 20px;
			}
			svg:hover path {
				fill: var(--accent-color);
			}
		button {
			
			margin: 0;
			padding: 0;
			width: 20px;
			height: 20px;
			background-color: transparent;
			border: none;
			transition: transform 0.2s ease, opacity 0.2s ease;
			&:hover {
				cursor: pointer;
				// shrink
				transform: scale(1.1);
			}
		}
		div button:first-of-type {
			margin-right: 10px;
		}
		[aria-current]:not([aria-current='false']) {
			background-color: var(--shadow-color);
		}
		[aria-current]:not([aria-current='false']):hover {
			background-color: var(--shadow-color-accent);
		}
		a:hover {
			color: initial;
		}
	}
</style>
