import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

/**
 * Meu Guia Gramado - Landing Page
 * Design Philosophy: Elegância Minimalista Contemporânea
 * 
 * Paleta de cores: Bege quente (#F5F1ED), Cinza escuro (#2C2C2C), Verde floresta (#2D5016), Marrom terra (#8B7355)
 * Tipografia: Montserrat (headlines), Lora (body)
 * Estilo: Premium, limpo, organizado, com respiro visual
 */

export default function Home() {
  const handleCheckout = () => {
    // Navegar para checkout - você pode configurar a URL real do seu checkout aqui
    window.location.href = '/checkout';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028452923/9hutLAtmWv7Yir9gpNqXxH/hero-gramado-Mu8zaSwvR8zhudTY77fo59.webp')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Escolha onde comer em Gramado sem perder tempo pesquisando.
            </h1>

            <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed font-serif">
              Meu Guia Gramado reúne restaurantes, cafés e chocolaterias de Gramado e Canela em uma curadoria organizada por ocasião, com leitura simples no celular.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                onClick={handleCheckout}
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-base px-8 py-6"
              >
                Comprar agora — R$ 59
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-accent text-accent hover:bg-accent/5 font-semibold text-base px-8 py-6"
              >
                Ver como funciona
              </Button>
            </div>

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
              Gramado e Canela têm muitas opções — e justamente por isso decidir onde comer nem sempre é simples.
            </h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              Na prática, muita gente acaba abrindo Google, Instagram, avaliações e listas genéricas tentando entender o que realmente faz sentido para cada momento da viagem.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              <strong>O problema não é falta de opção.</strong>
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              <strong>O problema é excesso de opção sem filtro claro.</strong>
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed font-serif">
              E, quando chega a hora de decidir, a pergunta volta: <strong>onde vale a pena ir agora?</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Um guia criado para encurtar essa decisão.
            </h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              Meu Guia Gramado foi pensado para facilitar a escolha ao longo da viagem.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              Em vez de começar do zero a cada refeição, você consulta um material já organizado por ocasião e encontra com mais rapidez o tipo de lugar que faz sentido para aquele momento.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              <strong>A proposta não é listar tudo.</strong>
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed font-serif">
              <strong>A proposta é reunir opções de forma prática, clara e fácil de consultar no celular.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            O que você recebe
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* CTA Visual */}
            <div className="flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028452923/9hutLAtmWv7Yir9gpNqXxH/cta-visual-FfQcR5vLwK6wETqA5BuayQ.webp"
                alt="Meu Guia Gramado no celular"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>

            {/* What You Get List */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-foreground/80 font-serif">Um guia digital em PDF</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-foreground/80 font-serif">Curadoria de restaurantes, cafés e chocolaterias</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-foreground/80 font-serif">Seleção de Gramado e Canela</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-foreground/80 font-serif">Organização por ocasião de uso</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-foreground/80 font-serif">Leitura prática no celular</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-foreground/80 font-serif">Acesso imediato após a compra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Organized Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            Organizado para facilitar sua escolha
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground/80 mb-6 font-serif">
              Você não precisa passar por uma lista longa e confusa.
            </p>

            <p className="text-lg text-foreground/80 mb-12 font-serif">
              O conteúdo foi separado por tipos de experiência e momentos da viagem, como:
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
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{section}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground/80 font-serif">
              Assim, a decisão fica mais simples conforme o que faz sentido naquele momento.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            O que muda na prática
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Benefits Visual */}
            <div className="flex items-center justify-center order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028452923/9hutLAtmWv7Yir9gpNqXxH/benefits-visual-5vzCsna6XZs3YWuhrXfMj3.webp"
                alt="Benefícios do Meu Guia Gramado"
                className="w-full max-w-sm"
              />
            </div>

            {/* Benefits List */}
            <div className="space-y-4 order-1 md:order-2">
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-foreground/80 font-serif">Menos tempo pesquisando</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-foreground/80 font-serif">Menos indecisão na hora de sair</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-foreground/80 font-serif">Mais clareza conforme o momento da viagem</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-foreground/80 font-serif">Uma seleção já filtrada no celular</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <p className="text-foreground/80 font-serif">Mais facilidade para decidir entre Gramado e Canela</p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-foreground/80 font-serif">
                  Em vez de abrir várias abas e comparar opções soltas, você passa a consultar uma curadoria já organizada para facilitar a escolha.
                </p>
              </div>
            </div>
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
                    "O conteúdo foi pensado para consulta rápida.",
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
                    "Você parte de uma seleção já organizada, em vez de começar a busca do zero.",
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

      {/* For Whom Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            Para quem este guia faz sentido
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Casais em viagem para Gramado e Canela",
                description: "",
              },
              {
                title: "Famílias que querem decidir com mais facilidade",
                description: "",
              },
              {
                title: "Quem prefere curadoria a listas genéricas",
                description: "",
              },
              {
                title: "Quem quer escolher mais rápido ao longo da viagem",
                description: "",
              },
              {
                title: "Quem busca um material simples de consultar no celular",
                description: "",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-lg border border-border/50 hover:border-accent/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Mais do que uma lista de lugares
            </h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              O objetivo do Meu Guia Gramado não é reunir tudo o que existe na cidade.
            </p>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              O objetivo é ajudar você a decidir melhor.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed font-serif">
              Por isso, o guia foi construído como uma curadoria prática, pensada para reduzir dúvida e tornar a escolha mais rápida ao longo da viagem.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
            Perguntas Frequentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Isso é só uma lista de lugares?",
                answer:
                  "Não. O guia organiza os locais por ocasião de uso para facilitar sua decisão ao longo da viagem.",
              },
              {
                question: "O conteúdo inclui só Gramado?",
                answer:
                  "Não. O material inclui opções de Gramado e Canela.",
              },
              {
                question: "Preciso imprimir?",
                answer:
                  "Não. O guia foi pensado para uso no celular.",
              },
              {
                question: "É focado só em restaurante sofisticado?",
                answer:
                  "Não. O conteúdo reúne diferentes tipos de experiência, como temáticos, jantar a dois, família, cafés, fondue, chocolaterias e outras ocasiões.",
              },
              {
                question: "O que eu recebo ao comprar?",
                answer:
                  "Você recebe um arquivo digital em PDF, com acesso imediato após a compra.",
              },
              {
                question: "O guia é atualizado?",
                answer:
                  "O material foi estruturado para funcionar como uma curadoria prática. Como horários, operações e detalhes podem mudar, o ideal é sempre confirmar diretamente com o local antes de ir.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-border/50 hover:border-accent/30 transition-colors"
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
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Meu Guia Gramado
            </h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-serif">
              Guia digital em PDF com curadoria de restaurantes, cafés e chocolaterias de Gramado e Canela.
            </p>

            <p className="text-2xl font-bold text-accent mb-12">
              R$ 59
            </p>

            <Button
              size="lg"
              onClick={handleCheckout}
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-base px-8 py-6 mb-12"
            >
              Comprar agora
            </Button>

            <p className="text-lg text-foreground/80 leading-relaxed font-serif mb-6">
              Se a ideia é aproveitar melhor a viagem sem perder tempo com pesquisas soltas e escolhas confusas, o Meu Guia Gramado foi feito para isso.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed font-serif">
              Uma curadoria prática, organizada e fácil de consultar, para ajudar você a decidir onde comer com mais rapidez.
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
              Comprar agora — R$ 59
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
