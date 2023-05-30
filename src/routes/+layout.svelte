<script>
	import LoginHeader from './LoginHeader.svelte';
	import './styles.css';
	import '../app.css';

	const currentYear = new Date().getFullYear();
</script>

<div class="app">
	<LoginHeader />

	<main>
		<slot />
	</main>

	<footer class="auth-footer">
		<p>© {currentYear} AssetVal Inc. All Rights Reserved. <a>Privacy</a> and <a>Terms</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
		background-color: #ececec;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
	}

	a {
		color: #105f9e;
		text-decoration: none;
		background-color: rgba(0,0,0,0);
	}

	footer {
		display: flex;
		justify-content: center;

		&.auth-footer {
			padding: 1rem;
			color: #888c9b;
		}
	}
</style>
