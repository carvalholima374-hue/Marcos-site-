<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { getWhatsAppURL } from '$lib/stores/whatsapp';

	const waURL = getWhatsAppURL();
	const photos = Array.from({ length: 6 }, (_, i) => i);
</script>

<section class="bg-[#0A0A0A] py-20 lg:py-24" aria-label="Transformações antes e depois">
	<div class="max-w-6xl mx-auto px-6">

		<div use:reveal class="mb-2">
			<h2
				class="font-display text-3xl lg:text-4xl font-bold text-[#F5F5F5] mb-2"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				Transformações reais
			</h2>
		</div>

		<div use:reveal={{ delay: 80 }} class="mb-12">
			<p class="text-[#A0A0A0]">Clientes reais, resultados reais</p>
		</div>

		<!-- Photo grid -->
		<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
			{#each photos as _, i}
				<div
					use:reveal={{ delay: i * 60 }}
					class="border-2 border-dashed border-[#2A2A2A] rounded-sm bg-[#111111] flex flex-col items-center justify-center text-[#A0A0A0]"
					style="aspect-ratio: 3/4;"
					aria-label="Foto antes/depois — substituir pela foto real"
				>
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="mb-2 opacity-40" aria-hidden="true">
						<rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" stroke-width="1.2"/>
						<circle cx="16" cy="14" r="4" stroke="currentColor" stroke-width="1.2"/>
						<path d="M4 22l6-5 4 3.5 6-7 8 8.5" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
					</svg>
					<span class="text-xs font-medium">foto antes/depois</span>
				</div>
			{/each}
		</div>

		<!-- Text CTA -->
		<div use:reveal class="text-center">
			<a
				href={waURL}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Ver mais resultados pelo WhatsApp"
				class="inline-flex items-center gap-2 text-[#D4A017] hover:text-[#F0B429] text-sm font-medium transition-colors duration-200 border-b border-[#D4A017] hover:border-[#F0B429] pb-0.5"
			>
				Quer ver mais resultados? Fale com a gente
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
					<path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>

	</div>
</section>
