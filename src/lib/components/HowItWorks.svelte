<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const steps = [
		{
			number: '01',
			title: 'Agendamento',
			desc: 'Entre em contato pelo WhatsApp e marque sua avaliação gratuita no horário que melhor te atende.'
		},
		{
			number: '02',
			title: 'Avaliação',
			desc: 'O Marcos analisa seu caso pessoalmente e apresenta a solução ideal para o seu perfil.'
		},
		{
			number: '03',
			title: 'Transformação',
			desc: 'Saia com um visual completamente renovado no mesmo dia — natural, discreto e com autoestima de volta.'
		}
	];
</script>

<section class="bg-[#111111] py-20 lg:py-24" aria-label="Como funciona o processo">
	<div class="max-w-6xl mx-auto px-6">

		<div use:reveal class="mb-14">
			<h2
				class="font-display text-3xl lg:text-4xl font-bold text-[#F5F5F5]"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				Como é o processo
			</h2>
		</div>

		<!-- Steps -->
		<div class="relative">
			<!-- Connector line (desktop only) -->
			<div
				class="hidden lg:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px border-t border-dashed border-[#2A2A2A]"
				aria-hidden="true"
			></div>

			<div class="grid lg:grid-cols-3 gap-10 lg:gap-8">
				{#each steps as step, i}
					<div use:reveal={{ delay: i * 120 }} class="relative flex flex-col gap-4">

						<!-- Number accent -->
						<div class="relative">
							<span
								class="text-[5rem] lg:text-[6rem] font-bold leading-none select-none pointer-events-none"
								style="font-family: 'Playfair Display', Georgia, serif; color: #D4A017; opacity: 0.12;"
								aria-hidden="true"
							>{step.number}</span>
							<div class="absolute top-3 left-1 flex items-center gap-3">
								<span
									class="text-base font-bold text-[#D4A017]"
									style="font-family: 'DM Sans', system-ui, sans-serif;"
								>{step.number}</span>
							</div>
						</div>

						<div class="-mt-6">
							<h3
								class="text-xl font-semibold text-[#F5F5F5] mb-2"
								style="font-family: 'DM Sans', system-ui, sans-serif;"
							>
								{step.title}
							</h3>
							<p class="text-sm text-[#A0A0A0] leading-relaxed">{step.desc}</p>
						</div>

					</div>
				{/each}
			</div>
		</div>

	</div>
</section>
