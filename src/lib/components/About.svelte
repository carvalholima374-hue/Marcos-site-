<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<section class="bg-[#0A0A0A] py-20 lg:py-24" aria-label="Sobre o profissional">
	<div class="max-w-6xl mx-auto px-6">

		<div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

			<!-- Photo -->
			<div use:reveal class="flex justify-center lg:justify-start">
				<img
					src="images/marcos_profile.jpeg"
					alt="Marcos, especialista em prótese capilar"
					class="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover object-top flex-shrink-0 border-2 border-[#D4A017]/30"
				/>
			</div>

			<!-- Text -->
			<div use:reveal={{ delay: 100 }}>
				<!-- Decorative quote -->
				<!-- <div
					class="text-[6rem] leading-none font-bold text-[#D4A017] opacity-20 select-none -mb-6"
					style="font-family: 'Playfair Display', Georgia, serif;"
					aria-hidden="true"
				>"</div> -->

				<h2
					class="font-display text-2xl lg:text-3xl font-bold text-[#F5F5F5] mb-6 text-center"
					style="font-family: 'Playfair Display', Georgia, serif;"
				>
					Marcos, especialista em imagem masculina
				</h2>

				<p class="text-[#A0A0A0] leading-relaxed text-base lg:text-lg text-justify">
					Com anos de experiência em imagem masculina, o Marcos chegou
					à prótese capilar com um olhar apurado para proporção, estilo e
					naturalidade — e foi o primeiro profissional a oferecer esse serviço
					em Santo André. Cada atendimento é personalizado, porque cada cabeça
					é única — e cada transformação merece cuidado total.
				</p>
			</div>

		</div>
	</div>
</section>
