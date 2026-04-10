<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const cards = [
		{
			icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" stroke="#D4A017" stroke-width="1.4"/><path d="M11 7v4l2.5 2.5" stroke="#D4A017" stroke-width="1.4" stroke-linecap="round"/></svg>`,
			title: 'Cabelo 100% humano',
			desc: 'Textura, cor e movimento idênticos ao cabelo natural.'
		},
		{
			icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 3C7.13 3 4 6.13 4 10c0 2.5 1.27 4.7 3.2 6.04L11 19l3.8-2.96A7 7 0 0018 10c0-3.87-3.13-7-7-7z" stroke="#D4A017" stroke-width="1.4"/></svg>`,
			title: 'Feito sob medida',
			desc: 'Cada prótese ajustada ao formato do seu couro cabeludo.'
		},
		{
			icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M4 11l4 4 10-8" stroke="#D4A017" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
			title: 'Resultado imediato',
			desc: 'Sem esperar semanas ou meses — sai transformado no mesmo dia.'
		},
		{
			icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 2l2.09 6.26H20l-5.45 3.96 2.09 6.26L11 14.52l-5.64 3.96 2.09-6.26L2 8.26h6.91L11 2z" stroke="#D4A017" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
			title: 'Primeiro em Santo André',
			desc: 'Pioneiro na aplicação de prótese capilar na cidade, com anos de bagagem em corte de cabelo e barba.'
		}
	];
</script>

<section class="bg-[#111111] py-20 lg:py-24" aria-label="Diferenciais">
	<div class="max-w-6xl mx-auto px-6">

		<div use:reveal class="mb-14 flex flex-col items-center">
			<h2
				class="font-display text-3xl lg:text-4xl font-bold text-[#F5F5F5]"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				Por que escolher o Marcos
			</h2>
		</div>

		<div class="grid sm:grid-cols-2 gap-6">
			{#each cards as card, i}
				<div
					use:reveal={{ delay: i * 80 }}
					class="bg-[#181818] border border-[#2A2A2A] rounded-sm p-6"
					style="border-top: 2px solid #D4A017;"
				>
					{@html card.icon}
					<h3
						class="mt-4 mb-2 text-base font-semibold text-[#F5F5F5]"
						style="font-family: 'DM Sans', system-ui, sans-serif;"
					>
						{card.title}
					</h3>
					<p class="text-sm text-[#A0A0A0] leading-relaxed">{card.desc}</p>
				</div>
			{/each}
		</div>

	</div>
</section>
