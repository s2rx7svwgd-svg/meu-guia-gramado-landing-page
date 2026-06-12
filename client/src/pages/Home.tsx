import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ExternalLink,
  FileText,
  MapPinned,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const CAMPAIGN_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
];

const CHECKOUT_URL = "https://pay.hotmart.com/V105306779Q";
const VERSION_LABEL = "Versão atual: Maio/2026";

function preserveCampaignParams(checkoutUrl: string) {
  if (typeof window === "undefined") {
    return checkoutUrl;
  }

  const currentParams = new URLSearchParams(window.location.search);
  const nextUrl = new URL(checkoutUrl);

  CAMPAIGN_PARAMS.forEach((param) => {
    if (currentParams.has(param) && !nextUrl.searchParams.has(param)) {
      nextUrl.searchParams.set(param, currentParams.get(param) ?? "");
    }
  });

  return nextUrl.toString();
}

export default function Home() {
  const checkoutUrl = preserveCampaignParams(CHECKOUT_URL);
  const previewBaseUrl = import.meta.env.BASE_URL;

  const heroHighlights = [
    "PDF digital com curadoria gastronômica de Gramado e Canela",
    "Consulta simples no celular durante a viagem",
    "Compra e entrega pela Hotmart",
    "Preço único de R$ 59",
  ];

  const guideBenefits = [
    "Curadoria organizada por ocasião e momento da viagem",
    "Restaurantes, cafés, brunch, fondue, chocolaterias e mais",
    "Material pensado para abrir rápido no celular",
    "Acesso em PDF logo depois da compra",
  ];

  const previewPages = [
    {
      src: `${previewBaseUrl}previews/01-capa-proposta.svg`,
      caption: "Capa real do guia",
      alt: "Capa do PDF Meu Guia Gramado",
    },
    {
      src: `${previewBaseUrl}previews/02-como-usar.svg`,
      caption: "Como consultar durante a viagem",
      alt: "Página real do guia explicando como usar o PDF",
    },
    {
      src: `${previewBaseUrl}previews/03-indice-por-momento.svg`,
      caption: "Sumário por momento e ocasião",
      alt: "Índice do guia com categorias e momentos da viagem",
    },
    {
      src: `${previewBaseUrl}previews/04-jantar-a-dois.svg`,
      caption: "Categoria: jantar a dois",
      alt: "Página interna do guia com categoria jantar a dois",
    },
    {
      src: `${previewBaseUrl}previews/07-cafes-brunch.svg`,
      caption: "Página interna: cafés e brunch",
      alt: "Página interna do guia com seleção de cafés e brunch",
    },
  ];

  const categories = [
    "Temáticos",
    "Jantar a dois",
    "Família",
    "Fondue",
    "Italiano",
    "Carnes e parrilla",
    "Cafés e brunch",
    "Confeitarias e sobremesas",
    "Chocolaterias",
    "Bares e noite",
  ];

  const faqItems = [
    {
      question: "O guia traz uma lista de restaurantes?",
      answer:
        "Ele vai além de uma lista solta: organiza restaurantes e categorias por ocasião para reduzir a triagem e acelerar a escolha durante a viagem.",
    },
    {
      question: "Por que pagar se eu posso pesquisar sozinho?",
      answer:
        "Você pode pesquisar tudo sozinho. O guia existe para encurtar esse caminho e reunir a curadoria em um material único, mais rápido de consultar no celular.",
    },
    {
      question: "Inclui opções em Canela?",
      answer: "Sim. O conteúdo considera opções de Gramado e Canela.",
    },
    {
      question: "Funciona no celular?",
      answer:
        "Sim. O produto é um PDF digital pensado para leitura e consulta rápida no celular.",
    },
    {
      question: "Como eu recebo o guia?",
      answer:
        "A compra é feita pela Hotmart e o acesso ao PDF acontece pelo fluxo da plataforma, logo após a confirmação do pagamento.",
    },
    {
      question: "A compra tem garantia?",
      answer:
        "Sim. A compra acontece com garantia pela Hotmart. O prazo e as condições aparecem no checkout antes de finalizar.",
    },
    {
      question: "Existe atualização?",
      answer:
        "A versão atual deste material é Maio/2026. Restaurantes podem alterar horários, preços, cardápios e funcionamento ao longo do tempo.",
    },
    {
      question: "E se eu tiver problema no acesso?",
      answer:
        "Como a entrega acontece pela Hotmart, problemas de acesso e recuperação costumam ser tratados pelo fluxo da plataforma e pelos canais informados após a compra.",
    },
  ];

  const scrollToPreview = () => {
    document.getElementById("preview")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-28 md:pb-0">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028452923/9hutLAtmWv7Yir9gpNqXxH/hero-gramado-Mu8zaSwvR8zhudTY77fo59.webp')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/88 to-background/55" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/75">
              <span className="rounded-full border border-border bg-white/80 px-3 py-2">
                PDF digital
              </span>
              <span className="rounded-full border border-border bg-white/80 px-3 py-2">
                Gramado e Canela
              </span>
              <span className="rounded-full border border-border bg-white/80 px-3 py-2">
                Curadoria gastronômica
              </span>
              <span className="rounded-full border border-border bg-white/80 px-3 py-2">
                {VERSION_LABEL}
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Escolha onde comer em Gramado e Canela sem abrir dezenas de abas
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/88 font-serif md:text-xl">
              Um guia gastronômico digital em PDF, com curadoria organizada por
              ocasião, para consultar no celular e decidir com mais rapidez
              entre restaurantes, cafés, brunch, fondue e chocolaterias em
              Gramado e Canela.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-border/50 bg-white/78 px-4 py-3 backdrop-blur-sm"
                >
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-sm text-foreground/90 md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/60 bg-white/82 p-5 shadow-sm backdrop-blur-sm md:max-w-2xl">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground/65">
                    Preço atual
                  </p>
                  <p className="mt-1 text-4xl font-bold text-accent">R$ 59</p>
                  <p className="mt-2 text-sm text-foreground/70 font-serif">
                    Compra e entrega pela Hotmart. A garantia aparece no
                    checkout, com prazo e condições informados pela plataforma.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-background px-3 py-2 text-sm text-foreground/75">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span>Compra com garantia pela Hotmart</span>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="h-auto min-h-12 flex-1 bg-accent px-6 py-4 text-base font-semibold text-white hover:bg-accent/90"
                >
                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    Comprar o guia por R$ 59
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToPreview}
                  className="h-auto min-h-12 flex-1 border-2 border-accent bg-white px-6 py-4 text-base font-semibold text-accent hover:bg-accent/5"
                >
                  Ver por dentro antes de comprar
                </Button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-foreground/72 font-serif">
              <span className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4 text-accent" />
                Entrega digital em PDF
              </span>
              <span className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-accent" />
                Consulta no celular
              </span>
              <span className="inline-flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-accent" />
                Checkout Hotmart
              </span>
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-foreground/70">
              <ChevronDown className="h-4 w-4 animate-bounce" />
              <span>Role para ver o que tem dentro e como o guia ajuda</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground md:text-5xl">
              Você poderia pesquisar tudo sozinho. O guia existe para encurtar
              esse caminho.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-foreground/80 font-serif">
              Google, Instagram, TikTok, mapas e listas ajudam. O problema é
              que, na prática, a triagem acaba ficando espalhada em muitas abas,
              muitos links e pouca clareza na hora de decidir onde ir.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-foreground/80 font-serif">
              O Meu Guia Gramado organiza a curadoria por ocasião e momento da
              viagem para reduzir esse tempo de triagem. Em vez de reiniciar a
              busca em cada refeição, você abre o PDF e vai direto para a
              categoria que faz sentido agora.
            </p>

            <div className="mt-8 rounded-2xl border border-border/60 bg-background p-6">
              <h3 className="text-xl font-semibold text-foreground">
                Antes de ir, confirme as informações operacionais
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/75 font-serif">
                Horários, reservas, cardápios, preços e funcionamento podem
                mudar. Antes de sair, confirme sempre essas informações nos
                canais oficiais de cada estabelecimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-accent/25 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                O que você recebe
              </span>
              <h2 className="mt-5 text-3xl font-bold text-foreground md:text-5xl">
                Um PDF gastronômico para consultar durante a viagem
              </h2>

              <div className="mt-8 space-y-4">
                {guideBenefits.map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                    <p className="text-base leading-relaxed text-foreground/80 font-serif">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-border/60 bg-white p-6">
                <div className="flex items-start gap-3">
                  <MapPinned className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-foreground/75 font-serif">
                    {VERSION_LABEL}. Restaurantes podem alterar horários,
                    preços, cardápios e funcionamento ao longo do tempo.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-white p-5 shadow-sm">
              <div className="rounded-2xl border border-border/50 bg-background p-4">
                <img
                  src={`${previewBaseUrl}previews/02-como-usar.svg`}
                  alt="Página real do guia explicando como usar o PDF no dia da viagem"
                  className="mx-auto w-full max-w-[360px] object-contain"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/72 font-serif">
                Exemplo real de página do guia, mostrando como o material foi
                pensado para consulta rápida durante a viagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="preview" className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center rounded-full border border-accent/25 bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Ver por dentro antes de comprar
              </span>
              <h2 className="mt-5 text-3xl font-bold text-foreground md:text-5xl">
                Veja páginas reais do guia antes de comprar
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80 font-serif">
                Capa, modo de uso, sumário por momento e páginas internas reais
                do PDF para você entender o formato antes de ir ao checkout.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {previewPages.map((item) => (
                <figure
                  key={item.src}
                  className="overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm"
                >
                  <div className="aspect-[9/13] overflow-hidden bg-white p-3">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <figcaption className="border-t border-border/50 bg-white px-4 py-4">
                    <p className="text-sm font-semibold text-foreground">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground md:text-5xl">
              Curadoria organizada por ocasião
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed text-foreground/80 font-serif">
              Em vez de uma lista única sem contexto, o guia foi desenhado para
              ajudar você a filtrar pelo momento da viagem.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {categories.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border/50 bg-white px-4 py-4"
                >
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-base font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground md:text-5xl">
              Mais prático que pesquisar tudo de novo a cada refeição
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                "Menos tempo comparando links, perfis e listas genéricas",
                "Mais clareza para escolher entre Gramado e Canela",
                "Consulta simples no celular ao longo da viagem",
                "Curadoria organizada por momento, não por excesso de links",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border/60 bg-background p-5"
                >
                  <p className="text-base leading-relaxed text-foreground/80 font-serif">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/60 bg-background p-6">
              <p className="text-base leading-relaxed text-foreground/80 font-serif">
                O guia não substitui sua confirmação final com o
                estabelecimento. Ele reduz o trabalho de triagem e organiza a
                escolha. A confirmação de horários, reservas, cardápios e
                funcionamento continua sendo melhor nos canais oficiais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-foreground md:text-5xl">
              Perguntas frequentes
            </h2>

            <Accordion
              type="single"
              collapsible
              className="mt-10 rounded-2xl border border-border/60 bg-white px-5 md:px-8"
            >
              {faqItems.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-foreground/75 font-serif">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="checkout" className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl rounded-[20px] border border-border/60 bg-background p-6 text-center shadow-sm md:p-10">
            <span className="inline-flex items-center rounded-full border border-accent/25 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Checkout Hotmart
            </span>

            <h2 className="mt-6 text-3xl font-bold text-foreground md:text-5xl">
              Se a ideia é decidir onde comer com menos triagem, o guia foi
              feito para isso
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-foreground/80 font-serif">
              Produto digital em PDF para Gramado e Canela, com curadoria
              gastronômica organizada para abrir no celular e consultar ao
              longo da viagem.
            </p>

            <p className="mt-8 text-4xl font-bold text-accent">R$ 59</p>

            <div className="mt-4 space-y-2 text-sm text-foreground/72 font-serif">
              <p>{VERSION_LABEL}</p>
              <p>
                Compra com garantia pela Hotmart. O prazo e as condições
                aparecem no checkout.
              </p>
              <p>
                Restaurantes podem alterar horários, preços, cardápios e
                funcionamento.
              </p>
            </div>

            <Button
              size="lg"
              asChild
              className="mt-8 h-auto min-h-12 bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent/90"
            >
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Comprar agora pela Hotmart
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground py-12 text-white">
        <div className="container mx-auto px-4 text-center md:px-8">
          <p className="text-sm text-white/72 font-serif">
            Meu Guia Gramado. Produto digital em PDF para consulta gastronômica
            em Gramado e Canela.
          </p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-white/96 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/55">
              PDF digital
            </p>
            <p className="text-sm font-semibold text-foreground">
              Meu Guia Gramado e Canela
            </p>
            <p className="text-sm text-accent">R$ 59</p>
          </div>

          <Button
            asChild
            className="h-auto min-h-11 shrink-0 bg-accent px-4 py-3 text-sm font-semibold text-white hover:bg-accent/90"
          >
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              Comprar o guia por R$ 59
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
