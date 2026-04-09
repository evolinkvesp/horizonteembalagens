
## Objetivo
1) Incluir no site o texto “História da empresa” (do print enviado).  
2) Criar uma nova seção “Parcerias” **antes do Footer**, com **grid de logos**.

---

## O que vou adicionar (resultado esperado)

### 1) Texto “História da Empresa”
- Criar um bloco institucional com título **“História da Empresa”** e o texto completo, com tipografia bem legível (parágrafos, espaçamento e largura confortável).
- Para manter o visual moderno, vou apresentar o texto dentro de um `Card`/container com:
  - largura máxima (ex.: `max-w-3xl`)
  - `text-muted-foreground` para leitura
  - bom espaçamento vertical (`leading-relaxed`, `space-y-4`)

**Posicionamento sugerido dentro da página**
- Vou colocar esse texto como uma subseção no “Sobre nós”, logo após os parágrafos existentes (mantém coerência narrativa).
- Se você preferir que fique junto de “Parcerias” antes do footer, eu consigo mover para lá (sem custo extra) — mas no plano vou implementar no “Sobre nós” para não ficar “tarde demais” na página.

---

### 2) Seção “Parcerias” (grid de logos) antes do Footer
- Nova seção com `id="parcerias"` para poder linkar no futuro (opcional colocar no header).
- Cabeçalho padrão (`SectionHeading`) com:
  - kicker: “Parcerias”
  - título: “Marcas que trabalhamos”
  - descrição: algo como “Trabalhamos com marcas reconhecidas para garantir padrão e disponibilidade.”
- Grid responsivo de logos:
  - Mobile: 2 colunas
  - Tablet: 3–4 colunas
  - Desktop: 5–6 colunas (dependendo da quantidade)
- Cada logo em um card discreto (borda, fundo, `shadow-elev-1`), com:
  - altura padronizada (ex.: `h-12` ou `h-14`)
  - `object-contain` para não cortar
  - `alt` descritivo (acessibilidade)

---

## Dependências / Conteúdo que preciso de você
Para o **grid de logos**, eu preciso que você envie os arquivos dos parceiros (PNG/SVG de preferência).  
Pode mandar:
- 1 arquivo por marca (ideal)
- ou um print com as logos em alta, e eu separo (mas o ideal é arquivo individual)

**Pergunta prática (para eu montar certinho):**
- Quantos parceiros você quer mostrar? (ex.: 6, 8, 10, “todos que eu enviar”)

---

## Arquivos que vou mexer
- `src/pages/Index.tsx`
  - Inserir o bloco “História da Empresa” dentro da seção `#sobre`
  - Criar a seção `#parcerias` **antes do Footer**
  - Importar e renderizar as logos dos parceiros

Se você enviar muitas logos, posso opcionalmente organizar em:
- `src/assets/partners/*.png|.svg`
(sem necessidade de banco de dados; tudo como assets do frontend)

---

## Passo a passo de implementação (técnico)
1. **Mapear o local exato** em `Index.tsx` para inserir:
   - (a) “História da Empresa” dentro do `section#sobre`
   - (b) `section#parcerias` antes do `<footer>`
2. **Adicionar o texto** (formatação em parágrafos):
   - Vou manter o conteúdo fiel ao seu texto e apenas ajustar quebras de linha para leitura.
3. **Criar lista de parceiros** (array) com:
   - `name`
   - `logoSrc` (import do asset)
4. **Renderizar grid** com Tailwind responsivo e cards.
5. **Garantir consistência visual** com o design atual (bordas arredondadas, sombras, hover leve).
6. **Checagens finais**
   - Responsivo (mobile/desktop)
   - Carregamento (logos com `loading="lazy"` quando aplicável)
   - Acessibilidade (alt, contraste e foco)

---

## Critérios de aceite (como você valida)
- A seção “Sobre nós” passa a ter o bloco “História da Empresa” com leitura confortável.
- A seção “Parcerias” aparece **antes do rodapé**, com grid alinhado e responsivo.
- Logos não ficam esticadas/cortadas e têm bom contraste no fundo.
- Em celular, o grid fica organizado (sem apertar demais).

---

## Observação sobre o print enviado
A imagem parece ser referência de um site antigo contendo texto e logos. Eu não vou “colar a imagem” no site (para não perder qualidade/SEO). Vou usar o **texto como conteúdo** e os **logos como imagens separadas** (ficará mais profissional e rápido).

---

## Próximo passo
Você pode enviar agora:
1) os **arquivos de logo** dos parceiros (PNG/SVG), e  
2) dizer **quantos parceiros** quer exibir (ou “todos os enviados”).  
Com isso, eu implemento exatamente como acima.
