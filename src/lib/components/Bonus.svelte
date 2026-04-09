<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { getWhatsAppURL } from '$lib/stores/whatsapp';

	const waURL = getWhatsAppURL('Olá, vim pelo site e gostaria de agendar minha avaliação gratuita e garantir meu brinde!');
</script>

<section class="py-20 lg:py-24" style="background: #0F0F0F;" aria-label="Bônus para novos clientes">
	<div class="max-w-6xl mx-auto px-6 text-center">

		<!-- Badge -->
		<div use:reveal class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 mb-6">
			<span class="w-1.5 h-1.5 rounded-full bg-[#D4A017] shrink-0" aria-hidden="true"></span>
			<span class="text-xs font-medium text-[#D4A017] tracking-wide uppercase"
				style="font-family: 'DM Sans', system-ui, sans-serif;">
				Exclusivo para novos clientes
			</span>
		</div>

		<!-- Gift icon -->
		<div use:reveal={{ delay: 60 }} class="flex justify-center mb-6">
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
				<!-- Ribbon vertical -->
				<line x1="24" y1="14" x2="24" y2="42" stroke="#D4A017" stroke-width="1.5" stroke-linecap="round"/>
				<!-- Box body -->
				<rect x="8" y="20" width="32" height="22" rx="1.5" stroke="#D4A017" stroke-width="1.5"/>
				<!-- Lid -->
				<rect x="6" y="14" width="36" height="7" rx="1.5" stroke="#D4A017" stroke-width="1.5"/>
				<!-- Left bow loop -->
				<path d="M24 14 C20 10 12 10 14 6 C16 2 22 6 24 14Z" stroke="#D4A017" stroke-width="1.5" stroke-linejoin="round"/>
				<!-- Right bow loop -->
				<path d="M24 14 C28 10 36 10 34 6 C32 2 26 6 24 14Z" stroke="#D4A017" stroke-width="1.5" stroke-linejoin="round"/>
			</svg>
		</div>

		<!-- Heading -->
		<div use:reveal={{ delay: 80 }}>
			<h2
				class="font-display text-3xl lg:text-4xl font-bold text-[#F5F5F5] mb-4"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				Ganhe um brinde especial na sua primeira visita
			</h2>
		</div>

		<!-- Subtext -->
		<div use:reveal={{ delay: 120 }} class="mb-10">
			<!-- ajustar descrição do brinde com o Marcos -->
			<p class="text-[#A0A0A0] max-w-lg mx-auto" style="font-family: 'DM Sans', system-ui, sans-serif;">
				Todo cliente novo que agendar pelo site recebe um mimo do Marcos na hora do atendimento.
			</p>
		</div>

		<!-- CTA -->
		<div use:reveal={{ delay: 160 }}>
			<a
				href={waURL}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Agendar e garantir meu brinde pelo WhatsApp"
				class="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-semibold text-[#0A0A0A] bg-[#D4A017] hover:bg-[#F0B429] transition-colors duration-200 text-sm"
				style="font-family: 'DM Sans', system-ui, sans-serif;"
			>
				Agendar e garantir meu brinde
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
					<path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>

	</div>
</section>
