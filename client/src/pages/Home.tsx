import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

/**
 * Meu Guia Gramado - Landing Page
 * Copy adaptada com foco em conversão
 */

export default function Home() {
  const CHECKOUT_URL = "https://pay.hotmart.com/V105306779Q"; // TROCAR pela URL real do checkout

  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  const handleSeeInside = () => {
    document.getElementById("preview")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028452923/9hutLAtmWv7Yir9gpNqXxH/hero-gramado-Mu8zaSwvR8zhudTY77fo59.webp')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Escolha onde comer em Gramado e Canela sem perder horas pesquisando.
            </h1>

            <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed font-serif">
              Um guia digital com curadoria organizada por ocasião para você decidir
              mais rápido entre restaurantes, cafés e chocolaterias, direto do
              celular, ao longo da viagem.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10 max-w-xl">
              {[
                "Consulta prática no celular",
                "Opções de Gramado e Canela",
                "Organizado por momento da viagem",
                "Acesso imediato após a compra",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg bg-white/70 backdrop-blur-sm px-4 py-3 border border-border/40"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-foreground/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button
                size="lg"
                onClick={handleCheckout}
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-base px-8 py-6"
              >
                Quero receber o guia agora
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSeeInside}
                className="border-2 border-accent text-accent hover:bg-accent/5 font-semibold text-base px-8 py-6"
              >
                Ver por dentro do guia
              </Button>
            </div>

            <p className="text-sm text-foreground/70 mb-12 font-serif">
              Entrega digital imediata em PDF.
            </p>

            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <ChevronDown className="w-4 h-4 animate-bounce" />
              <span>Role para conhecer mais</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              O problema não é faltar opção. É perder tempo tentando descobrir qual
              delas faz sentido agora.
            </h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              Em Gramado e Canela, existem muitas opções para comer bem. E justamente
              por isso decidir nem sempre é simples.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              Na prática, muita gente faz sempre a mesma coisa: abre Google, abre
              Instagram, compara avaliações, salva lugares, vê listas genéricas e,
              mesmo assim, continua sem clareza na hora de sair.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              Quando chega o momento de decidir, a dúvida volta:
            </p>

            <p className="text-xl md:text-2xl font-semibold text-foreground mb-8">
              onde vale a pena ir agora, sem começar a pesquisa toda de novo?
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed font-serif">
              O problema não é falta de lugar bom. O problema é{" "}
              <strong>excesso de opção sem filtro claro.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              O Meu Guia Gramado foi criado para encurtar essa decisão.
            </h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              Em vez de começar a busca do zero a cada refeição, você consulta um
              material já organizado por ocasião e encontra com mais rapidez o tipo
              de lugar que combina com aquele momento da viagem.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              A proposta do guia não é jogar uma lista enorme na sua mão.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              A proposta é <strong>facilitar sua escolha</strong> com uma curadoria
              mais prática, clara e simples de consultar no celular.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed font-serif">
              Menos pesquisa solta. Menos indecisão. Mais clareza na hora de escolher.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            O que você recebe na prática
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028452923/9hutLAtmWv7Yir9gpNqXxH/cta-visual-FfQcR5vLwK6wETqA5BuayQ.webp"
                alt="Meu Guia Gramado no celular"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-4">
              {[
                "Um guia digital em PDF",
                "Curadoria de restaurantes, cafés e chocolaterias",
                "Opções de Gramado e Canela",
                "Organização por ocasião e momento da viagem",
                "Leitura simples no celular",
                "Acesso imediato após a compra",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <p className="text-foreground/80 font-serif">{item}</p>
                </div>
              ))}

              <div className="pt-4 border-t border-border/50">
                <p className="text-foreground/80 font-serif">
                  Você recebe um material pensado para consulta rápida, sem precisar
                  passar por uma sequência confusa de buscas soltas sempre que quiser
                  decidir onde comer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section id="preview" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Veja como o guia facilita a escolha
            </h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              O conteúdo foi estruturado para ser fácil de navegar no celular e
              direto ao ponto.
            </p>

            <p className="text-lg text-foreground/80 mb-12 leading-relaxed font-serif">
              Em vez de uma lista longa e cansativa, você acessa uma curadoria
              organizada para encontrar com mais rapidez o tipo de experiência que
              procura naquele momento.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                "Estrutura simples",
                "Consulta rápida",
                "Categorias fáceis de entender",
                "Melhor leitura durante a viagem",
              ].map((item) => (
                <div
                  key={item}
                  className="p-4 bg-white rounded-lg border border-border/50"
                >
                  <p className="text-foreground/80 font-serif">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-foreground/60 font-serif">
              Substitua esta área por prints reais do PDF, do sumário e de algumas
              páginas internas.
            </p>
          </div>
        </div>
      </section>

      {/* How It's Organized Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            Organizado para facilitar sua decisão
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground/80 mb-6 font-serif">
              Você não precisa passar por uma sequência solta de sugestões tentando
              adivinhar o que faz sentido para cada ocasião.
            </p>

            <p className="text-lg text-foreground/80 mb-12 font-serif">
              O guia foi organizado por tipos de experiência e momentos da viagem,
              como:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
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
              ].map((section) => (
                <div
                  key={section}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{section}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground/80 font-serif">
              Assim, a escolha fica mais simples conforme o que faz sentido naquele
              momento.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            O que muda depois da compra
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028452923/9hutLAtmWv7Yir9gpNqXxH/benefits-visual-5vzCsna6XZs3YWuhrXfMj3.webp"
                alt="Benefícios do Meu Guia Gramado"
                className="w-full max-w-sm"
              />
            </div>

            <div className="space-y-4 order-1 md:order-2">
              {[
                "Você para de começar a busca do zero toda vez que quer decidir onde comer",
                "Reduz o tempo gasto em Google, Instagram e listas genéricas",
                "Consulta uma seleção já organizada no celular",
                "Escolhe com mais clareza entre Gramado e Canela",
                "Decide com mais rapidez conforme o momento da viagem",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <p className="text-foreground/80 font-serif">{item}</p>
                </div>
              ))}

              <div className="pt-4 border-t border-border/50">
                <p className="text-foreground/80 font-serif">
                  Em vez de comparar opções soltas, você passa a consultar uma
                  curadoria já organizada para facilitar a decisão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Mais do que uma lista de lugares
            </h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              O objetivo do Meu Guia Gramado não é reunir tudo o que existe na cidade.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              O objetivo é ajudar você a decidir melhor, com menos dúvida e menos
              tempo perdido em pesquisas dispersas.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed font-serif">
              Por isso, o guia foi pensado como uma curadoria prática: para ser
              consultada de forma rápida e útil ao longo da viagem.
            </p>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            Para quem este guia faz sentido
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Casais em viagem para Gramado e Canela",
              "Famílias que querem decidir com mais facilidade",
              "Quem prefere curadoria a listas genéricas",
              "Quem quer escolher mais rápido ao longo da viagem",
              "Quem busca um material simples de consultar no celular",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-border/50 hover:border-accent/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not For Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
              Este guia não é para quem…
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                "Prefere pesquisar tudo sozinho do zero",
                "Quer apenas uma lista enorme sem critério de organização",
                "Não vê valor em curadoria",
                "Espera que um guia substitua a confirmação final com o estabelecimento",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-5 bg-background rounded-lg border border-border/50"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80 font-serif">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed font-serif text-center">
              A proposta aqui é economizar tempo e facilitar a decisão — não
              substituir o bom senso na hora de confirmar detalhes diretamente com
              cada local.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            Como usar
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Abra o guia no celular",
                  description:
                    "O conteúdo foi pensado para consulta prática durante a viagem.",
                },
                {
                  step: "2",
                  title: "Vá direto para a seção que combina com o momento",
                  description:
                    "Ex.: jantar a dois, fondue, cafés, família ou chocolaterias.",
                },
                {
                  step: "3",
                  title: "Escolha com mais clareza",
                  description:
                    "Você parte de uma curadoria já organizada, em vez de começar toda a busca do zero.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 font-serif">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            Perguntas frequentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Isso é só uma lista de lugares?",
                answer:
                  "Não. O guia organiza os locais por ocasião e momento de uso para facilitar sua decisão ao longo da viagem.",
              },
              {
                question: "O conteúdo inclui só Gramado?",
                answer:
                  "Não. O material reúne opções de Gramado e Canela.",
              },
              {
                question: "Preciso imprimir?",
                answer:
                  "Não. O guia foi pensado para uso no celular.",
              },
              {
                question: "O que eu recebo ao comprar?",
                answer:
                  "Você recebe um arquivo digital em PDF com acesso imediato após a compra.",
              },
              {
                question: "Esse guia substitui Google, Instagram e avaliações?",
                answer:
                  "Não substitui tudo, mas encurta bastante a busca porque você já parte de uma curadoria organizada.",
              },
              {
                question: "É focado só em restaurantes sofisticados?",
                answer:
                  "Não. O conteúdo reúne diferentes tipos de experiência e ocasiões, como jantar a dois, família, cafés, fondue, chocolaterias e outras categorias.",
              },
              {
                question: "Os lugares podem mudar horário ou operação?",
                answer:
                  "Sim. Por isso, o ideal é sempre confirmar diretamente com o estabelecimento antes de ir.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-lg border border-border/50 hover:border-accent/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-foreground/70 font-serif">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Se a ideia é aproveitar melhor a viagem sem perder tempo com pesquisa
              solta, este guia foi feito para isso.
            </h2>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed font-serif">
              Você recebe um material prático, organizado e fácil de consultar no
              celular para decidir onde comer com mais rapidez em Gramado e Canela.
            </p>

            <p className="text-2xl font-bold text-accent mb-4">
              Acesso imediato por R$ 59
            </p>

            <p className="text-sm text-foreground/60 mb-10 font-serif">
              Entrega digital imediata após a compra.
            </p>

            <Button
              size="lg"
              onClick={handleCheckout}
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-base px-8 py-6 mb-12"
            >
              Quero receber o Meu Guia Gramado
            </Button>

            <p className="text-lg text-foreground/80 leading-relaxed font-serif">
              Menos dúvida, menos tempo perdido, mais clareza para decidir onde comer
              durante a viagem.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleCheckout}
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-base px-8 py-6 mb-8"
            >
              Quero receber o guia agora
            </Button>
            <p className="text-sm text-white/70 font-serif">
              © 2026 Meu Guia Gramado. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
