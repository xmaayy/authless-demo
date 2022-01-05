<script lang="ts">
	import { user } from '$lib/userstore';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		{#if $user.username != null}
			<div class="welcome">
				<picture>
					<source srcset="svelte-welcome.webp" type="image/webp" />
					<img src="svelte-welcome.png" alt="Welcome" />
				</picture>
			</div>
			Logged in as:
			{$user.username} <br />
		{:else} 
			Go Log In (look in the header)
		{/if}
	</h1>
	<div class="token">
		{#if $user.username != null}
			Your user token is:<br />
			{$user.token}
		{/if}
	</div>
	<div class="content token">
		<h1>About this app</h1>

		<p>
			I basically just created a default sveltekit app to show off this lovely little authentication
			library. Go to the login page to create an account or to log into one you've already created.
			I don't think I'll ever hit the cap to what a free version of cloudflare gets me.
		</p>
	</div>
</section>

<style>
	.token {
		text-align: center;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
