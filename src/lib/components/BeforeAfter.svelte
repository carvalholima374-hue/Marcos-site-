<script lang="ts">
    import { reveal } from "$lib/actions/reveal";
    import { getWhatsAppURL } from "$lib/stores/whatsapp";
    import "photoswipe/style.css";
    import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-svelte";
    import EmblaCarousel from "embla-carousel";
    import { onMount, onDestroy } from "svelte";

    const waURL = getWhatsAppURL();

    const photos = [
        "images/antes_depois_1.JPG",
        "images/antes_depois_2.JPG",
        "images/antes_depois_3.PNG",
        "images/antes_depois_4.PNG",
        "images/antes_depois_5.PNG",
        "images/antes_depois_6.PNG",
        "images/antes_depois_7.PNG",
    ];

    let emblaNode: HTMLElement;
    let embla: ReturnType<typeof EmblaCarousel> | null = null;
    let selectedIndex = $state(0);
    let canScrollPrev = $state(false);
    let canScrollNext = $state(true);

    onMount(() => {
        embla = EmblaCarousel(emblaNode, {
            loop: true,
            align: "center",
            dragFree: false,
            watchDrag: true,
        });

        embla.on("select", () => {
            selectedIndex = embla!.selectedScrollSnap();
            canScrollPrev = embla!.canScrollPrev();
            canScrollNext = embla!.canScrollNext();
        });

        embla.on("init", () => {
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
        const { default: PhotoSwipe } = await import("photoswipe");

        const dataSource = await Promise.all(
            photos.map(
                (src) =>
                    new Promise<{ src: string; width: number; height: number }>(
                        (resolve) => {
                            const img = new Image();
                            img.onload = () =>
                                resolve({
                                    src,
                                    width: img.naturalWidth,
                                    height: img.naturalHeight,
                                });
                            img.onerror = () =>
                                resolve({ src, width: 1200, height: 1600 });
                            img.src = src;
                        },
                    ),
            ),
        );

        const pswp = new PhotoSwipe({
            dataSource,
            index: startIndex,
            wheelToZoom: true,
            maxZoomLevel: 4,
            secondaryZoomLevel: 2,
        });

        let lastIndex = startIndex;
        pswp.on("change", () => {
            lastIndex = pswp.currIndex;
        });

        pswp.on("destroy", () => {
            scrollTo(lastIndex);
        });

        pswp.init();
    }
</script>

<section
    class="bg-bg-primary py-20 lg:py-24"
    aria-label="Transformações antes e depois"
>
    <div class="mx-auto max-w-6xl px-6">
        <div class="flex flex-col items-center">
            <div use:reveal class="mb-2">
                <h2
                    class="font-display text-text-primary mb-2 text-3xl font-bold lg:text-4xl"
                >
                    Transformações
                </h2>
            </div>

            <div use:reveal={{ delay: 80 }} class="mb-12">
                <p class="text-text-secondary">
                    Clientes reais, resultados reais
                </p>
            </div>
        </div>

        <div class="mb-10">
            <div
                use:reveal
                class="relative flex items-center justify-center gap-4"
            >
                <button
                    type="button"
                    onclick={scrollPrev}
                    disabled={!canScrollPrev}
                    aria-label="Foto anterior"
                    class={[
                        "hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border sm:flex",
                        "transition-colors duration-200",
                        canScrollNext
                            ? "border-border-secondary text-text-secondary hover:text-accent hover:border-accent"
                            : "border-border cursor-not-allowed text-[#3A3A3A]",
                    ]}
                >
                    <ChevronLeft size={18} />
                </button>

                <div
                    bind:this={emblaNode}
                    class="embla-viewport w-full max-w-200 overflow-hidden"
                >
                    <div class="embla-container flex">
                        {#each photos as src, i}
                            <div class="embla-slide min-w-0 flex-[0_0_100%]">
                                <button
                                    type="button"
                                    class={[
                                        "block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2",
                                        "focus-visible:ring-accent rounded-sm",
                                    ]}
                                    aria-label="Ampliar foto {i + 1}"
                                    onclick={() => openLightbox(i)}
                                    style="aspect-ratio: 1;"
                                >
                                    <img
                                        {src}
                                        alt="Transformação antes e depois com prótese capilar — resultado {i +
                                            1}"
                                        class="h-full w-full rounded-sm object-contain select-none"
                                        draggable="false"
                                        loading="lazy"
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
                    class={[
                        "hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border sm:flex",
                        "transition-colors duration-200",
                        canScrollNext &&
                            "border-border-secondary text-text-secondary hover:text-accent hover:border-accent",
                        !canScrollNext &&
                            "border-border cursor-not-allowed text-[#3A3A3A]",
                    ]}
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            <!-- Dots -->
            <div class="mt-4 flex justify-center gap-2">
                {#each photos as _, i}
                    <button
                        type="button"
                        onclick={() => scrollTo(i)}
                        aria-label="Ir para foto {i + 1}"
                        class={[
                            "h-2 w-2 rounded-full transition-colors duration-200",
                            selectedIndex === i ? "bg-accent" : "bg-bg-subtle",
                        ]}
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
                class={[
                    "text-accent hover:text-accent-hover inline-flex items-center gap-2 text-sm font-medium",
                    "border-accent hover:border-accent-hover border-b pb-0.5 transition-colors duration-200",
                ]}
            >
                Quer ver mais resultados? Fale com a gente
                <ArrowRight size={14} />
            </a>
        </div>
    </div>
</section>
