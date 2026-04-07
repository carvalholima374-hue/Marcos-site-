<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { getWhatsAppURL } from '$lib/stores/whatsapp';

	const waURL = getWhatsAppURL();

	const faqs = [
		{
			q: 'A prótese capilar dói?',
			a: 'Não. O procedimento é completamente não invasivo e não causa nenhuma dor ou desconforto. É uma aplicação externa, sem cortes ou agulhas.'
		},
		{
			q: 'Vai aparecer que é prótese?',
			a: 'Não, quando bem aplicada e ajustada ao seu perfil, a prótese é completamente indistinguível do cabelo natural — tanto visualmente quanto ao toque.'
		},
		{
			q: 'Quanto tempo dura?',
			a: 'Com os cuidados adequados, uma prótese capilar dura em média de 3 a 6 meses antes de precisar de manutenção ou substituição.'
		},
		{
			q: 'Posso molhar, ir à academia?',
			a: 'Sim. Após o período inicial de adaptação, você pode nadar, malhar, tomar banho e fazer todas as atividades do dia a dia normalmente.'
		},
		{
			q: 'Como é a manutenção?',
			a: 'A manutenção é simples e periódica. O Marcos orienta cada cliente sobre os cuidados específicos para o seu tipo de prótese e estilo de vida.'
		},
		{
			q: 'Qual o custo?',
			a: null // special case with WhatsApp link
		},
		{
			q: 'Posso fazer penteados e cortes normalmente?',
			a: 'Sim. A prótese pode ser cortada, penteada e estilizada como cabelo natural — inclusive com produtos de finalização.'
		},
		{
			q: 'A prótese atrapalha o crescimento do cabelo natural?',
			a: 'Não. A prótese é aplicada sobre o couro cabeludo sem bloquear folículos capilares. O cabelo natural continua seu ciclo normalmente.'
		}
	];
</script>

<section class="bg-[#111111] py-20 lg:py-24" aria-label="Perguntas frequentes">
	<div class="max-w-3xl mx-auto px-6">

		<div use:reveal class="mb-12">
			<h2
				class="font-display text-3xl lg:text-4xl font-bold text-[#F5F5F5]"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				Perguntas frequentes
			</h2>
		</div>

		<div use:reveal={{ delay: 80 }}>
			{#each faqs as faq, i}
				<details class="faq-item group border-b border-[#2A2A2A] last:border-b-0">
					<summary
						class="flex items-center justify-between gap-4 py-5 cursor-pointer list-none text-[#F5F5F5] font-medium text-base hover:text-[#D4A017] transition-colors duration-200"
					>
						<span>{faq.q}</span>
						<!-- Arrow SVG -->
						<svg
							class="faq-arrow flex-shrink-0 w-4 h-4 text-[#D4A017] transition-transform duration-300"
							viewBox="0 0 16 16"
							fill="none"
							aria-hidden="true"
						>
							<path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</summary>

					<div class="faq-body pb-5">
						{#if faq.q === 'Qual o custo?'}
							<p class="text-[#A0A0A0] text-sm leading-relaxed">
								Os valores variam conforme o tipo de prótese e as necessidades de cada cliente.
								<a
									href={waURL}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Receber orçamento personalizado pelo WhatsApp"
									class="text-[#D4A017] hover:text-[#F0B429] underline underline-offset-2 transition-colors"
								>Entre em contato para receber um orçamento personalizado.</a>
							</p>
						{:else}
							<p class="text-[#A0A0A0] text-sm leading-relaxed">{faq.a}</p>
						{/if}
					</div>
				</details>
			{/each}
		</div>

	</div>
</section>

<style>
	.faq-item[open] .faq-arrow {
		transform: rotate(180deg);
	}

	.faq-body {
		overflow: hidden;
	}

	/* Smooth open/close via max-height animation */
	details > summary {
		-webkit-user-select: none;
		user-select: none;
	}

	details > summary::-webkit-details-marker {
		display: none;
	}
</style>
