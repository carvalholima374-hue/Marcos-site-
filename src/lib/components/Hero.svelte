<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { getWhatsAppURL } from '$lib/stores/whatsapp';
	import { PUBLIC_BUSINESS_NAME } from '$env/static/public';

	const waURL = getWhatsAppURL();
</script>

<section
	class="relative min-h-screen flex items-center bg-[#0A0A0A] overflow-hidden"
	aria-label="Apresentação principal"
>
	<!-- SVG noise texture -->
	<svg class="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" aria-hidden="true">
		<filter id="noise">
			<feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
			<feColorMatrix type="saturate" values="0" />
		</filter>
		<rect width="100%" height="100%" filter="url(#noise)" />
	</svg>

	<!-- Subtle horizontal line accent -->
	<div class="absolute top-0 left-0 right-0 h-px bg-[#D4A017] opacity-40" aria-hidden="true"></div>

	<div class="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 lg:py-0">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen lg:min-h-0 lg:py-24">

			<!-- Left: copy -->
			<div use:reveal={{ delay: 0 }}>
				<!-- Badge -->
				<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2A2A2A] bg-[#111111] mb-8">
					<span class="w-1.5 h-1.5 rounded-full bg-[#D4A017] flex-shrink-0" aria-hidden="true"></span>
					<span class="text-xs font-medium text-[#A0A0A0] tracking-wide uppercase">
						Atendimento presencial · Santo André/SP
					</span>
				</div>

				<!-- H1 -->
				<h1
					class="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F5F5F5] leading-tight mb-6"
					style="font-family: 'Playfair Display', Georgia, serif;"
				>
					Recupere seu<br />cabelo — e sua<br />
					<em class="text-[#D4A017] not-italic">confiança.</em>
				</h1>

				<!-- Subtitle -->
				<p class="text-lg lg:text-xl text-[#A0A0A0] leading-relaxed mb-10 max-w-md">
					Prótese capilar 100% natural. Sem cirurgia, sem dor,
					resultado no mesmo dia.
				</p>

				<!-- CTA -->
				<div class="flex flex-col sm:flex-row items-start gap-4">
					<a
						href={waURL}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Agendar avaliação gratuita pelo WhatsApp"
						class="cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4A017] text-[#0A0A0A] font-semibold text-base rounded-sm transition-all duration-200 hover:bg-[#F0B429] hover:scale-[1.02] active:scale-100"
					>
						Agendar avaliação gratuita
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
							<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
				</div>

				<p class="mt-4 text-sm text-[#A0A0A0]">
					Avaliação 100% gratuita e sem compromisso
				</p>
			</div>

			<!-- Right: photo placeholder -->
			<div use:reveal={{ delay: 150 }} class="order-first lg:order-last">
				<div
					class="relative w-full max-w-sm mx-auto lg:max-w-none border-2 border-dashed border-[#2A2A2A] rounded-sm flex flex-col items-center justify-center bg-[#111111] text-[#A0A0A0]"
					style="aspect-ratio: 4/5;"
					aria-label="Foto de resultado — substituir pela foto real"
				>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" class="mb-3 opacity-40" aria-hidden="true">
						<rect x="5" y="8" width="30" height="24" rx="2" stroke="currentColor" stroke-width="1.5"/>
						<circle cx="20" cy="18" r="5" stroke="currentColor" stroke-width="1.5"/>
						<path d="M5 28l8-6 5 4 7-8 10 10" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
					</svg>
					<span class="text-sm font-medium">foto do resultado aqui</span>
					<span class="text-xs mt-1 opacity-60">substituir pela foto real</span>
				</div>
			</div>

		</div>
	</div>
</section>
