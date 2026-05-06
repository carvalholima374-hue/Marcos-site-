<script lang="ts">
    import "../app.css";
    import WhatsAppIcon from "$lib/icons/WhatsAppIcon.svelte";
    import {
        PUBLIC_BUSINESS_NAME,
        PUBLIC_SITE_URL,
        PUBLIC_WHATSAPP_NUMBER,
    } from "$env/static/public";

    let { children } = $props();

    let bottomOffset = $state(24); // default: bottom-16 = 4rem = 64px

    $effect(() => {
        function updateButtonPosition() {
            const footer = document.querySelector("footer");
            if (!footer) return;

            const footerTop = footer.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (footerTop < viewportHeight) {
                bottomOffset = Math.max(24, viewportHeight - footerTop + 8);
            } else {
                bottomOffset = 24;
            }
        }

        window.addEventListener("scroll", updateButtonPosition, { passive: true });
        updateButtonPosition();

        return () => window.removeEventListener("scroll", updateButtonPosition);
    });

    const siteUrl = PUBLIC_SITE_URL;
    const title = `${PUBLIC_BUSINESS_NAME} — Prótese Capilar em Santo André/SP`;
    const description =
        "Especialista em prótese capilar 100% natural em Santo André/SP. Sem cirurgia, sem dor, resultado no mesmo dia. Pioneiro na cidade. Agende sua avaliação gratuita.";
    const ogImage = `${siteUrl}/images/bg_image_5.png`;

    const jsonLdBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: PUBLIC_BUSINESS_NAME,
        description,
        url: siteUrl,
        telephone: `+${PUBLIC_WHATSAPP_NUMBER}`,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Santo André",
            addressRegion: "SP",
            addressCountry: "BR",
        },
        image: `${siteUrl}/images/marcos_profile.jpeg`,
        sameAs: ["https://www.instagram.com/marcos_protesecapilar/"],
        priceRange: "$$",
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços de Prótese Capilar",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Aplicação de Prótese Capilar",
                        description:
                            "Aplicação de prótese capilar 100% humana, personalizada e sem cirurgia. Resultado no mesmo dia.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Manutenção de Prótese Capilar",
                        description:
                            "Manutenção periódica para garantir aparência natural e durabilidade da prótese.",
                    },
                },
            ],
        },
    };

    const jsonLdFaq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "A prótese capilar dói?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não. O procedimento é completamente não invasivo e não causa nenhuma dor ou desconforto. É uma aplicação externa, sem cortes ou agulhas.",
                },
            },
            {
                "@type": "Question",
                name: "Vai aparecer que é prótese?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não. Quando bem aplicada e ajustada ao seu perfil, a prótese é completamente indistinguível do cabelo natural — tanto visualmente quanto ao toque.",
                },
            },
            {
                "@type": "Question",
                name: "Quanto tempo dura a prótese capilar?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Com os cuidados adequados, uma prótese capilar dura em média de 3 a 6 meses antes de precisar de manutenção ou substituição.",
                },
            },
            {
                "@type": "Question",
                name: "Posso molhar a prótese capilar e ir à academia?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. Após o período inicial de adaptação, você pode nadar, malhar, tomar banho e fazer todas as atividades do dia a dia normalmente.",
                },
            },
            {
                "@type": "Question",
                name: "Como é a manutenção da prótese capilar?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A manutenção é simples e periódica. O Marcos orienta cada cliente sobre os cuidados específicos para o seu tipo de prótese e estilo de vida.",
                },
            },
            {
                "@type": "Question",
                name: "Posso fazer penteados e cortes com a prótese capilar?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. A prótese pode ser cortada, penteada e estilizada como cabelo natural — inclusive com produtos de finalização.",
                },
            },
            {
                "@type": "Question",
                name: "A prótese capilar atrapalha o crescimento do cabelo natural?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não. A prótese é aplicada sobre o couro cabeludo sem bloquear folículos capilares. O cabelo natural continua seu ciclo normalmente.",
                },
            },
        ],
    };
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon-192x192.png"
    />
    <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/favicon-512x512.png"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="canonical" href={siteUrl} />

    <!-- Primary meta -->
    <meta name="description" content={description} />
    <meta
        name="keywords"
        content="prótese capilar, prótese capilar santo andré, hair system, calvície, perda de cabelo, implante capilar não cirúrgico, prótese capilar masculina, Santo André SP"
    />
    <meta name="author" content="Marcos Prótese Capilar" />
    <meta name="robots" content="index, follow" />
    <meta
        name="google-site-verification"
        content="zEwmTOqYovzuQqlaOYODeq5drOSJ-vlgGhs-CC3h60w"
    />
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta
        property="og:image:alt"
        content="Resultado de prótese capilar — Marcos Prótese Capilar"
    />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content={PUBLIC_BUSINESS_NAME} />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
    <meta
        name="twitter:image:alt"
        content="Resultado de prótese capilar — Marcos Prótese Capilar"
    />

    <!-- Structured data: LocalBusiness -->
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLdBusiness)}</script>`}

    <!-- Structured data: FAQPage -->
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLdFaq)}</script>`}
</svelte:head>

{@render children()}

<a
    href="https://wa.me/{PUBLIC_WHATSAPP_NUMBER}?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20prótese%20capilar."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    style="bottom: {bottomOffset}px"
    class="fixed left-6 z-50 flex items-center gap-2"
>
    <div class="whatsapp-fab flex items-center rounded-full p-3 bg-[#25D366] text-white shadow-lg shadow-black/40 hover:bg-[#1ebe5d] hover:scale-105 transition-transform duration-200">
        <WhatsAppIcon size={24} color="white" />
    </div>
    <span class="bg-white rounded-md py-2 px-4 text-black text-sm font-body font-semibold">Gostou? Fale Conosco</span>
</a>

<style>
    /*
     * Ciclo de 10s: pulsa 2x nos primeiros ~15% e fica parado o resto.
     * Infinite + duração longa = "de vez em quando" sem JS.
     */
    @keyframes wa-pulse {
        0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55);
        }
        5% {
            transform: scale(1.1);
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
        }
        10% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55);
        }
        15% {
            transform: scale(1.1);
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
        }
        20% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        .whatsapp-fab {
            animation: wa-pulse 10s ease-in-out infinite;
            animation-delay: 3s;
        }
    }
</style>
