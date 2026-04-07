# MarcosSite

Landing page de vendas para **Marcos**, especialista em prótese capilar masculina em Santo André/SP.

## Sobre o projeto

Site de página única (landing page) focado em conversão, com o objetivo de levar o visitante a agendar uma avaliação gratuita via WhatsApp. O conteúdo aborda calvície como questão de autoestima, apresenta a solução (prótese capilar 100% natural, sem cirurgia, resultado no mesmo dia), e guia o usuário pelo processo em 3 etapas simples.

### Seções da página

| Seção | Descrição |
|---|---|
| **Hero** | Proposta de valor principal com CTA direto para WhatsApp |
| **Problem** | Abordagem emocional sobre o impacto da calvície |
| **Solution** | Apresentação da prótese capilar como solução |
| **Differentials** | Diferenciais do serviço |
| **BeforeAfter** | Galeria de antes e depois |
| **HowItWorks** | Processo em 3 passos: Agendamento → Avaliação → Transformação |
| **About** | Bio do Marcos e sua especialização |
| **FAQ** | Perguntas frequentes |
| **CTAFinal** | Chamada final para agendamento |

## Stack

- **[SvelteKit](https://kit.svelte.dev/)** — framework full-stack
- **[Tailwind CSS v4](https://tailwindcss.com/)** — estilização utilitária
- **TypeScript** — tipagem estática
- **Vite** — bundler

## Variáveis de ambiente

Crie um arquivo `.env` na raiz com:

```env
PUBLIC_BUSINESS_NAME=Nome do negócio
PUBLIC_WHATSAPP_NUMBER=5511999999999
PUBLIC_WHATSAPP_MESSAGE=Olá, gostaria de agendar uma avaliação gratuita!
```

> As variáveis prefixadas com `PUBLIC_` são expostas no cliente via `$env/static/public` do SvelteKit.

## Desenvolvimento

```sh
npm install
npm run dev
```

Acesse em `http://localhost:5173`.

## Build para produção

```sh
npm run build
npm run preview
```

> Para fazer deploy, instale o [adapter](https://svelte.dev/docs/kit/adapters) adequado ao ambiente de hospedagem (Vercel, Netlify, Node, etc.).
