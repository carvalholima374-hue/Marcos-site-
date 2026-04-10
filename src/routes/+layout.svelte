<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Marcos Prótese Capilar</title>
	<link rel="icon" href="favicon.png" type="image/png" />
	<meta name="description" content="Prótese capilar 100% natural em Santo André/SP. Sem cirurgia, sem dor, resultado no mesmo dia. Agende sua avaliação gratuita." />
</svelte:head>

{@render children()}
