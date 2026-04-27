<script lang="ts">
    import { reveal } from "$lib/actions/reveal";
    import { CircleCheck, Shield, Clock } from "lucide-svelte";

    const cards = [
        {
            icon: CircleCheck,
            title: "Sem cirurgia",
            desc: "Procedimento não invasivo, sem cortes, sem anestesia.",
        },
        {
            icon: Shield,
            title: "Sem dor",
            desc: "Aplicação confortável e tranquila do início ao fim.",
        },
        {
            icon: Clock,
            title: "Resultado no mesmo dia",
            desc: "Sai transformado na mesma sessão, sem espera.",
        },
    ];
</script>

<section
    class="bg-bg-primary py-20 lg:py-24"
    aria-label="O que é a prótese capilar"
>
    <div class="mx-auto max-w-6xl px-6">
        <div use:reveal class="mb-14 flex flex-col items-center">
            <h2
                class="font-display text-text-primary mb-4 text-center text-3xl font-bold lg:text-4xl"
                style="font-family: 'Playfair Display', Georgia, serif;"
            >
                O que é a prótese capilar
            </h2>
            <p class="text-text-secondary max-w-xl text-center text-lg">
                Uma solução estética não cirúrgica que devolve aparência natural
                ao cabelo — com discrição total e resultado imediato.
            </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-3">
            {#each cards as card, i}
                {@const Icon = card.icon}
                <div
                    use:reveal={{ delay: i * 100 }}
                    class="bg-bg-card border-border rounded-sm border p-6"
                    style="border-top: 2px solid #D4A017;"
                >
                    <Icon size={24} color="#D4A017" strokeWidth={1.5} />
                    <h3
                        class="text-text-primary mt-4 mb-2 text-lg font-semibold"
                        style="font-family: 'DM Sans', system-ui, sans-serif;"
                    >
                        {card.title}
                    </h3>
                    <p class="text-text-secondary text-sm leading-relaxed">
                        {card.desc}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
