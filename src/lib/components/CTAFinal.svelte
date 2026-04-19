<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { getWhatsAppURL } from '$lib/stores/whatsapp';
	import { PUBLIC_ADDRESS } from '$env/static/public';
	import { ArrowRight, MapPin } from 'lucide-svelte';

	const waURL = getWhatsAppURL();
</script>

<section
	class="bg-[#0A0A0A] py-20 lg:py-24 relative overflow-hidden"
	aria-label="Agendar avaliação gratuita"
>
	<!-- Decorative gold line -->
	<div class="absolute top-0 left-0 right-0 flex justify-center" aria-hidden="true">
		<div class="w-24 h-px bg-[#D4A017]"></div>
	</div>

	<div class="max-w-2xl mx-auto px-6 text-center">

		<!-- Decorative large quote -->
		<!-- <div
			class="text-[5rem] leading-none font-bold text-[#D4A017] opacity-10 select-none mb-2"
			style="font-family: 'Playfair Display', Georgia, serif;"
			aria-hidden="true"
		>"</div> -->

		<div use:reveal>
			<h2
				class="font-display text-3xl lg:text-5xl font-bold text-[#F5F5F5] leading-tight mb-6"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				Pronto para se olhar no espelho com confiança?
			</h2>
			<p class="text-[#A0A0A0] text-lg mb-10">
				Agende sua avaliação gratuita agora. Sem compromisso.
			</p>
		</div>

		<div use:reveal={{ delay: 100 }}>
			<a
				href={waURL}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Agendar avaliação gratuita pelo WhatsApp"
				class="inline-flex items-center justify-center gap-2 px-4 md:px-10 py-4 bg-[#D4A017] text-[#0A0A0A] font-semibold text-lg rounded-sm w-full sm:w-auto transition-all duration-200 hover:bg-[#F0B429] hover:scale-[1.02] active:scale-100"
			>
				Agendar avaliação gratuita
				<ArrowRight size={18} />
			</a>
		</div>

		<div use:reveal={{ delay: 180 }} class="mt-10 flex items-center justify-center gap-2 text-[#A0A0A0] text-sm">
			<a
				href="https://www.google.com/maps/place/Espa%C3%A7o+W+Barber+Shop+%7C+Barbearia+B.+Campestre/@-23.6399474,-46.5453985,63m/data=!3m1!1e3!4m15!1m8!3m7!1s0x94ce42d01f19b4db:0xae76c0b5dea1cd59!2sR.+das+Figueiras,+2131+-+Campestre,+Santo+Andr%C3%A9+-+SP,+09080-371!3b1!8m2!3d-23.6400405!4d-46.5453677!16s%2Fg%2F11pw0wkst9!3m5!1s0x94ce43ea9a256d33:0xeeec45163584d66c!8m2!3d-23.6400405!4d-46.5453677!16s%2Fg%2F11r23dbrty?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Ver localização no Google Maps"
				class="inline-flex items-center gap-2 hover:text-[#D4A017] transition-colors duration-200"
			>
				<MapPin size={14} class="flex-shrink-0 text-[#D4A017]" />
				<span>{PUBLIC_ADDRESS}</span>
			</a>
		</div>

	</div>
</section>
