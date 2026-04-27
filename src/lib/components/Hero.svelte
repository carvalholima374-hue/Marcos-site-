<script lang="ts">
    import { reveal } from "$lib/actions/reveal";
    import { getWhatsAppURL } from "$lib/stores/whatsapp";
    import HeroGrid from "./HeroGrid.svelte";
    import { ArrowRight } from "lucide-svelte";

    const waURL = getWhatsAppURL();
</script>

<section
    class="relative min-h-screen flex items-center bg-bg-primary overflow-hidden"
    aria-label="Apresentação principal"
>
    <!-- SVG noise texture -->
    <!-- <svg class="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" aria-hidden="true">
		<filter id="noise">
			<feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
			<feColorMatrix type="saturate" values="0" />
		</filter>
		<rect width="100%" height="100%" filter="url(#noise)" />
	</svg> -->

    <HeroGrid />

    <!-- Subtle horizontal line accent -->
    <div
        class="absolute top-0 left-0 right-0 h-px bg-accent opacity-40"
        aria-hidden="true"
    ></div>

    <div
        class="relative z-10 w-full max-w-6xl mx-auto px-6 pt-12 pb-20 lg:py-0"
    >
        <div
            class="grid lg:grid-cols-2 gap-12 lg:gap-30 items-center min-h-screen lg:min-h-0 lg:py-24"
        >
            <!-- Left: copy -->
            <div use:reveal={{ delay: 0 }} class="flex flex-col items-center">
                <!-- Badge -->
                <div
                    class={[
                        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-secondary",
                        "mb-8 text-center",
                    ]}
                >
                    <span
                        class="w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                        aria-hidden="true"
                    ></span>
                    <span
                        class="text-xs font-medium text-text-secondary tracking-wide uppercase"
                    >
                        Atendimento presencial <span class="whitespace-nowrap">
                            · Santo André/SP</span
                        >
                    </span>
                </div>

                <!-- H1 -->
                <h1
                    class={[
                        "font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-tight",
                        " mb-6 text-center",
                    ].join(" ")}
                    style="font-family: 'Playfair Display', Georgia, serif;"
                >
                    Recupere seu<br />cabelo e sua<br />
                    <em class="text-accent not-italic">confiança.</em>
                </h1>

                <!-- Subtitle -->
                <p
                    class="text-lg lg:text-xl text-text-secondary leading-relaxed mb-10 max-w-md text-center"
                >
                    Prótese capilar 100% natural. Sem cirurgia, sem dor,
                    resultado no mesmo dia.
                </p>

                <!-- CTA -->
                <div class="flex flex-col sm:flex-row items-start gap-4">
                    <a
                        href={waURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Agendar avaliação gratuita pelo WhatsApp"
                        class={[
                            "cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 md:px-8",
                            "py-4 bg-accent text-bg-primary font-semibold text-base rounded-sm transition-all",
                            "duration-200 hover:bg-accent-hover hover:scale-[1.02] active:scale-100",
                        ]}
                    >
                        Agendar avaliação gratuita
                        <ArrowRight size={16} />
                    </a>
                </div>

                <p class="mt-4 text-sm text-text-secondary">
                    Avaliação 100% gratuita e sem compromisso
                </p>
            </div>

            <!-- Right: photo -->
            <div
                use:reveal={{ delay: 150 }}
                class={[
                    "order-first lg:order-last w-fit mask-x-from-transparent mask-x-to-black mask-x-to-5%",
                    "mask-y-from-transparent mask-y-to-black mask-y-to-5% animate-[herophoto_2s_ease-in-out_infinite_alternate]",
                ]}
            >
                <div
                    class="relative w-full max-w-sm mx-auto lg:max-w-none overflow-hidden rounded-sm"
                >
                    <img
                        src="images/bg_image_5.png"
                        alt="Resultado de prótese capilar aplicada por Marcos em Santo André/SP"
                        class="w-full h-full object-cover shadow-2xl"
                        fetchpriority="high"
                        loading="eager"
                    />
                    <!-- Edge fade: top -->
                    <!-- <div class="absolute inset-x-0 top-0 h-20 pointer-events-none"
						style="background: linear-gradient(to bottom, var(--color-bg-primary), transparent);"
						aria-hidden="true"
					></div> -->
                    <!-- Edge fade: bottom -->
                    <!-- <div class="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
						style="background: linear-gradient(to top, var(--color-bg-primary), transparent);"
						aria-hidden="true"
					></div> -->
                    <!-- Edge fade: left -->
                    <!-- <div class="absolute inset-y-0 left-0 w-20 pointer-events-none"
						style="background: linear-gradient(to right, var(--color-bg-primary), transparent);"
						aria-hidden="true"
					></div> -->
                    <!-- Edge fade: right -->
                    <!-- <div class="absolute inset-y-0 right-0 w-20 pointer-events-none"
						style="background: linear-gradient(to left, var(--color-bg-primary), transparent);"
						aria-hidden="true"
					></div> -->
                </div>
            </div>
        </div>
    </div>
</section>

