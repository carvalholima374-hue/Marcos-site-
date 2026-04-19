<script lang="ts">
	const images = [
		'images/bg_grid/1.jpg',
		'images/bg_grid/2.jpg',
		'images/bg_grid/3.jpg',
		'images/bg_grid/4.jpg',
		'images/bg_grid/5.jpg',
		'images/bg_grid/6.jpg',
		'images/bg_grid/7.jpg',
		'images/bg_grid/8.jpg',
		'images/bg_grid/9.jpg',
		'images/bg_grid/10.jpg',
	];

	const ROW_COUNT = 10;
	const IMAGES_PER_ROW = 16; // duplicated for seamless loop

	function getRowImages(rowIndex: number): string[] {
		const row: string[] = [];
		for (let i = 0; i < IMAGES_PER_ROW; i++) {
			row.push(images[(rowIndex * 3 + i) % images.length]);
		}
		return [...row, ...row];
	}

	const rows = Array.from({ length: ROW_COUNT }, (_, i) => ({
		images: getRowImages(i),
		goLeft: i % 2 === 0,
		duration: 28 + i * 4,
	}));
</script>

<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
	<div class="grid-wrap">
		{#each rows as row}
			<div
				class="row {row.goLeft ? 'go-left' : 'go-right'}"
				style="--dur: {row.duration}s"
			>
				{#each row.images as src}
					<img {src} alt="" class="cell" />
				{/each}
			</div>
		{/each}
	</div>

	<!-- Dark overlay so content stays readable -->
	<div class="overlay"></div>
</div>

<style>
	.grid-wrap {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 220vmax;
		height: 220vmax;
		transform: translate(-50%, -50%) rotate(-15deg);
		display: flex;
		flex-direction: column;
		gap: 14px;
		align-items: flex-start;
		justify-content: center;
	}

	.row {
		display: flex;
		gap: 14px;
		flex-shrink: 0;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-duration: var(--dur);
		animation-fill-mode: both;
	}

	.go-left  { animation-name: scrollLeft; }
	.go-right { animation-name: scrollRight; }

	.cell {
		width: 10rem;
		height: 10rem;
		object-fit: cover;
		object-position: center top;
		flex-shrink: 0;
		filter: grayscale(100%);
		opacity: 0.28;
		border-radius: 3px;
	}

	.overlay {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse 70% 80% at 50% 50%, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.75) 100%),
			linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, transparent 30%, transparent 70%, rgba(10,10,10,0.6) 100%);
	}

	@keyframes scrollLeft {
		from { transform: translateX(0); }
		to   { transform: translateX(-50%); }
	}

	@keyframes scrollRight {
		from { transform: translateX(-50%); }
		to   { transform: translateX(0); }
	}
</style>
