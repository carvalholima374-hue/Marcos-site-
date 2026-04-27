<script lang="ts">
    import { reveal } from "$lib/actions/reveal";

    const steps = [
        {
            number: "01",
            title: "Agendamento",
            desc: "Entre em contato pelo WhatsApp e marque sua avaliação gratuita no horário que melhor te atende.",
        },
        {
            number: "02",
            title: "Avaliação",
            desc: "O Marcos analisa seu caso pessoalmente e apresenta a solução ideal para o seu perfil.",
        },
        {
            number: "03",
            title: "Transformação",
            desc: "Saia com um visual completamente renovado no mesmo dia — natural, discreto e com autoestima de volta.",
        },
    ];
</script>

<section
    class="bg-bg-secondary py-20 lg:py-24"
    aria-label="Como funciona o processo"
>
    <div class="mx-auto max-w-6xl px-6">
        <div use:reveal class="mb-14 flex flex-col items-center">
            <h2
                class="font-display text-text-primary text-3xl font-bold lg:text-4xl"
                style="font-family: 'Playfair Display', Georgia, serif;"
            >
                Como é o processo
            </h2>
        </div>

        <!-- Steps -->
        <div class="relative">
            <!-- Connector line (desktop only) -->
            <div
                class={[
                    "border-border absolute top-10 right-[calc(16.66%+1rem)] left-[calc(16.66%+1rem)] hidden h-px",
                    "border-t border-dashed lg:block",
                ]}
                aria-hidden="true"
            ></div>

            <div class="grid gap-10 lg:grid-cols-3 lg:gap-8">
                {#each steps as step, i}
                    <div
                        use:reveal={{ delay: i * 120 }}
                        class="relative flex flex-col gap-4"
                    >
                        <!-- Number accent -->
                        <div class="relative">
                            <span
                                class={[
                                    "text-accent font-display pointer-events-none text-[5rem] leading-none",
                                    "font-bold opacity-[0.12] select-none lg:text-[6rem]",
                                ]}
                                aria-hidden="true">{step.number}</span
                            >
                            <div
                                class="absolute top-3 left-1 flex items-center gap-3"
                            >
                                <span
                                    class="text-accent text-base font-bold"
                                    style="font-family: 'DM Sans', system-ui, sans-serif;"
                                    >{step.number}</span
                                >
                            </div>
                        </div>

                        <div class="-mt-6">
                            <h3
                                class="text-text-primary mb-2 text-xl font-semibold"
                                style="font-family: 'DM Sans', system-ui, sans-serif;"
                            >
                                {step.title}
                            </h3>
                            <p
                                class="text-text-secondary text-sm leading-relaxed"
                            >
                                {step.desc}
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
