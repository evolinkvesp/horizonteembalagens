import { useEffect, useMemo, useRef, useState } from "react";
import {
  BadgeCheck,
  Boxes,
  Clock,
  Handshake,
  Leaf,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Tag,
  Sparkles,
} from "lucide-react";

import heroImg from "@/assets/hero-distribuidora-horizonte.jpg";
import catEmbalagens from "@/assets/categoria-embalagens.jpg";
import catLimpeza from "@/assets/categoria-limpeza.jpg";
import catEquip from "@/assets/categoria-equipamentos.jpg";
import logoHorizonte from "@/assets/logo-horizonte.png";

import partnerCopobras from "@/assets/partners/copobras.jpg";
import partnerTakente from "@/assets/partners/takente.jpg";
import partnerPackform from "@/assets/partners/packform.jpeg";
import partnerTote from "@/assets/partners/tote-embalagens.png";
import partnerCopoplast from "@/assets/partners/copoplast.png";
import partnerBuenApetit from "@/assets/partners/buen-apetit.jpeg";
import partnerVovoClara from "@/assets/partners/vovo-clara.jpeg";

import { SiteHeader } from "@/components/site/SiteHeader";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRevealOnScroll, useReducedMotion } from "@/hooks/use-reveal";

function cnJoin(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-wide text-primary">{kicker}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-muted-foreground">{description}</p> : null}
    </div>
  );
}

function Spotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--spot-x", `${x}%`);
      el.style.setProperty("--spot-y", `${y}%`);
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className={cnJoin(
        "pointer-events-none absolute inset-0",
        "[background:radial-gradient(520px_circle_at_var(--spot-x,70%)_var(--spot-y,40%),hsl(var(--brand-2)/0.18),transparent_60%)]",
        className,
      )}
    />
  );
}

