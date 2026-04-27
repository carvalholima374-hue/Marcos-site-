<script lang="ts">
    import { reveal } from "$lib/actions/reveal";
    import { Star } from "lucide-svelte";

    const testimonials = [
        {
            name: "Carlos E.",
            location: "Santo André, SP",
            text: `O Marcos é muito atencioso, explicou tudo antes de começar. Me sinto muito mais confiante no 
            trabalho e nos relacionamentos.`,
            rating: 5,
        },
        {
            name: "Ricardo M.",
            location: "Santo André, SP",
            text: `Em menos de 3 horas minha vida mudou. Minha esposa não acreditou quando me viu, achou que eu tinha 
            feito transplante.`,
            rating: 5,
        },
    ];
</script>

<section
    class="bg-bg-primary py-20 lg:py-24"
    aria-label="Depoimentos de clientes"
>
    <!-- Heading -->
    <div class="mx-auto mb-14 max-w-6xl px-6" use:reveal>
        <h2
            class="font-display text-text-primary text-center text-3xl font-bold lg:text-4xl"
        >
            O que os clientes dizem
        </h2>
    </div>

    <!-- Cards -->
    <div class="mx-auto max-w-6xl px-6" use:reveal={{ delay: 80 }}>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {#each testimonials as item}
                <article
                    class="flex flex-col gap-[16px] rounded-[2px] border-[0.5px] border-[#2A2A2A] bg-[#181818] p-6"
                    aria-label="Depoimento de {item.name}"
                >
                    <!-- Stars -->
                    <div
                        class="flex gap-[3px]"
                        aria-label="{item.rating} estrelas"
                    >
                        {#each { length: item.rating } as _}
                            <Star
                                size={14}
                                color="#D4A017"
                                fill="#D4A017"
                                strokeWidth={0}
                            />
                        {/each}
                    </div>

                    <!-- Testimonial text -->
                    <p
                        class="font-body flex-1 text-[15px]/[1.7] text-[#E0E0E0]"
                    >
                        "{item.text}"
                    </p>

                    <!-- Identity -->
                    <div
                        class="mt-auto flex flex-col gap-[2px] border-t-[0.5px] border-[#2A2A2A] pt-[4px]"
                    >
                        <span
                            class="font-display text-[15px] font-[500] text-[#F5F5F5]"
                            >{item.name}</span
                        >
                        <span class="font-body text-[12px] text-[#A0A0A0]"
                            >{item.location}</span
                        >
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>
