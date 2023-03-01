<div class="top">
	<nav>
		<a class="github-link" href="https://github.com/darylruggier">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="github-svg"
				width="30"
				height="30"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1.5"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
					d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
				/></svg
			>
		</a>
		<a class="linkedin-link" href="https://linkedin.com/in/darylruggier">
			<svg
				class="linkedin-svg"
				fill="#000000"
				viewBox="-5.5 0 32 32"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><g id="SVGRepo_iconCarrier">
					<title>linkedin</title>
					<path
						d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"
					/>
				</g></svg
			></a
		>
	</nav>
	<slot />
</div>

<style>
	* {
		height: 100vh;
		font-family: 'Inconsolata', monospace;
		overflow: scroll;
	}

	.top {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(
			180deg,
			rgba(2, 0, 36, 1) 0%,
			rgba(9, 9, 121, 1) 57%,
			rgba(0, 141, 195, 1) 100%
		);
	}

	nav {
		display: flex;
		width: 100vw;
		height: 7vh;
		position: sticky;
	}

	nav > a {
		display: flex;
		text-decoration: none;
		height: auto;
		width: auto;
	}

	.github-link {
		padding: 15px 2px 0 15px;
	}

	.linkedin-link {
		padding: 15px 7px 0 7px;
	}

	.github-svg {
		height: auto;
		color: white;
		align-self: center;
		justify-self: center;
	}

	.github-svg:hover {
		color: #00aaeb;
		cursor: pointer;
	}

	.linkedin-svg {
		height: 40px;
		fill: white;
		align-self: center;
		justify-self: center;
	}

	.linkedin-svg:hover {
		fill: #00aaeb;
		cursor: pointer;
	}
</style>
