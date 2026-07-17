# Horizonte Embalagens

Site institucional (landing page) para a **Distribuidora Horizonte**, empresa de Santa Luzia (MG) que distribui embalagens, descartáveis e materiais de limpeza para empresas da região Central e Metropolitana de Belo Horizonte.

## O que é

Projeto de site para cliente, desenvolvido pela **Evolink**. É uma página única (single page) com apresentação institucional, catálogo de categorias de produtos, seção "sobre a empresa" com histórico real do negócio, formulário de contato, mapa incorporado e botão flutuante de WhatsApp para geração de orçamentos. O objetivo é servir como cartão de visitas digital e canal de contato comercial, não uma loja com carrinho/checkout.

## Funcionalidades

- **Hero** com chamada para orçamento via WhatsApp e link para o catálogo.
- **Categorias em destaque**: Embalagens, Materiais de Limpeza, Equipamentos e Outros.
- **Seção "Por que escolher a Horizonte"** com diferenciais (entrega, marcas, preço, atendimento).
- **Sobre nós / História da empresa**, com texto institucional da distribuidora.
- **Contato**: formulário (nome, empresa, e-mail, telefone, mensagem) e mapa do Google Maps incorporado com o endereço da loja.
- **Parcerias**: grade com logos de marcas/fornecedores trabalhados pela distribuidora.
- **Botão flutuante de WhatsApp** presente em toda a navegação, com número e mensagem pré-preenchidos.
- Layout responsivo, com animações leves de entrada ao rolar a página (`useRevealOnScroll`).

## Stack

- **React 18** + **TypeScript**
- **Vite** (bundler e dev server)
- **Tailwind CSS** para estilização
- **shadcn/ui** + **Radix UI** para componentes de interface
- **React Router DOM** para roteamento
- **React Hook Form** + **Zod** para o formulário de contato
- **TanStack Query** (React Query) incluído na stack base do template
- **Vitest** + **Testing Library** para testes
- Deploy configurado para **Vercel** (`vercel.json` com rewrite de rotas para SPA)
- Projeto criado a partir do template [Lovable](https://lovable.dev) (base `vite_react_shadcn_ts`)

## Como rodar localmente

Pré-requisito: Node.js instalado.

```sh
# Clonar o repositório
git clone https://github.com/evolinkvesp/horizonteembalagens.git
cd horizonteembalagens

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar os testes
npm run test
```

O projeto também possui `bun.lockb`, então `bun install` / `bun dev` funcionam como alternativa ao npm.

## Estrutura

```
src/
  pages/Index.tsx          # página única com todas as seções do site
  components/site/         # cabeçalho (SiteHeader) e botão de WhatsApp (WhatsAppFab)
  components/ui/           # componentes shadcn/ui reutilizáveis
  hooks/                   # hooks utilitários (scroll reveal, mobile, toast)
  assets/                  # imagens do site e logos de parceiros
```
