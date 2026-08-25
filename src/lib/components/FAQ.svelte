<script lang="ts">
    import { reveal } from "$lib/actions/reveal";
    import { getWhatsAppURL } from "$lib/stores/whatsapp";
    import { ChevronDown } from "lucide-svelte";

    const waURL = getWhatsAppURL();

    const faqs = [
        {
            q: "A prótese capilar dói?",
            a: `Não. O procedimento é completamente não invasivo e não causa nenhuma dor ou desconforto. 
            É uma aplicação externa, sem cortes ou agulhas.`,
        },
        {
            q: "Vai aparecer que é prótese?",
            a: `Não, quando bem aplicada e ajustada ao seu perfil, a prótese é completamente indistinguível do
            cabelo natural — tanto visualmente quanto ao toque.`,
        },
        {
            q: "Quanto tempo dura?",
            a: `Em média de 8 meses a 1 ano. Com os cuidados e manutenções adequados, a prótese pode chegar a 1 ano e meio
            ou até mais. A durabilidade varia de acordo com os cuidados e a rotina de cada cliente.`,
        },
        {
            q: "Posso molhar, ir à academia?",
            a: `Sim. Após o período inicial de adaptação, você pode nadar, malhar, tomar banho e fazer todas as 
            atividades do dia a dia normalmente.`,
        },
        {
            q: "Como é a manutenção?",
            a: `A manutenção é simples e periódica. O Marcos orienta cada cliente sobre os cuidados específicos para 
            o seu tipo de prótese e estilo de vida.`,
        },
        {
            q: "Qual o custo?",
            a: null, // special case with WhatsApp link
        },
        {
            q: "Posso fazer penteados e cortes normalmente?",
            a: `Sim. A prótese pode ser cortada, penteada e estilizada como cabelo natural — inclusive com produtos 
            de finalização.`,
        },
        {
            q: "A prótese atrapalha o crescimento do cabelo natural?",
            a: `Não. A prótese é aplicada sobre o couro cabeludo sem bloquear folículos capilares. O cabelo natural 
            continua seu ciclo normalmente.`,
        },
    ];
</script>

<section
    class="bg-bg-secondary py-20 lg:py-24"
    aria-label="Perguntas frequentes"
>
    <div class="mx-auto max-w-3xl px-6">
        <div use:reveal class="mb-12 flex flex-col items-center">
            <h2
                class="font-display text-text-primary text-3xl font-bold lg:text-4xl"
                style="font-family: 'Playfair Display', Georgia, serif;"
            >
                Perguntas frequentes
            </h2>
        </div>

        <div use:reveal={{ delay: 80 }}>
            {#each faqs as faq}
                <details
                    class="faq-item group border-b border-[#2A2A2A] last:border-b-0"
                >
                    <summary
                        class={[
                            "text-text-primary hover:text-accent flex cursor-pointer list-none items-center",
                            "justify-between gap-4 py-5 text-base font-medium transition-colors duration-200",
                        ]}
                    >
                        <span>{faq.q}</span>
                        <!-- Arrow SVG -->
                        <ChevronDown
                            size={16}
                            color="#D4A017"
                            class="faq-arrow shrink-0 transition-transform duration-300"
                        />
                    </summary>

                    <div class="overflow-hidden pb-5">
                        {#if faq.q === "Qual o custo?"}
                            <p class="text-sm leading-relaxed text-[#A0A0A0]">
                                Os valores variam conforme o tipo de prótese e
                                as necessidades de cada cliente.
                                <a
                                    href={waURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Receber orçamento personalizado pelo WhatsApp"
                                    class="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
                                    >Entre em contato para receber um orçamento
                                    personalizado.</a
                                >
                            </p>
                        {:else}
                            <p class="text-sm leading-relaxed text-[#A0A0A0]">
                                {faq.a}
                            </p>
                        {/if}
                    </div>
                </details>
            {/each}
        </div>
    </div>
</section>

<style>
    .faq-item[open] :global(.faq-arrow) {
        transform: rotate(180deg);
    }

    /* Smooth open/close via max-height animation */
    details > summary {
        -webkit-user-select: none;
        user-select: none;
    }

    details > summary::-webkit-details-marker {
        display: none;
    }
</style>
