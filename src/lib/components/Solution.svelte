<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { CircleCheck, Shield, Clock } from 'lucide-svelte';

	const cards = [
		{
			icon: CircleCheck,
			title: 'Sem cirurgia',
			desc: 'Procedimento não invasivo, sem cortes, sem anestesia.'
		},
		{
			icon: Shield,
			title: 'Sem dor',
			desc: 'Aplicação confortável e tranquila do início ao fim.'
		},
		{
			icon: Clock,
			title: 'Resultado no mesmo dia',
			desc: 'Sai transformado na mesma sessão, sem espera.'
		}
	];
</script>

<section class="bg-bg-primary py-20 lg:py-24" aria-label="O que é a prótese capilar">
	<div class="max-w-6xl mx-auto px-6">

		<div use:reveal class="mb-14 flex flex-col items-center">
			<h2
				class="font-display text-3xl lg:text-4xl font-bold text-text-primary mb-4 text-center"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				O que é a prótese capilar
			</h2>
			<p class="text-text-secondary text-lg max-w-xl text-center">
				Uma solução estética não cirúrgica que devolve aparência natural
				ao cabelo — com discrição total e resultado imediato.
			</p>
		</div>

		<div class="grid sm:grid-cols-3 gap-6">
			{#each cards as card, i}
				{@const Icon = card.icon}
				<div
					use:reveal={{ delay: i * 100 }}
					class="bg-bg-card border border-border rounded-sm p-6"
					style="border-top: 2px solid #D4A017;"
				>
					<Icon size={24} color="#D4A017" strokeWidth={1.5} />
					<h3
						class="mt-4 mb-2 text-lg font-semibold text-text-primary"
						style="font-family: 'DM Sans', system-ui, sans-serif;"
					>
						{card.title}
					</h3>
					<p class="text-sm text-text-secondary leading-relaxed">{card.desc}</p>
				</div>
			{/each}
		</div>

	</div>
</section>