const Index = () => {
  const { toast } = useToast();
  useRevealOnScroll();

  const [sending, setSending] = useState(false);

  const whatsHref = useMemo(() => {
    const phoneE164 = "553193361944";
    const text = "Olá! Gostaria de solicitar um orçamento.";
    return `https://wa.me/${phoneE164}?text=${encodeURIComponent(text)}`;
  }, []);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <WhatsAppFab />

      <main id="home">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <Spotlight />
          <div className="container grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
            <div className="reveal" data-reveal>
              <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-sm text-muted-foreground shadow-elev-1">
                <BadgeCheck className="h-4 w-4 text-primary" />
                Distribuição corporativa com agilidade
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Soluções Completas em <span className="text-primary">Embalagens</span> e <span className="text-primary">Limpeza</span>
                <span className="block">para sua Empresa</span>
              </h1>
              <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                Da embalagem sustentável ao material de higiene profissional: um portfólio completo para apoiar o horizonte de crescimento do seu negócio.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg" className="rounded-full">
                  <a href={whatsHref} target="_blank" rel="noreferrer">
                    <Phone className="h-4 w-4" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href="#produtos">Ver catálogo</a>
                </Button>
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Entrega rápida
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Marcas de qualidade
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-primary" />
                  Opções sustentáveis
                </div>
              </div>
            </div>

            <div className="reveal" data-reveal>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-gradient opacity-15 blur-2xl" />
                <img
                  src={heroImg}
                  alt="Embalagens e materiais de limpeza em um ambiente industrial organizado"
                  className="aspect-[4/3] w-full rounded-[2rem] border object-cover shadow-elev-2"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section id="produtos" className="container py-14 md:py-20">
          <div className="reveal" data-reveal>
            <SectionHeading
              kicker="Categorias em destaque"
              title="Tudo o que sua operação precisa, em um só lugar"
              description="Seleção completa de embalagens, limpeza e equipamentos — pronta para atender diferentes segmentos e volumes."
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Embalagens",
                desc: "Soluções para alimentos, logística e varejo — com foco em sustentabilidade.",
                img: catEmbalagens,
                icon: <Boxes className="h-5 w-5 text-primary" />,
              },
              {
                title: "Materiais de Limpeza",
                desc: "Linha profissional para ambientes corporativos, industriais e hospitalares.",
                img: catLimpeza,
                icon: <SparklesIcon />,
              },
              {
                title: "Equipamentos e Outros",
                desc: "Itens de apoio, dispensers, utensílios e acessórios para o dia a dia.",
                img: catEquip,
                icon: <Package className="h-5 w-5 text-primary" />,
              },
            ].map((c) => (
              <Card
                key={c.title}
                className="group overflow-hidden rounded-2xl shadow-elev-1 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={c.img}
                    alt={`Categoria ${c.title}`}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent">{c.icon}</span>
                    {c.title}
                  </CardTitle>
                  <CardDescription>{c.desc}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="soft" className="w-full rounded-xl">
                    <a href={whatsHref} target="_blank" rel="noreferrer">
                      Solicitar itens desta categoria
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-y bg-card">
          <div className="container py-14 md:py-20">
            <div className="reveal" data-reveal>
              <SectionHeading
                kicker="Por que escolher a Horizonte"
                title="Eficiência, confiança e atendimento que acompanha você"
                description="Uma distribuidora preparada para garantir previsibilidade, padrão e suporte no dia a dia da sua empresa."
              />
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                {
                  title: "Entrega Rápida",
                  desc: "Agilidade na separação e no envio para reduzir rupturas.",
                  icon: <Clock className="h-5 w-5 text-primary" />,
                },
                {
                  title: "Marcas de Qualidade",
                  desc: "Produtos confiáveis para manter seu padrão de operação.",
                  icon: <ShieldCheck className="h-5 w-5 text-primary" />,
                },
                {
                  title: "Preços Competitivos",
                  desc: "Condições comerciais alinhadas ao seu volume e perfil.",
                  icon: <Tag className="h-5 w-5 text-primary" />,
                },
                {
                  title: "Atendimento Personalizado",
                  desc: "Suporte para montar listas, recorrência e reposição inteligente.",
                  icon: <Handshake className="h-5 w-5 text-primary" />,
                },
              ].map((i) => (
                <div
                  key={i.title}
                  className="reveal rounded-2xl border bg-background p-5 shadow-elev-1 transition-transform duration-200 hover:-translate-y-1"
                  data-reveal
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent">{i.icon}</div>
                  <h3 className="mt-4 text-base font-semibold">{i.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="container py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="reveal" data-reveal>
              <SectionHeading
                kicker="Sobre nós"
                title="Compromisso com o horizonte do seu negócio"
                description="A Distribuidora Horizonte nasce para simplificar compras recorrentes e garantir padrão de abastecimento — com foco em relacionamento, transparência e eficiência."
              />
              <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
                <p>
                  Trabalhamos com um portfólio pensado para operações que valorizam higiene, segurança e apresentação: do estoque ao ponto de venda.
                </p>
                <p>
                  Nosso objetivo é atuar como parceira — ajudando você a planejar consumo, reduzir desperdícios e manter disponibilidade.
                </p>
              </div>

              <Card className="mt-8 rounded-2xl border bg-background shadow-elev-2">
                <CardHeader>
                  <CardTitle className="text-xl">História da Empresa</CardTitle>
                  <CardDescription>Grupo Comercial Horizonte</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Empresa distribuidora de embalagens e descartáveis, atuante no mercado desde 2010, atendendo a região Central e Metropolitana de Belo Horizonte.
                    Situa-se na cidade de Santa Luzia em Minas Gerais, onde iniciou sua trajetória de sucesso, com parcerias e objetivando o foco em levar a seus clientes os melhores preços ligando a fábrica diretamente a você, primando sempre pelo respeito e a honestidade com seus clientes, fornecedores e colaboradores.
                  </p>
                  <p>
                    Assim, vem conseguindo crescer saudavelmente mediante a visão sistêmica e organizada de seus gestores e, consequentemente, vem conquistando a confiança do mercado Mineiro como um todo.
                  </p>
                  <p>
                    A equipe da Horizonte Embalagens confirma seus sinceros agradecimentos a todos que a ajudam a crescer e conquistar seu espaço, podendo colaborar de alguma forma para a sociedade e sonhar que um dia verá um mundo mais justo.
                  </p>
                </CardContent>
              </Card>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" className="rounded-full">
                  <a href={whatsHref} target="_blank" rel="noreferrer">
                    Fale com um consultor
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="#contato">Enviar mensagem</a>
                </Button>
              </div>
            </div>

            <div className="reveal" data-reveal>
              <Card className="rounded-2xl border bg-background p-6 shadow-elev-2">
                <CardTitle className="text-xl">Atendimento para empresas</CardTitle>
                <CardDescription className="mt-2">
                  Segmentos atendidos: alimentação, serviços, escritórios, condomínios, indústrias e instituições.
                </CardDescription>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  {[
                    "Embalagens sustentáveis",
                    "Descartáveis e food service",
                    "Higienização profissional",
                    "EPIs e acessórios",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{t}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="container py-14 md:py-20">
          <div className="reveal" data-reveal>
            <SectionHeading
              kicker="Contato e localização"
              title="Solicite um orçamento ou visite nossa unidade"
              description="Envie sua lista e retorno com agilidade. Se preferir, fale direto no WhatsApp."
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="reveal rounded-2xl shadow-elev-1" data-reveal>
              <CardHeader>
                <CardTitle className="text-xl">Formulário</CardTitle>
                <CardDescription>Preencha os dados e descreva sua necessidade.</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="grid gap-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setSending(true);
                    await new Promise((r) => setTimeout(r, 600));
                    setSending(false);
                    toast({
                      title: "Mensagem enviada!",
                      description: "Recebemos seu contato. Em breve retornaremos.",
                    });
                    (e.target as HTMLFormElement).reset();
                  }}
                >
                  <div className="grid gap-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input id="nome" name="nome" placeholder="Seu nome" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input id="empresa" name="empresa" placeholder="Nome da empresa" />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" name="email" type="email" placeholder="contato@empresa.com" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" name="telefone" placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea id="mensagem" name="mensagem" placeholder="Descreva os itens e quantidades aproximadas" required />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button type="submit" variant="hero" className="rounded-xl" disabled={sending}>
                      {sending ? "Enviando..." : "Enviar"}
                    </Button>
                    <Button asChild type="button" variant="outline" className="rounded-xl">
                      <a href={whatsHref} target="_blank" rel="noreferrer">
                        <Phone className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="reveal overflow-hidden rounded-2xl shadow-elev-1" data-reveal>
              <div className="flex items-center justify-between gap-3 border-b bg-secondary px-6 py-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium">Localização</p>
                </div>
                <a
                  href="https://share.google/NAGTX2PnXthFlQ1YL"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  Abrir no Google Maps
                </a>
              </div>
              <div className="aspect-[4/3] w-full">
                <iframe
                  title="Mapa"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=R.%20Maring%C3%A1%2C%20596%20-%20S%C3%A3o%20Benedito&t=&z=16&ie=UTF8&iwloc=&output=embed"
                />
              </div>
              <div className="px-6 py-5 text-sm text-muted-foreground">
                R. Maringá, 596 - São Benedito
              </div>
            </Card>
          </div>
        </section>

        {/* Parcerias */}
        <section id="parcerias" className="container py-14 md:py-20">
          <div className="reveal" data-reveal>
            <SectionHeading
              kicker="Parcerias"
              title="Marcas que trabalhamos"
              description="Trabalhamos com marcas reconhecidas para garantir padrão e disponibilidade."
            />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { name: "Copobras", src: partnerCopobras },
              { name: "Takente", src: partnerTakente },
              { name: "Packform", src: partnerPackform },
              { name: "Tote Embalagens", src: partnerTote },
              { name: "CopoPlast", src: partnerCopoplast },
              { name: "Buen Apetit", src: partnerBuenApetit },
              { name: "Vovó Clara", src: partnerVovoClara },
            ].map((p) => (
              <div
                key={p.name}
                className="reveal flex min-h-[152px] items-center justify-center rounded-2xl border bg-background p-7 shadow-elev-1"
                data-reveal
              >
                <img
                  src={p.src}
                  alt={`Logo ${p.name}`}
                  className="h-28 w-full max-w-[320px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-card">
          <div className="container grid gap-10 py-12 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <img src={logoHorizonte} alt="Logo da Distribuidora Horizonte" className="h-10 w-auto" loading="lazy" />
              <div>
                <p className="text-sm font-semibold">Distribuidora Horizonte</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Embalagens e materiais de limpeza com atendimento profissional e foco em previsibilidade.
                </p>
              </div>
            </div>

            <div className="grid gap-2 text-sm">
              <p className="font-semibold">Links rápidos</p>
              {[
                { label: "Produtos", href: "#produtos" },
                { label: "Sobre nós", href: "#sobre" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="grid gap-2 text-sm">
              <p className="font-semibold">Contato</p>
              <p className="text-muted-foreground">WhatsApp: (31) 9336-1944</p>
              <p className="text-muted-foreground">Fixo: (31) 3058-0236</p>
              <p className="text-muted-foreground">comercialhorizontee@gmail.com</p>
              <div className="mt-2 flex gap-2">
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background text-muted-foreground shadow-elev-1 hover:bg-accent hover:text-foreground"
                  href={whatsHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <Phone className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background text-muted-foreground shadow-elev-1 hover:bg-accent hover:text-foreground"
                  href="#contato"
                  aria-label="Localização"
                >
                  <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t py-6">
            <div className="container text-xs text-muted-foreground">
              © {new Date().getFullYear()} Distribuidora Horizonte. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

function SparklesIcon() {
  return <Sparkles className="h-5 w-5 text-primary" />;
}

export default Index;

