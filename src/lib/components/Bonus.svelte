<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { getWhatsAppURL } from '$lib/stores/whatsapp';
	import { Gift } from 'lucide-svelte';

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
			<Gift size={48} color="#D4A017" strokeWidth={1.5} />
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
				Todo cliente novo recebe um brinde do Marcos na hora do atendimento, um conjunto de produtos devidamente selecionados para ajudá-lo a cuidar do seu novo penteado.
			</p>
		</div>

		<!-- Brinde image -->
		<div use:reveal={{ delay: 160 }} class="flex justify-center">
			<img
				src="images/brinde.jpeg"
				alt="Kit de brinde exclusivo para novos clientes"
				class="max-w-2xl w-full rounded-lg object-cover"
			/>
		</div>

	</div>
</section>
