<script lang="ts">
    const images = [
        "images/bg_grid/1.jpg",
        "images/bg_grid/2.jpg",
        "images/bg_grid/3.jpg",
        "images/bg_grid/4.jpg",
        "images/bg_grid/5.jpg",
        "images/bg_grid/6.jpg",
        "images/bg_grid/7.jpg",
        "images/bg_grid/8.jpg",
        "images/bg_grid/9.jpg",
        "images/bg_grid/10.jpg",
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

<div
    class="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
>
    <div
        class={[
            "absolute top-1/2 left-1/2 flex h-[220vmax] w-[220vmax] -translate-1/2 -rotate-15 flex-col items-start",
            "justify-center gap-3.5",
        ]}
    >
        {#each rows as row}
            <div
                class={[
                    "row flex shrink-0 gap-3.5",
                    row.goLeft ? "go-left" : "go-right",
                ]}
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
    .row {
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-duration: var(--dur);
        animation-fill-mode: both;
    }

    .go-left {
        animation-name: scrollLeft;
    }
    .go-right {
        animation-name: scrollRight;
    }

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
            radial-gradient(
                ellipse 70% 80% at 50% 50%,
                rgba(10, 10, 10, 0.45) 0%,
                rgba(10, 10, 10, 0.75) 100%
            ),
            linear-gradient(
                to bottom,
                rgba(10, 10, 10, 0.6) 0%,
                transparent 30%,
                transparent 70%,
                rgba(10, 10, 10, 0.6) 100%
            );
    }

    @keyframes scrollLeft {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50%);
        }
    }

    @keyframes scrollRight {
        from {
            transform: translateX(-50%);
        }
        to {
            transform: translateX(0);
        }
    }
</style>
