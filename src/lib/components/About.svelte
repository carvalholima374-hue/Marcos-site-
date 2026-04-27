<script lang="ts">
    import { reveal } from "$lib/actions/reveal";
</script>

<section class="bg-[#0A0A0A] py-20 lg:py-24" aria-label="Sobre o profissional">
    <div class="max-w-6xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Photo -->
            <div use:reveal class="flex justify-center lg:justify-start">
                <img
                    src="images/marcos_profile.jpeg"
                    alt="Marcos, especialista em prótese capilar em Santo André/SP"
                    class="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover object-top shrink-0 border-2 border-accent/30"
                    loading="lazy"
                    width="288"
                    height="288"
                />
            </div>

            <!-- Text -->
            <div use:reveal={{ delay: 100 }}>
                <h2
                    class="font-display text-2xl lg:text-3xl font-bold text-text-primary mb-6 text-center"
                    style="font-family: 'Playfair Display', Georgia, serif;"
                >
                    Marcos, especialista em imagem masculina
                </h2>

                <p
                    class="text-[#A0A0A0] leading-relaxed text-base lg:text-lg text-justify"
                >
                    Com anos de experiência em imagem masculina, o Marcos chegou
                    à prótese capilar com um olhar apurado para proporção,
                    estilo e naturalidade — e foi o primeiro profissional a
                    oferecer esse serviço em Santo André. Cada atendimento é
                    personalizado, porque cada cabeça é única — e cada
                    transformação merece cuidado total.
                </p>
            </div>
        </div>
    </div>
</section>
