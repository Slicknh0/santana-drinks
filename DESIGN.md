---
name: Santana Drinks
description: Bar de drinks em Santana, Zona Norte de São Paulo, sob luz de poste de sódio
colors:
  asphalt: "#0e0d0a"
  night: "#15130e"
  enamel: "#1d1a12"
  sodium: "#e2a64b"
  champagne: "#d8bd72"
  champagne-bright: "#ebd394"
  chalk: "#f3eee2"
  dust: "#aea690"
  line: "rgb(216 189 114 / 0.16)"
  line-strong: "rgb(216 189 114 / 0.36)"
typography:
  display:
    fontFamily: "Imbue, Georgia, serif"
    fontSize: "clamp(6.25rem, 1rem + 21vw, 21rem)"
    fontWeight: 400
    lineHeight: 0.78
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 100"
  headline:
    fontFamily: "Imbue, Georgia, serif"
    fontSize: "clamp(3.25rem, 1.4rem + 7.4vw, 8.5rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.015em"
    fontVariation: "\"opsz\" 100"
  title:
    fontFamily: "Imbue, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.8vw, 2.625rem)"
    fontWeight: 400
    lineHeight: 1.1
    fontVariation: "\"opsz\" 100"
  lead:
    fontFamily: "Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
  plate-label:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.12em"
rounded:
  plate: "0.3125rem"
  plate-rule: "2px"
spacing:
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 3rem)"
  section: "clamp(5rem, 3rem + 8vw, 11rem)"
  plate-inline: "1.5rem"
  plate-height: "3.25rem"
components:
  button-primary:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.asphalt}"
    typography: "{typography.button}"
    rounded: "{rounded.plate}"
    padding: "0 1.5rem"
    height: "{spacing.plate-height}"
  button-primary-hover:
    backgroundColor: "{colors.champagne-bright}"
    textColor: "{colors.asphalt}"
  button-ghost:
    backgroundColor: "rgb(14 13 10 / 0.4)"
    textColor: "{colors.chalk}"
    typography: "{typography.button}"
    rounded: "{rounded.plate}"
    padding: "0 1.5rem"
    height: "{spacing.plate-height}"
  button-ghost-hover:
    textColor: "{colors.champagne-bright}"
  brand-plate:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.asphalt}"
    typography: "{typography.plate-label}"
    rounded: "{rounded.plate}"
    padding: "0.46em 0.62em 0.42em 0.82em"
  street-plate:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.champagne}"
    typography: "{typography.plate-label}"
    rounded: "{rounded.plate}"
    padding: "0.875rem 1.25rem 0.9375rem"
---

# Design System: Santana Drinks

## Overview

**Creative North Star: "A rua de Santana sob o poste de sódio"**

O sistema trata a página como uma rua de bairro à noite: chão de asfalto quase preto, uma única fonte de luz âmbar e sinalização urbana. A luz de vapor de sódio é monocromática, então tudo o que ela ilumina vira tom de âmbar; por isso as fotografias passam por um mapa de gradiente e perdem a cor original. O ouro aparece como champanhe fosco, nunca como neon.

A voz tipográfica é editorial e noturna: uma serifa condensada de alto contraste (Imbue no tamanho óptico máximo) em escala de cartaz, contra uma sans de sinalização (Barlow) confortável para leitura. A densidade é baixa: poucas palavras por tela, muito respiro, composição assimétrica em grade de 12 colunas.

O vocabulário de componentes vem das placas de rua de São Paulo e da sinalização do metrô: placas de cantos quase retos com filete interno, rótulos em caixa alta condensada só dentro das placas, e um diagrama de linha de metrô para distâncias reais.

**Key Characteristics:**
- Fundo escuro contínuo (asphalt), sem blocos de cor alternados
- Um acento só (champanhe) para ação, marca e sinalização
- Sódio usado como luz (brilhos radiais e sombra da ação principal), nunca como tinta
- Fotografia em monocromia âmbar, sempre
- Placas com filete interno no lugar de botões arredondados e cards
- Movimento raro e ligado à luz: o poste acende

## Colors

Paleta restrita: neutros quentes quase pretos, um acento champanhe e uma luz âmbar que só existe como brilho.

