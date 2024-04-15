<script>
	import '@styles/app.css';
</script>

<svelte:head>
	<title>Docs</title>
</svelte:head>

<header class="bg-slate-300 flex justify-between items-center">
	<div class='text-3xl app-logo'>Docs</div>
	<nav>
		<a href='/'>Home</a>
		<a href='/about'>About</a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer class="bg-slate-800 text-white text-center py-4">
	©{new Date().getFullYear()}
	Docs. All rights reserved.
</footer>
