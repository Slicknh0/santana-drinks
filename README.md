# Santana Drinks — landing page

Landing page do bar **SANTANA DRINKS** (R. Dr. Gabriel Piza, 544 – Santana, São Paulo – SP).

Direção visual: uma rua de Santana à noite sob luz de poste de vapor de sódio. Fundo asfalto, detalhes champanhe, fotos em monocromia âmbar, "placas" com filete interno inspiradas nas placas de rua de São Paulo e um diagrama de linha de metrô com a distância real até a estação Santana.

## Stack

- Next.js 16 (App Router, páginas estáticas) + React 19 + TypeScript
- Tailwind CSS v4 com tokens em `src/app/globals.css`
- Fontes via `next/font` (Imbue + Barlow + Barlow Condensed, servidas pelo próprio site)
- Sem biblioteca de animação: CSS (incluindo animações ligadas ao scroll) e `IntersectionObserver`

## Comandos

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:3000
npm run build      # build de produção
npm run start      # servir o build
npm run lint
npm run typecheck
npm run photos     # reprocessa fotos de assets-src/photos para src/assets/photos
```

Defina `NEXT_PUBLIC_SITE_URL` no deploy (ex.: `https://seudominio.com.br`). Canonical, Open Graph, sitemap, robots e JSON-LD usam essa URL; sem ela o fallback é `http://localhost:3000`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, endereço, coordenadas, metrô, horários, telefone, WhatsApp, e-mail, reservas, redes sociais | `src/data/business.ts` |
| Todos os textos da página, navegação, título e descrição de SEO | `src/data/content.ts` |
| Carta de drinks (a lista só aparece quando houver itens) | `src/data/drinks.ts` |
| Fotos, textos alternativos e créditos | `src/data/media.ts` |
| Cores, tipografia, espaçamentos, easing | `src/app/globals.css` (`@theme`) |

Campos `null` em `business.ts` ficam fora da interface e do JSON-LD. Ao preencher, aparecem sozinhos:

- `hours` → lista de horários na seção "Como chegar" e `openingHoursSpecification` no JSON-LD
- `contact.whatsapp`, `contact.phone`, `contact.email`, `contact.reservationUrl`, `social.*` → linha "Contato" com links e `sameAs`/`telephone` no JSON-LD

## Dados

Confirmado na ficha pública do Google (entidade `/g/11wmqht6jz`, link fornecido pelo cliente) em 2026-09-12:

- Nome: SANTANA DRINKS. Categoria: Bar
- Endereço: R. Dr. Gabriel Piza, 544 - Santana, São Paulo - SP, 02036-011 (Plus Code F9XH+4M)
- Coordenadas: -23.5021829, -46.6207904
- Nota 5,0 (quantidade de avaliações não visível; por isso não aparece no site nem no JSON-LD)
- Ficha não reivindicada pelo dono; sem telefone, horário, site ou fotos cadastrados

Calculado: estação Santana do metrô (Linha 1-Azul) a cerca de 400 m em linha reta (coordenadas da ficha x coordenadas da estação na Wikipédia).

**A confirmar com o dono antes de publicar** (nada disso está no site):

- Horário de funcionamento
- Telefone e WhatsApp. Um diretório de empresas (Solutudo, dados de CNPJ 26.219.294/0001-30 "Santana Drinks Ltda", mesmo endereço) lista (11) 99281-9630, mas não é fonte oficial
- Instagram e outras redes
- Reservas, carta, preços, música, eventos
- Logotipo e fotos reais do bar

## Fotos

Todas as fotos atuais são **ilustrativas** (Unsplash, licença Unsplash) e o site diz isso na seção Drinks e no rodapé. Créditos em `src/data/media.ts`.

Para usar fotos do bar:

1. Coloque os arquivos em `assets-src/photos/`
2. Rode `npm run photos` (gera versões em monocromia âmbar em `src/assets/photos/`)
3. Importe em `src/data/media.ts` e marque `illustrative: false`
4. Quando não houver mais fotos ilustrativas, remova as notas `illustrativeNote` em `content.ts`

`src/app/opengraph-image.png` (1200x630) e `src/app/apple-icon.png` foram gerados a partir da identidade; substitua se houver logotipo oficial.

## Acessibilidade e movimento

- HTML semântico, hierarquia de títulos, link "Pular para o conteúdo", foco visível
- Menu mobile com `aria-expanded`, `Esc`, foco inicial e conteúdo de fundo `inert`
- `prefers-reduced-motion`: sem acendimento do poste, sem animações de scroll
- Mapa do Google carregado só sob demanda (melhor desempenho e privacidade)
