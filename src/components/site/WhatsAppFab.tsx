import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

type WhatsAppFabProps = {
  phoneE164?: string; // e.g. 5511999999999
  message?: string;
};

export function WhatsAppFab({ phoneE164 = "553193361944", message = "Olá! Gostaria de solicitar um orçamento." }: WhatsAppFabProps) {
  const href = `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button
        asChild
        variant="whatsapp"
        size="icon"
        className="h-12 w-12 rounded-full"
        aria-label="Falar no WhatsApp"
      >
        <a href={href} target="_blank" rel="noreferrer">
          <Phone className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
}
