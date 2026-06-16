<script lang="ts">
    import { reveal } from "$lib/actions/reveal";
    import { Star } from "lucide-svelte";

    const testimonials = [
        {
            name: "Julio Zirondi",
            location: "Santo André, SP",
            text: `Fiz minha prótese e deu tudo certo. Hoje estou parecendo o Leonardo DiCaprio em Titanic`,
            rating: 5,
        },
        {
            name: "Domingo Andrade",
            location: "Santo André, SP",
            text: `Próteses excelentes com muita naturalidade. Pode confirmar`,
            rating: 5,
        },
        {
            name: "Igor Werneck",
            location: "Santo André, SP",
            text: `Já corto o meu cabelo aqui há anos e não mudo por nada. O clima é bom, o ambiente é aconchegante e 
            o tratamento que o cabeleireiro Marcos entrega, eu nunca vi igual. Recomendo para à todos!`,
            rating: 5,
        },
        {
            name: "Raoni Martins",
            location: "Santo André, SP",
            text: `Marcos Carvalho é um excelente profissional!
            Barbeiro, visagista e protesista, está sempre em busca de novos conhecimentos para oferecer a melhor experiência aos seus clientes.

            Muito solícito, dedicado e comprometido com a excelência em cada atendimento.
            Se você procura qualidade, atenção aos detalhes e um serviço diferenciado, pode confiar!

            Super recomendo!`,
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
