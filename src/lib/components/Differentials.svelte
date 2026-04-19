<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { Clock, MapPin, Check, Star } from 'lucide-svelte';

	const cards = [
		{
			icon: Clock,
			title: 'Cabelo 100% humano',
			desc: 'Textura, cor e movimento idênticos ao cabelo natural.'
		},
		{
			icon: MapPin,
			title: 'Feito sob medida',
			desc: 'Cada prótese ajustada ao formato do seu couro cabeludo.'
		},
		{
			icon: Check,
			title: 'Resultado imediato',
			desc: 'Sem esperar semanas ou meses — sai transformado no mesmo dia.'
		},
		{
			icon: Star,
			title: 'Primeiro em Santo André',
			desc: 'Pioneiro na aplicação de prótese capilar na cidade, com anos de bagagem em visagismo masculino.'
		}
	];
</script>

<section class="bg-bg-secondary py-20 lg:py-24" aria-label="Diferenciais">
	<div class="max-w-6xl mx-auto px-6">

		<div use:reveal class="mb-14 flex flex-col items-center">
			<h2
				class="font-display text-3xl lg:text-4xl font-bold text-text-primary text-center"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				Por que escolher o Marcos
			</h2>
		</div>

		<div class="grid sm:grid-cols-2 gap-6">
			{#each cards as card, i}
				{@const Icon = card.icon}
				<div
					use:reveal={{ delay: i * 80 }}
					class="bg-bg-card border border-border rounded-sm p-6"
					style="border-top: 2px solid #D4A017;"
				>
					<Icon size={22} color="#D4A017" strokeWidth={1.4} />
					<h3
						class="mt-4 mb-2 text-base font-semibold text-text-primary"
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
