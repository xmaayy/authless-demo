<script lang="ts">
import { goto } from "$app/navigation";



	// We'll store the token in here and decode it into
	// the various components later
	type User = {
		username: string;
		token: string;
	};

	let user: User;
	let username: string;
	let password: string;

	async function login() {
		const res = await fetch('/user', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				action: "register",
				username: username,
				password: password
			})
		});
        if(res.status == 200){
            console.log(await res.json());
			goto("/");
        } else {
            alert(await res.text());
        }
	}
</script>

<svelte:head>
	<title>Login Page</title>
</svelte:head>

<div class="login">
	<h1>Sign Up</h1>
	<div class="new">
		<input name="text" placeholder="Username" bind:value={username} /><br />
		<input name="text" placeholder="Password" type="password" bind:value={password} />
		<input type="button" on:click={login} value="Submit" />
	</div>
</div>

<style>
	.login {
		padding-bottom: 3rem;
		background-color: #FFFFFF;
		width: 75%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
		border-radius: 20px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}

	.new {
		margin: auto;
		width: 50%;
	}

	input {
		border: 1px solid black;
		margin-bottom: 1rem;
	}

	input:focus-visible {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	}

	.new input {
		font-size: 28px;
		width: 100%;
		padding: 0.5em 1em 0.3em 1em;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
		text-align: center;
	}

</style>
