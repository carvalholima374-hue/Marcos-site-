<script lang="ts">
    import "../app.css";
    import {
        PUBLIC_BUSINESS_NAME,
        PUBLIC_SITE_URL,
        PUBLIC_WHATSAPP_NUMBER,
    } from "$env/static/public";

    let { children } = $props();

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
    <link rel="icon" href="favicon.png" type="image/png" />
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
