<script>
</script>

<svelte:head>
	<title>Welcome to the Veritas System | AssetVal</title>
	<meta name="description" content="Veritas App" />
</svelte:head>

<form class="auth-form" method="post" action="/userAuth/login">
	<div class="form-group">
		<div class="form-label-group">
			<input type="email" id="email" name="email" class="form-control" autocomplete="email" />
			<label for="email">Email</label>
		</div>
	</div>

	<div class="form-group">
		<div class="form-label-group">
			<input type="password" id="password" name="password" class="form-control" autocomplete="current-password" />
			<label for="password">Password</label>
		</div>
	</div>

	<div class="form-group">
		<button class="btn btn-blue btn-lg">Log in</button>
	</div>

	<div class="text-center pt-3">
		<a href="/forgot-pass" class="link">Forgot Password?</a>
	</div>
</form>

<style lang="scss">
	@import '../styles/inputStyles.scss';

	.auth-form {
		position: relative;
		z-index: 1;
		padding: 3rem 2rem 1rem;
		max-width: 420px;
		width: 100%;
		border-radius: 0.25rem;
		background-color: #fff;
		box-shadow: 0 0 0 1px rgba(20,20,31,.05), 0 1px 3px 0 rgba(20,20,31,.15);

		.link {
			text-decoration: underline;
		}

		a {
			color: #105f9e;
			background-color: rgba(0,0,0,0);
		}
	}

	button.btn {
    @apply font-bold py-2 px-4 rounded;
		backface-visibility: hidden;
		display: block;
  	width: 100%;

		&.btn-lg {
			height: 2.875rem;
  		font-size: 1rem;
			line-height: 1.8;
		}

		&.btn-blue {
			@apply text-white;
			border-color: #2b5a92;
			background-color: #105f9e;
  	}
  }
  

</style>
