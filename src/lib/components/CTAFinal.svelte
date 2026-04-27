<script lang="ts">
    import { reveal } from "$lib/actions/reveal";
    import { getWhatsAppURL } from "$lib/stores/whatsapp";
    import { ArrowRight, MapPin } from "lucide-svelte";

    const waURL = getWhatsAppURL();
</script>

<section
    class="bg-bg-primary relative overflow-hidden py-20 lg:py-24"
    aria-label="Agendar avaliação gratuita"
>
    <!-- Decorative gold line -->
    <div
        class="absolute top-0 right-0 left-0 flex justify-center"
        aria-hidden="true"
    >
        <div class="bg-accent h-px w-24"></div>
    </div>

    <div class="mx-auto max-w-2xl px-6 text-center">
        <div use:reveal>
            <h2
                class="font-display text-text-primary mb-6 text-3xl leading-tight font-bold lg:text-5xl"
            >
                Pronto para se olhar no espelho com confiança?
            </h2>
            <p class="mb-10 text-lg text-[#A0A0A0]">
                Agende sua avaliação gratuita agora. Sem compromisso.
            </p>
        </div>

        <div use:reveal={{ delay: 100 }}>
            <a
                href={waURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar avaliação gratuita pelo WhatsApp"
                class={[
                    "bg-accent text-text-dark inline-flex items-center justify-center gap-2 px-4 py-4 md:px-10",
                    "w-full rounded-sm text-lg font-semibold transition-all duration-200 sm:w-auto",
                    "hover:bg-accent-hover hover:scale-[1.02] active:scale-100",
                ]}
            >
                Agendar avaliação gratuita
                <ArrowRight size={18} />
            </a>
        </div>

        <div
            use:reveal={{ delay: 180 }}
            class="mt-10 flex items-center justify-center gap-2 text-sm text-[#A0A0A0]"
        >
            <a
                href={[
                    "https://www.google.com/maps/place/Espa%C3%A7o+W+Barber+Shop+%7C+Barbearia+B.+Campestre/@-23",
                    ".6399474,-46.5453985,63m/data=!3m1!1e3!4m15!1m8!3m7!1s0x94ce42d01f19b4db:0xae76c0b5dea1cd59!2sR",
                    ".+das+Figueiras,+2131+-+Campestre,+Santo+Andr%C3%A9+-+SP,+09080-371!3b1!8m2!3d-23.6400405!4d-46",
                    ".5453677!16s%2Fg%2F11pw0wkst9!3m5!1s0x94ce43ea9a256d33:0xeeec45163584d66c!8m2!3d-23.6400405!4d-46",
                    ".5453677!16s%2Fg%2F11r23dbrty?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D",
                ].join("")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver localização no Google Maps"
                class="hover:text-accent inline-flex items-center gap-2 transition-colors duration-200"
            >
                <MapPin size={14} class="text-accent shrink-0" />
                <span>
                    Rua das Figueiras, 2131, Campestre,
                    <span class="whitespace-nowrap">Santo André SP</span>
                </span>
            </a>
        </div>
    </div>
</section>
