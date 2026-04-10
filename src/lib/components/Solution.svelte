<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const cards = [
		{
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4" stroke="#D4A017" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="9" stroke="#D4A017" stroke-width="1.5"/></svg>`,
			title: 'Sem cirurgia',
			desc: 'Procedimento não invasivo, sem cortes, sem anestesia.'
		},
		{
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#D4A017" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
			title: 'Sem dor',
			desc: 'Aplicação confortável e tranquila do início ao fim.'
		},
		{
			icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="#D4A017" stroke-width="1.5"/><path d="M12 7v5l3 3" stroke="#D4A017" stroke-width="1.5" stroke-linecap="round"/></svg>`,
			title: 'Resultado no mesmo dia',
			desc: 'Sai transformado na mesma sessão, sem espera.'
		}
	];
</script>

<section class="bg-[#0A0A0A] py-20 lg:py-24" aria-label="O que é a prótese capilar">
	<div class="max-w-6xl mx-auto px-6">

		<div use:reveal class="mb-14 flex flex-col items-center">
			<h2
				class="font-display text-3xl lg:text-4xl font-bold text-[#F5F5F5] mb-4 text-center"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				O que é a prótese capilar
			</h2>
			<p class="text-[#A0A0A0] text-lg max-w-xl text-center">
				Uma solução estética não cirúrgica que devolve aparência natural
				ao cabelo — com discrição total e resultado imediato.
			</p>
		</div>

		<div class="grid sm:grid-cols-3 gap-6">
			{#each cards as card, i}
				<div
					use:reveal={{ delay: i * 100 }}
					class="bg-[#181818] border border-[#2A2A2A] rounded-sm p-6"
					style="border-top: 2px solid #D4A017;"
				>
					{@html card.icon}
					<h3
						class="mt-4 mb-2 text-lg font-semibold text-[#F5F5F5]"
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
