<script lang="ts">
	let open = false;
	const toggle = () => {
		open = !open;
	};
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
		<nav>
			<ul>
				<li><a href="/cours">cours</a></li>
				<li><a href="/path">parcours</a></li>
				<li><a href="/workshops">workshops</a></li>
				<li><a href="tarif">trafication</a></li>
			</ul>
		</nav>
	{/if}
	<div>
		<button
			><span
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

		nav {
			position: fixed;
			top: 68px;
			left: 0;
			width: 94%;
			background: var(--bg-color);
			height: 100vh;

			padding-top: 5rem;
			align-items: center;
			border-right: 1px solid var(--black-color);
			text-transform: uppercase;

			text-justify: left;
			ul li {
				padding-left: 4rem;
				margin-bottom: 1rem;
			}
		}

		button {
			svg {
				width: 20px;
				height: 20px;
			}
			svg:hover path {
				fill: var(--accent-color);
			}
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
		div {
			display: flex;
			align-items: center;
		}
	}
</style>
