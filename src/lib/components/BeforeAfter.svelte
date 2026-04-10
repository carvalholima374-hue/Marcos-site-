<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { getWhatsAppURL } from '$lib/stores/whatsapp';
	import 'photoswipe/style.css';
	import EmblaCarousel from 'embla-carousel';
	import { onMount, onDestroy } from 'svelte';

	const waURL = getWhatsAppURL();

	const photos = [
		'images/antes_depois_1.JPG',
		'images/antes_depois_2.JPG',
	];

	let emblaNode: HTMLElement;
	let embla: ReturnType<typeof EmblaCarousel> | null = null;
	let selectedIndex = $state(0);
	let canScrollPrev = $state(false);
	let canScrollNext = $state(true);

	onMount(() => {
		embla = EmblaCarousel(emblaNode, {
			loop: true,
			align: 'center',
			dragFree: false,
			watchDrag: true,
		});

		embla.on('select', () => {
			selectedIndex = embla!.selectedScrollSnap();
			canScrollPrev = embla!.canScrollPrev();
			canScrollNext = embla!.canScrollNext();
		});

		embla.on('init', () => {
			selectedIndex = embla!.selectedScrollSnap();
			canScrollPrev = embla!.canScrollPrev();
			canScrollNext = embla!.canScrollNext();
		});
	});

	onDestroy(() => {
		embla?.destroy();
	});

	function scrollPrev() {
		embla?.scrollPrev();
	}

	function scrollNext() {
		embla?.scrollNext();
	}

	function scrollTo(index: number) {
		embla?.scrollTo(index);
	}

	async function openLightbox(startIndex: number) {
		const { default: PhotoSwipe } = await import('photoswipe');

		const dataSource = await Promise.all(
			photos.map(
				(src) =>
					new Promise<{ src: string; width: number; height: number }>((resolve) => {
						const img = new Image();
						img.onload = () => resolve({ src, width: img.naturalWidth, height: img.naturalHeight });
						img.onerror = () => resolve({ src, width: 1200, height: 1600 });
						img.src = src;
					})
			)
		);

		const pswp = new PhotoSwipe({
			dataSource,
			index: startIndex,
			wheelToZoom: true,
			maxZoomLevel: 4,
			secondaryZoomLevel: 2,
		});

		// Track the last index navigated inside PhotoSwipe
		let lastIndex = startIndex;
		pswp.on('change', () => {
			lastIndex = pswp.currIndex;
		});

		// Sync Embla only when PhotoSwipe closes, avoiding mid-animation state conflicts
		pswp.on('destroy', () => {
			scrollTo(lastIndex);
		});

		pswp.init();
	}
</script>

<section class="bg-[#0A0A0A] py-20 lg:py-24" aria-label="Transformações antes e depois">
	<div class="max-w-6xl mx-auto px-6">

		<div class="flex flex-col items-center">
			<div use:reveal class="mb-2">
				<h2
					class="font-display text-3xl lg:text-4xl font-bold text-[#F5F5F5] mb-2"
					style="font-family: 'Playfair Display', Georgia, serif;"
				>
					Transformações
				</h2>
			</div>

			<div use:reveal={{ delay: 80 }} class="mb-12">
				<p class="text-[#A0A0A0]">Clientes reais, resultados reais</p>
			</div>
		</div>

		<!-- Carousel -->
		<div class="mb-10">
			<div use:reveal class="relative flex items-center justify-center gap-4">
				<!-- Prev arrow — hidden on mobile -->
				<button
					type="button"
					onclick={scrollPrev}
					disabled={!canScrollPrev}
					aria-label="Foto anterior"
					class="hidden sm:flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-full border transition-colors duration-200"
					class:border-[#2A2A2A]={!canScrollPrev}
					class:text-[#3A3A3A]={!canScrollPrev}
					class:cursor-not-allowed={!canScrollPrev}
					class:border-[#A0A0A0]={canScrollPrev}
					class:text-[#A0A0A0]={canScrollPrev}
					class:hover:text-[#D4A017]={canScrollPrev}
					class:hover:border-[#D4A017]={canScrollPrev}
				>
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
						<path d="M11 4l-5 5 5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>

				<!-- Embla viewport -->
				<div
					bind:this={emblaNode}
					class="embla-viewport overflow-hidden w-full"
					style="max-width: 800px;"
				>
					<div class="embla-container flex">
						{#each photos as src, i}
							<div class="embla-slide flex-[0_0_100%] min-w-0">
								<button
									type="button"
									class="w-full block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-sm"
									aria-label="Ampliar foto {i + 1}"
									onclick={() => openLightbox(i)}
									style="aspect-ratio: 1;"
								>
									<img
										{src}
										alt="Transformação antes e depois {i + 1}"
										class="w-full h-full object-cover rounded-sm select-none"
										draggable="false"
									/>
								</button>
							</div>
						{/each}
					</div>
				</div>

				<!-- Next arrow — hidden on mobile -->
				<button
					type="button"
					onclick={scrollNext}
					disabled={!canScrollNext}
					aria-label="Próxima foto"
					class="hidden sm:flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-full border transition-colors duration-200"
					class:border-[#2A2A2A]={!canScrollNext}
					class:text-[#3A3A3A]={!canScrollNext}
					class:cursor-not-allowed={!canScrollNext}
					class:border-[#A0A0A0]={canScrollNext}
					class:text-[#A0A0A0]={canScrollNext}
					class:hover:text-[#D4A017]={canScrollNext}
					class:hover:border-[#D4A017]={canScrollNext}
				>
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
						<path d="M7 4l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
			</div>

			<!-- Dots -->
			<div class="flex justify-center gap-2 mt-4">
				{#each photos as _, i}
					<button
						type="button"
						onclick={() => scrollTo(i)}
						aria-label="Ir para foto {i + 1}"
						class="w-2 h-2 rounded-full transition-colors duration-200"
						style="background-color: {selectedIndex === i ? '#D4A017' : '#2A2A2A'};"
					></button>
				{/each}
			</div>
		</div>

		<!-- Text CTA -->
		<div use:reveal class="text-center">
			<a
				href={waURL}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Ver mais resultados pelo WhatsApp"
				class="inline-flex items-center gap-2 text-[#D4A017] hover:text-[#F0B429] text-sm font-medium transition-colors duration-200 border-b border-[#D4A017] hover:border-[#F0B429] pb-0.5"
			>
				Quer ver mais resultados? Fale com a gente
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
					<path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>

	</div>
</section>
