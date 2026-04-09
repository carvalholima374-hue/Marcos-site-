<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	interface Testimonial {
		name: string;
		location: string;
		text: string;
		rating: number;
	}

	const testimonials: Testimonial[] = [
		{
			name: 'Ricardo M.',
			location: 'Santo André, SP',
			text: 'Fiz a avaliação sem expectativa nenhuma e saí transformado no mesmo dia. Parece meu próprio cabelo, ninguém percebeu que é prótese.',
			rating: 5
		},
		{
			name: 'Alessandro F.',
			location: 'São Bernardo do Campo, SP',
			text: 'Tinha vergonha de tirar o boné faz anos. Hoje não uso mais. O resultado é natural demais, superou tudo que eu esperava.',
			rating: 5
		},
		{
			name: 'Bruno C.',
			location: 'São Paulo, SP',
			text: 'Pesquisei bastante antes de decidir. Escolhi o Marcos pela experiência e não me arrependo. Atendimento impecável do começo ao fim.',
			rating: 5
		},
		{
			name: 'Thiago R.',
			location: 'Mauá, SP',
			text: 'Em menos de 3 horas minha vida mudou. Minha esposa não acreditou quando me viu, achou que eu tinha feito transplante.',
			rating: 5
		},
		{
			name: 'Fábio S.',
			location: 'Diadema, SP',
			text: 'Uso há 8 meses, já lavei, fui à academia, à praia. Não cai, não aparece, não incomoda. Vale cada centavo.',
			rating: 5
		},
		{
			name: 'Carlos E.',
			location: 'Santo André, SP',
			text: 'O Marcos é muito atencioso, explicou tudo antes de começar. Me sinto muito mais confiante no trabalho e nos relacionamentos.',
			rating: 5
		}
	];

	// Duplicate for seamless infinite loop
	const items: Testimonial[] = [...testimonials, ...testimonials];

	const CARD_WIDTH = 320;
	const GAP = 24;
	const STEP = CARD_WIDTH + GAP; // 344px per card

	let arrowOffset = $state(0);
	let isPaused = $state(false);

	function prev() {
		arrowOffset += STEP;
	}

	function next() {
		arrowOffset -= STEP;
	}

	function onTouchStart() {
		isPaused = !isPaused;
	}
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

	<!-- Carousel outer: positioning context for arrows -->
	<div class="carousel-outer" use:reveal={{ delay: 80 }}>
		<!-- Fade mask + overflow clip -->
		<div
			class="carousel-wrapper"
			class:is-paused={isPaused}
			role="region"
			aria-label="Depoimentos de clientes"
			ontouchstart={onTouchStart}
		>
			<!-- Arrow offset layer -->
			<div
				class="translate-layer"
				style="transform: translateX({arrowOffset}px);"
			>
				<!-- Animated track -->
				<div
					class="carousel-track"
					class:paused={isPaused}
					aria-live="off"
				>
					{#each items as item, i}
						<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
						<article
							class="testimonial-card"
							tabindex="0"
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
		</div>

		<!-- Navigation arrows (hidden on mobile via CSS) -->
		<button
			class="arrow arrow-left"
			onclick={prev}
			aria-label="Depoimento anterior"
		>
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
				<path d="M13 4l-6 6 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>

		<button
			class="arrow arrow-right"
			onclick={next}
			aria-label="Próximo depoimento"
		>
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
				<path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
	</div>
</section>

<style>
	/* ── Carousel layout ── */
	.carousel-outer {
		position: relative;
	}

	.carousel-wrapper {
		overflow: hidden;
		mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 8%,
			black 92%,
			transparent 100%
		);
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 8%,
			black 92%,
			transparent 100%
		);
	}

	.translate-layer {
		transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	/* ── Track & animation ── */
	.carousel-track {
		display: flex;
		width: max-content;
		gap: 24px;
		padding: 12px 0 16px; /* breathing room for box-shadow */
		animation: scrollLeft 40s linear infinite;
	}

	.carousel-track.paused {
		animation-play-state: paused;
	}

	/* Pause on hover — só em dispositivos com mouse real */
	@media (hover: hover) {
		.carousel-wrapper:hover .carousel-track {
			animation-play-state: paused;
		}
	}

	/* Pause on keyboard focus inside */
	.carousel-wrapper:focus-within .carousel-track {
		animation-play-state: paused;
	}

	@keyframes scrollLeft {
		from {
			transform: translateX(0);
		}
		to {
			/* -50% because the track is doubled */
			transform: translateX(-50%);
		}
	}

	/* ── Cards ── */
	.testimonial-card {
		width: 320px;
		flex-shrink: 0;
		background: #181818;
		border: 0.5px solid #2A2A2A;
		border-radius: 2px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		outline: none;
		transition: border-color 0.2s ease;
	}

	.testimonial-card:focus-visible {
		border-color: #D4A017;
		box-shadow: 0 0 0 2px rgba(212, 160, 23, 0.25);
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

	/* ── Arrows ── */
	.arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: #181818;
		border: 0.5px solid #2A2A2A;
		color: #A0A0A0;
		cursor: pointer;
		transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
	}

	.arrow:hover {
		border-color: #D4A017;
		color: #D4A017;
		background: #1E1A10;
	}

	.arrow:focus-visible {
		outline: 2px solid #D4A017;
		outline-offset: 2px;
	}

	.arrow-left {
		left: 16px;
	}

	.arrow-right {
		right: 16px;
	}

	/* ── Mobile ── */
	@media (max-width: 639px) {
		.carousel-track {
			animation-duration: 30s;
		}

		.arrow {
			display: none;
		}
	}
</style>
