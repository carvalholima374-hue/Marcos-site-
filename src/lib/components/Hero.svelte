<script lang="ts">
    import { getWhatsAppURL } from "$lib/stores/whatsapp";
    import { onMount } from "svelte";
    import HeroGrid from "./HeroGrid.svelte";
    import { ArrowRight } from "lucide-svelte";

    const waURL = getWhatsAppURL();

    let heroVisible = $state(false);

    onMount(() => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                heroVisible = true;
            });
        });
    });
</script>

<section
    class="bg-bg-primary relative flex min-h-screen items-center overflow-hidden"
    aria-label="Apresentação principal"
>
    <HeroGrid />

    <!-- Subtle horizontal line accent -->
    <div
        class="bg-accent absolute top-0 right-0 left-0 h-px opacity-40"
        aria-hidden="true"
    ></div>

    <div
        class="relative z-10 mx-auto w-full max-w-6xl px-6 pt-12 pb-20 lg:py-0"
    >
        <div
            class="grid min-h-screen items-center gap-12 lg:min-h-0 lg:grid-cols-2 lg:gap-30 lg:py-24"
        >
            <!-- Left: copy -->
            <div
                class="flex flex-col items-center transition-transform duration-500 ease-linear {heroVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-5 opacity-0'}"
            >
                <!-- Badge -->
                <div
                    class={[
                        "border-border bg-bg-secondary inline-flex items-center gap-2 rounded-full border px-3 py-1.5",
                        "mb-8 text-center",
                    ]}
                >
                    <span
                        class="bg-accent h-1.5 w-1.5 shrink-0 rounded-full"
                        aria-hidden="true"
                    ></span>
                    <span
                        class="text-text-secondary text-xs font-medium tracking-wide uppercase"
                    >
                        Atendimento presencial <span class="whitespace-nowrap">
                            · Santo André/SP</span
                        >
                    </span>
                </div>

                <!-- H1 -->
                <h1
                    class={[
                        "font-display text-text-primary text-5xl leading-tight font-bold lg:text-6xl xl:text-7xl",
                        " mb-6 text-center",
                    ].join(" ")}
                    style="font-family: 'Playfair Display', Georgia, serif;"
                >
                    Recupere seu<br />cabelo e sua<br />
                    <em class="text-accent not-italic">confiança.</em>
                </h1>

                <!-- Subtitle -->
                <p
                    class="text-text-secondary mb-10 max-w-md text-center text-lg leading-relaxed lg:text-xl"
                >
                    Prótese capilar 100% natural. Sem cirurgia, sem dor,
                    resultado no mesmo dia.
                </p>

                <!-- CTA -->
                <div class="flex flex-col items-start gap-4 sm:flex-row">
                    <a
                        href={waURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Agendar avaliação gratuita pelo WhatsApp"
                        class={[
                            "cta-btn inline-flex w-full items-center justify-center gap-2 px-4 sm:w-auto md:px-8",
                            "bg-accent text-bg-primary rounded-sm py-4 text-base font-semibold transition-all",
                            "hover:bg-accent-hover duration-200 hover:scale-[1.02] active:scale-100",
                        ]}
                    >
                        Agendar avaliação gratuita
                        <ArrowRight size={16} />
                    </a>
                </div>

                <p class="text-text-secondary mt-4 text-sm">
                    Avaliação 100% gratuita e sem compromisso
                </p>
            </div>

            <!-- Right: photo -->
            <div
                class={[
                    "order-first w-fit mask-x-from-transparent mask-x-to-black mask-x-to-5% lg:order-last",
                    "animate-[herophoto_2s_ease-in-out_infinite_alternate] mask-y-from-transparent mask-y-to-black",
                    "mask-y-to-5% transition-transform duration-500",
                ]}
            >
                <div
                    class="relative mx-auto w-full max-w-sm overflow-hidden rounded-sm lg:max-w-none"
                >
                    <img
                        src="images/bg_image_5.png"
                        alt="Resultado de prótese capilar aplicada por Marcos em Santo André/SP"
                        class="h-full w-full object-cover shadow-2xl"
                        fetchpriority="high"
                        loading="eager"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
