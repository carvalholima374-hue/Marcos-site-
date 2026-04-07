<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="bg-[#0A0A0A] py-20 lg:py-24" aria-label="Sobre o profissional">
	<div class="max-w-6xl mx-auto px-6">

		<div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

			<!-- Photo placeholder -->
			<div use:reveal class="flex justify-center lg:justify-start">
				<div
					class="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full border-2 border-dashed border-[#2A2A2A] bg-[#111111] flex flex-col items-center justify-center text-[#A0A0A0] flex-shrink-0"
					aria-label="Foto do Marcos — substituir pela foto real"
				>
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" class="mb-2 opacity-40" aria-hidden="true">
						<circle cx="20" cy="16" r="7" stroke="currentColor" stroke-width="1.5"/>
						<path d="M6 36c0-7.73 6.27-14 14-14s14 6.27 14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
					<span class="text-xs font-medium">foto do Marcos</span>
				</div>
			</div>

			<!-- Text -->
			<div use:reveal={{ delay: 100 }}>
				<!-- Decorative quote -->
				<div
					class="text-[6rem] leading-none font-bold text-[#D4A017] opacity-20 select-none -mb-6"
					style="font-family: 'Playfair Display', Georgia, serif;"
					aria-hidden="true"
				>"</div>

				<h2
					class="font-display text-2xl lg:text-3xl font-bold text-[#F5F5F5] mb-6"
					style="font-family: 'Playfair Display', Georgia, serif;"
				>
					Marcos, especialista em prótese capilar
				</h2>

				<p class="text-[#A0A0A0] leading-relaxed text-base lg:text-lg">
					<!-- bio do Marcos aqui -->
					Com anos de dedicação exclusiva à prótese capilar masculina, o Marcos
					desenvolveu uma técnica precisa que garante naturalidade, durabilidade
					e conforto para cada cliente. Cada atendimento é personalizado, porque
					cada cabeça é única — e cada transformação merece cuidado total.
				</p>
			</div>

		</div>
	</div>
</section>