### Primary
- **Champanhe fosco** (#d8bd72): preenchimento da ação principal ("Como chegar"), plaqueta da marca "Drinks", ícones, linha do diagrama de metrô e textos de placa de rua. Contraste com asphalt acima de 10:1.
- **Champanhe aceso** (#ebd394): estado de hover do champanhe e mensagens de status curtas.

### Secondary
- **Luz de sódio** (#e2a64b): brilho radial do poste no hero, halo do marcador do mapa e sombra difusa sob a placa principal. Nunca em texto, borda ou fundo sólido.

### Neutral
- **Asfalto** (#0e0d0a): chão de toda a página, menu mobile e gradientes que fundem fotos ao fundo.
- **Noite** (#15130e): preenchimento de molduras de foto enquanto a imagem carrega.
- **Esmalte** (#1d1a12): superfície das placas de rua e do mapa.
- **Cal** (#f3eee2): texto principal, títulos e linhas do ícone de menu.
- **Poeira** (#aea690): texto secundário, rótulos de lista, notas legais. Contraste com asphalt por volta de 7,8:1.
- **Filete** (rgb(216 189 114 / 0.16)): divisores de lista, borda do cabeçalho rolado, bordas de seção.
- **Filete forte** (rgb(216 189 114 / 0.36)): filete interno das placas de rua, borda do botão fantasma, trilho da linha de metrô.

### Named Rules
**The Sodium Rule.** Sódio é luz, não tinta: só aparece em gradientes radiais e sombras difusas. Se um elemento precisa ser lido, ele é champanhe ou cal.

**The One Accent Rule.** Champanhe é o único acento. Não há segunda cor de destaque, nem estados em vermelho, verde ou azul.

## Typography

**Display Font:** Imbue (com Georgia, serif)
**Body Font:** Barlow (com ui-sans-serif, system-ui)
**Label Font:** Barlow Condensed (com Barlow)

**Character:** uma Didone condensada de cardápio e cartaz de cinema, sempre em tamanho óptico 100, contra uma grotesca nascida de placas de estrada. O contraste entre as duas é o que dá o tom noturno e urbano.

### Hierarchy
- **Display** (400, clamp(6.25rem, 1rem + 21vw, 21rem), 0.78): só a palavra "Santana" do hero.
- **Headline** (400, clamp(3.25rem, 1.4rem + 7.4vw, 8.5rem), 0.9): títulos de seção curtos, de 2 a 6 palavras, alinhados à esquerda.
- **Title** (400, clamp(1.75rem, 1.3rem + 1.8vw, 2.625rem), 1.1): subtítulos de lista (carta de drinks) e links do menu mobile em escala equivalente (3.25rem).
- **Lead** (400, 1.25rem, 1.55): primeira frase de cada seção e parágrafos de apresentação, largura máxima de 36rem.
- **Body** (400, 1.0625rem, 1.65): texto corrido e valores de listas.
- **Small** (400, 0.9375rem, 1.55): navegação, rótulos de lista, legendas e notas legais (0.8125rem).
- **Plate label** (600, caixa alta, 0.12em a 0.2em): exclusivamente dentro de placas de rua e da plaqueta da marca.

### Named Rules
**The Plate-Only Caps Rule.** Caixa alta condensada existe só dentro de uma placa. Nada de rótulos em caixa alta acima de títulos.

**The Optical Size Rule.** Imbue sempre com `font-variation-settings: "opsz" 100` e peso 400; nunca em texto corrido.

## Layout

Contêiner máximo de 90rem centralizado, com margem lateral fluida (gutter). A partir de 768px, grade de 12 colunas com espaçamento de 1.5rem; composições são assimétricas (texto em 5 colunas, imagem em 6 a 7, galeria escalonada 5/3/4 com deslocamentos verticais). Hero e interlúdio ocupam a largura total e ao menos 82% da altura da tela.

O ritmo vertical usa um token único de seção (clamp(5rem, 3rem + 8vw, 11rem)); a seção de drinks usa metade embaixo porque o interlúdio seguinte já abre com um degradê escuro. Há mais espaço acima de cada título do que abaixo.

No mobile tudo vira uma coluna: a galeria vira faixa horizontal com snap (cartões de 80vw), a ação principal ocupa a largura toda e uma barra fixa "Como chegar" aparece no rodapé da tela quando nenhuma outra chamada está visível.

## Elevation & Depth

Sistema plano com camadas tonais. Profundidade vem de luz (brilhos radiais) e de fotos fundidas ao fundo por degradês, não de sombras estruturais. Sombras existem só em três lugares.

### Shadow Vocabulary
- **Brilho da ação** (`box-shadow: 0 10px 30px -12px rgb(226 166 75 / 0.45)`): sob a placa champanhe; no hover sobe para `0 14px 40px -12px rgb(226 166 75 / 0.6)`.
- **Placa pendurada** (`box-shadow: 0 24px 48px -24px rgb(0 0 0 / 0.8)`): sob as placas de rua.
- **Halo do marcador** (`box-shadow: 0 0 0 1px var(--color-line-strong), 0 0 80px rgb(226 166 75 / 0.35)`): no marcador do mapa antes de carregar.

### Named Rules
**The Light-Not-Lift Rule.** Nada "flutua" com sombra cinza. Se algo precisa se destacar, recebe luz âmbar ou contraste de cor.

## Shapes

Cantos quase retos (0.3125rem) em tudo que é interativo ou sinalização, com um filete interno de 1px recuado 4 a 5px e cantos de 2px, como a borda pintada das placas de rua. Fotos usam o mesmo raio. Não há pílulas, círculos grandes ou raios generosos; o único círculo é o marcador do mapa e a estação no diagrama de metrô.

## Components

### Buttons
Placas firmes e silenciosas, com o filete interno como assinatura.
- **Shape:** cantos quase retos (0.3125rem), altura mínima 3.25rem, padding lateral 1.5rem, filete interno em `currentColor` a 26% de opacidade.
- **Primary:** fundo champanhe, texto asphalt em Barlow 600; ícone de seta fina à direita. Usado só para "Como chegar".
- **Hover / Focus:** fundo champanhe aceso, filete a 60%, seta desliza 3px; foco com contorno champanhe de 2px afastado 3px; ao pressionar desce 1px.
- **Ghost:** fundo asphalt a 40%, texto cal, borda interna de 1px no filete forte; no hover texto e borda viram champanhe.

### Navigation
Cabeçalho fixo transparente sobre o hero; ao rolar ganha asphalt a 85%, desfoque e filete inferior. Links em Barlow 400 0.9375rem na cor poeira, cal no hover. No mobile, botão de duas linhas que viram X e um painel de tela cheia em asphalt com links em Imbue 3.25rem entrando em sequência (70ms entre itens), endereço e a placa principal no pé.

### Brand plate (Signature Component)
Marca provisória: "Santana" em Imbue ao lado de uma plaqueta champanhe "DRINKS" em Barlow Condensed 600 com 0.2em de espaçamento e filete interno escuro. Todas as medidas em `em`, então escala do cabeçalho (0.625rem) ao hero (até 1.75rem).

### Street plate (Signature Component)
Placa esmaltada com endereço: fundo esmalte, texto champanhe em caixa alta condensada, linha secundária em poeira com bairro e CEP alinhados às pontas. No hero é o link para a seção de endereço; o filete vira champanhe no hover.

### Route line (Signature Component)
Diagrama de linha de metrô: círculo de estação com contorno champanhe, trilho de 1px, distância real em Barlow Condensed champanhe no meio e a plaqueta da marca no fim. O preenchimento do trilho se desenha com o scroll onde há suporte.

### Photo frame
Foto com `object-fit: cover`, raio de placa e fundo noite; imagens sempre processadas em monocromia âmbar (`npm run photos`). Só o poste do interlúdio acende com o scroll.

## Do's and Don'ts

### Do:
- **Do** reservar a placa champanhe sólida para a ação principal "Como chegar".
- **Do** processar toda foto nova com `npm run photos` antes de publicar.
- **Do** manter o fundo asphalt (#0e0d0a) contínuo e fundir fotos a ele com degradês.
- **Do** usar espaço inseparável em nomes próprios curtos ("São Paulo", "Zona Norte") em textos de destaque.
- **Do** manter um único momento de luz por cena: o poste do hero ao carregar e o do interlúdio ao rolar.

### Don't:
- **Don't** usar amarelo saturado, neon, brilho em bordas ou texto em sódio (#e2a64b).
- **Don't** publicar fotos coloridas ou sem o tratamento âmbar.
- **Don't** colocar rótulos em caixa alta acima de títulos, nem caixa alta fora de placas.
- **Don't** usar botões em pílula, cards com sombra cinza ou grades de cards iguais.
- **Don't** animar a entrada de cada seção; movimento é luz, não coreografia.
