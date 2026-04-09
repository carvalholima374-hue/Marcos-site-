<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { getWhatsAppURL } from '$lib/stores/whatsapp';

	const waURL = getWhatsAppURL();

	const photos = [
		'images/antes_depois_1.JPG',
		'images/antes_depois_2.JPG',
	];

	// Carousel state
	let currentIndex = $state(0);

	function prev() {
		currentIndex = (currentIndex - 1 + photos.length) % photos.length;
	}

	function next() {
		currentIndex = (currentIndex + 1) % photos.length;
	}

	// Lightbox state
	let lightboxSrc = $state<string | null>(null);
	let scale = $state(1);
	let translateX = $state(0);
	let translateY = $state(0);

	let isDragging = $state(false);
	let hasDragged = false;
	let dragStartX = 0;
	let dragStartY = 0;
	let dragOriginX = 0;
	let dragOriginY = 0;

	let lastPinchDist = 0;
	let imgEl: HTMLImageElement | null = null;

	function openLightbox(src: string) {
		lightboxSrc = src;
		scale = 1;
		translateX = 0;
		translateY = 0;
		document.body.style.overflow = 'hidden';
	}

	function closeLightbox() {
		lightboxSrc = null;
		document.body.style.overflow = '';
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') closeLightbox();
	}

	function onWheel(e: WheelEvent) {
		e.preventDefault();
		const delta = e.deltaY > 0 ? 0.9 : 1.1;
		scale = Math.min(Math.max(scale * delta, 1), 5);
		if (scale === 1) { translateX = 0; translateY = 0; }
	}

	function onMousedown(e: MouseEvent) {
		if (scale <= 1) return;
		isDragging = true;
		hasDragged = false;
		dragStartX = e.clientX;
		dragStartY = e.clientY;
		dragOriginX = translateX;
		dragOriginY = translateY;
	}

	function onMousemove(e: MouseEvent) {
		if (!isDragging) return;
		hasDragged = true;
		translateX = dragOriginX + (e.clientX - dragStartX);
		translateY = dragOriginY + (e.clientY - dragStartY);
	}

	function onMouseup() {
		isDragging = false;
	}

	function onBackdropClick(e: MouseEvent) {
		if (hasDragged) {
			hasDragged = false;
			return;
		}
		if (imgEl) {
			const rect = imgEl.getBoundingClientRect();
			const inside = e.clientX >= rect.left && e.clientX <= rect.right &&
			               e.clientY >= rect.top  && e.clientY <= rect.bottom;
			if (inside) return;
		}
		closeLightbox();
	}

	function onTouchstart(e: TouchEvent) {
		if (e.touches.length === 2) {
			lastPinchDist = Math.hypot(
				e.touches[1].clientX - e.touches[0].clientX,
				e.touches[1].clientY - e.touches[0].clientY
			);
		} else if (e.touches.length === 1 && scale > 1) {
			isDragging = true;
			dragStartX = e.touches[0].clientX;
			dragStartY = e.touches[0].clientY;
			dragOriginX = translateX;
			dragOriginY = translateY;
		}
	}

	function onTouchmove(e: TouchEvent) {
		e.preventDefault();
		if (e.touches.length === 2) {
			const dist = Math.hypot(
				e.touches[1].clientX - e.touches[0].clientX,
				e.touches[1].clientY - e.touches[0].clientY
			);
			scale = Math.min(Math.max(scale * (dist / lastPinchDist), 1), 5);
			lastPinchDist = dist;
			if (scale === 1) { translateX = 0; translateY = 0; }
		} else if (e.touches.length === 1 && isDragging) {
			translateX = dragOriginX + (e.touches[0].clientX - dragStartX);
			translateY = dragOriginY + (e.touches[0].clientY - dragStartY);
		}
	}

	function onTouchend() {
		isDragging = false;
	}
</script>

<svelte:window onkeydown={onKeydown} />

<section class="bg-[#0A0A0A] py-20 lg:py-24" aria-label="Transformações antes e depois">
	<div class="max-w-6xl mx-auto px-6">

		<div use:reveal class="mb-2">
			<h2
				class="font-display text-3xl lg:text-4xl font-bold text-[#F5F5F5] mb-2 mx-auto"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				Transformações reais
			</h2>
		</div>

		<div use:reveal={{ delay: 80 }} class="mb-12">
			<p class="text-[#A0A0A0]">Clientes reais, resultados reais</p>
		</div>

		<!-- Carousel -->
		<div class="mb-10">
			<div use:reveal class="relative flex items-center justify-center gap-4">
				<!-- Prev arrow -->
				<button
					type="button"
					onclick={prev}
					aria-label="Foto anterior"
					class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#2A2A2A] text-[#A0A0A0] hover:text-[#D4A017] hover:border-[#D4A017] transition-colors duration-200"
				>
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
						<path d="M11 4l-5 5 5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>

				<!-- Card -->
				<div style="aspect-ratio: 1; max-width: 600px; width: 100%;">
					<button
						type="button"
						class="w-full h-full block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-sm"
						aria-label="Ampliar foto {currentIndex + 1}"
						onclick={() => openLightbox(photos[currentIndex])}
					>
						<img
							src={photos[currentIndex]}
							alt="Transformação antes e depois {currentIndex + 1}"
							class="w-full h-full object-cover rounded-sm"
						/>
					</button>
				</div>

				<!-- Next arrow -->
				<button
					type="button"
					onclick={next}
					aria-label="Próxima foto"
					class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#2A2A2A] text-[#A0A0A0] hover:text-[#D4A017] hover:border-[#D4A017] transition-colors duration-200"
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
						onclick={() => currentIndex = i}
						aria-label="Ir para foto {i + 1}"
						class="w-2 h-2 rounded-full transition-colors duration-200"
						style="background-color: {currentIndex === i ? '#D4A017' : '#2A2A2A'};"
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

<!-- Lightbox -->
{#if lightboxSrc}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center select-none"
		style="background: rgba(0,0,0,0.92); cursor: {isDragging ? 'grabbing' : scale > 1 ? 'grab' : 'default'}; touch-action: none;"
		role="dialog"
		aria-modal="true"
		aria-label="Visualização ampliada"
		onclick={onBackdropClick}
		onmousedown={onMousedown}
		onmousemove={onMousemove}
		onmouseup={onMouseup}
		onwheel={onWheel}
		ontouchstart={onTouchstart}
		ontouchmove={onTouchmove}
		ontouchend={onTouchend}
	>
		<div class="pointer-events-none">
			<img
				bind:this={imgEl}
				src={lightboxSrc}
				alt="Visualização ampliada"
				class="max-w-[90vw] max-h-[90vh] object-contain rounded-sm"
				style="transform: scale({scale}) translate({translateX / scale}px, {translateY / scale}px); transition: {isDragging ? 'none' : 'transform 0.1s ease'};"
				draggable="false"
			/>
		</div>

		<button
			type="button"
			class="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 transition-opacity pointer-events-auto"
			aria-label="Fechar"
			onclick={(e) => { e.stopPropagation(); closeLightbox(); }}
		>
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
				<path d="M6 6l16 16M22 6L6 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
			</svg>
		</button>

		{#if scale === 1}
			<p class="absolute bottom-4 left-0 right-0 text-center text-xs text-white opacity-40 pointer-events-none">
				Scroll ou pinch para dar zoom · Clique fora para fechar
			</p>
		{/if}
	</div>
{/if}
