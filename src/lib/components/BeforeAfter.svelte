<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { getWhatsAppURL } from '$lib/stores/whatsapp';

	const waURL = getWhatsAppURL();

	const realPhotos = [
		'images/antes_depois_1.JPG',
		'images/antes_depois_2.JPG',
	];

	const totalSlots = 6;
	const photos = Array.from({ length: totalSlots }, (_, i) => realPhotos[i] ?? null);

	// Lightbox state
	let lightboxSrc = $state<string | null>(null);
	let scale = $state(1);
	let translateX = $state(0);
	let translateY = $state(0);

	// Drag state (not reactive, just internal tracking)
	let isDragging = $state(false);
	let hasDragged = false;
	let dragStartX = 0;
	let dragStartY = 0;
	let dragOriginX = 0;
	let dragOriginY = 0;

	// Touch/pinch state
	let lastPinchDist = 0;

	// Ref para checar bounds da imagem no clique
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
				class="font-display text-3xl lg:text-4xl font-bold text-[#F5F5F5] mb-2"
				style="font-family: 'Playfair Display', Georgia, serif;"
			>
				Transformações reais
			</h2>
		</div>

		<div use:reveal={{ delay: 80 }} class="mb-12">
			<p class="text-[#A0A0A0]">Clientes reais, resultados reais</p>
		</div>

		<!-- Photo grid -->
		<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
			{#each photos as src, i}
				<div use:reveal={{ delay: i * 60 }} style="aspect-ratio: 4/4;">
					{#if src}
						<button
							type="button"
							class="w-full h-full block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-sm"
							aria-label="Ampliar foto {i + 1}"
							onclick={() => openLightbox(src)}
						>
							<img
								{src}
								alt="Transformação antes e depois {i + 1}"
								class="w-full h-full object-cover rounded-sm transition-opacity duration-200 hover:opacity-90"
							/>
						</button>
					{:else}
						<div
							class="w-full h-full border-2 border-dashed border-[#2A2A2A] rounded-sm bg-[#111111] flex flex-col items-center justify-center text-[#A0A0A0]"
							aria-label="Foto antes/depois — substituir pela foto real"
						>
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="mb-2 opacity-40" aria-hidden="true">
								<rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" stroke-width="1.2"/>
								<circle cx="16" cy="14" r="4" stroke="currentColor" stroke-width="1.2"/>
								<path d="M4 22l6-5 4 3.5 6-7 8 8.5" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
							</svg>
							<span class="text-xs font-medium">foto antes/depois</span>
						</div>
					{/if}
				</div>
			{/each}
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
	<!-- Backdrop: cobre a tela toda e recebe todos os eventos de mouse -->
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
		<!-- Image container: apenas visual, sem eventos -->
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

		<!-- Close button -->
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

		<!-- Zoom hint -->
		{#if scale === 1}
			<p class="absolute bottom-4 left-0 right-0 text-center text-xs text-white opacity-40 pointer-events-none">
				Scroll ou pinch para dar zoom · Clique fora para fechar
			</p>
		{/if}
	</div>
{/if}
