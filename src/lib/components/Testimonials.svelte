<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const testimonials = [
		{
			name: '[Nome do cliente 1]',
			location: '[Cidade, SP]',
			text: '[Depoimento real aqui]',
			rating: 5,
		},
		{
			name: '[Nome do cliente 2]',
			location: '[Cidade, SP]',
			text: '[Depoimento real aqui]',
			rating: 5,
		},
	];
</script>

<section
	class="bg-bg-primary py-20 lg:py-24"
	aria-label="Depoimentos de clientes"
>
	<!-- Heading -->
	<div class="max-w-6xl mx-auto px-6 mb-14" use:reveal>
		<h2
			class="font-display text-3xl lg:text-4xl font-bold text-text-primary text-center"
			style="font-family: 'Playfair Display', Georgia, serif;"
		>
			O que os clientes dizem
		</h2>
		<p
			class="mt-3 text-sm text-text-secondary text-center"
			style="font-family: 'DM Sans', system-ui, sans-serif;"
		>
			Resultados reais de clientes reais
		</p>
	</div>

	<!-- Cards -->
	<div class="max-w-6xl mx-auto px-6" use:reveal={{ delay: 80 }}>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each testimonials as item, i}
				<article
					class="testimonial-card"
					aria-label="Depoimento de {item.name}"
				>
					<!-- Stars -->
					<div class="stars" aria-label="{item.rating} estrelas">
						{#each { length: item.rating } as _}
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
								<path
									d="M7 1l1.63 3.84 4.12.37-3.04 2.72.92 4.07L7 9.9l-3.63 2.1.92-4.07L1.25 5.21l4.12-.37L7 1z"
									fill="#D4A017"
								/>
							</svg>
						{/each}
					</div>

					<!-- Testimonial text -->
					<p class="testimonial-text">"{item.text}"</p>

					<!-- Identity -->
					<div class="identity">
						<span class="client-name">{item.name}</span>
						<span class="client-location">{item.location}</span>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	/* ── Cards ── */
	.testimonial-card {
		background: #181818;
		border: 0.5px solid #2A2A2A;
		border-radius: 2px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	/* ── Stars ── */
	.stars {
		display: flex;
		gap: 3px;
	}

	/* ── Text ── */
	.testimonial-text {
		font-family: 'DM Sans', system-ui, sans-serif;
		font-size: 15px;
		line-height: 1.7;
		color: #E0E0E0;
		flex: 1;
	}

	/* ── Identity ── */
	.identity {
		display: flex;
		flex-direction: column;
		gap: 2px;
		margin-top: auto;
		padding-top: 4px;
		border-top: 0.5px solid #2A2A2A;
	}

	.client-name {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 15px;
		font-weight: 500;
		color: #F5F5F5;
	}

	.client-location {
		font-family: 'DM Sans', system-ui, sans-serif;
		font-size: 12px;
		color: #A0A0A0;
	}
</style>
