import { useEffect, useMemo, useState } from "react";
import { Menu, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHorizonte from "@/assets/logo-horizonte.png";

type NavItem = { label: string; href: string };

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

function scrollToHash(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader({ items = DEFAULT_ITEMS }: { items?: NavItem[] }) {
  const [open, setOpen] = useState(false);

  const requestQuoteHref = useMemo(() => {
    const phoneE164 = "553193361944";
    const text = "Olá! Gostaria de solicitar um orçamento.";
    return `https://wa.me/${phoneE164}?text=${encodeURIComponent(text)}`;
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToHash("#home");
            setOpen(false);
          }}
          className="group inline-flex items-center gap-2"
          aria-label="Distribuidora Horizonte"
        >
          <span className="inline-flex items-center gap-3">
            <img
              src={logoHorizonte}
              alt="Logo da Distribuidora Horizonte"
              className="h-10 w-auto"
              loading="lazy"
            />
            <span className="sr-only">Distribuidora Horizonte</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegação principal">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToHash(item.href);
              }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="hero" className="rounded-full">
            <a href={requestQuoteHref} target="_blank" rel="noreferrer">
              Solicitar Orçamento
            </a>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="container pb-4 pt-2">
            <div className="rounded-2xl border bg-card p-3 shadow-elev-1">
              <div className="grid gap-1">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash(item.href);
                      setOpen(false);
                    }}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild variant="hero" className="mt-2 w-full rounded-xl">
                  <a href={requestQuoteHref} target="_blank" rel="noreferrer">
                    Solicitar Orçamento
                  </a>
                </Button>
                <div className="mt-2 flex items-center gap-2 rounded-xl bg-secondary p-3 text-sm text-muted-foreground">
                  <Package className="h-4 w-4 text-primary" />
                  Embalagens e limpeza para empresas.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
