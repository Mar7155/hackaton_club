import { Badge } from "@/components/ui/badge";
import { Code, Users, Zap, Trophy } from "lucide-react";
import AnimatedText from "@/components/cursor-animation";
import AnimatedLines from "@/components/animated-lines";
import ASCIIText from "@/components/ascii-text";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans bg-gradient-to-b from-transparent via-green-400/10 to-blue-500/10 border-t">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
              linear-gradient(rgba(52, 168, 90, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(52, 168, 90, 0.4) 1px, transparent 1px)
            `,
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 40%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 40%)",
        }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10 py-2">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Code className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-foreground">
                HackatonClub
              </h1>
              <p className="text-sm text-muted-foreground">
                Comunidad de Programadores
              </p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="border-transparent bg-secondary hover:bg-secondary/80 bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg hover:opacity-90"
          >
            <Users className="mr-1 h-4 w-4 " />
            500+ Miembros
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        <div className="container py-12 px-12">
          <div className="grid items-start lg:grid-cols-2">
            {/* Left Column: Information */}
            <div className="space-y-8">
              <div>
                <AnimatedLines className="perspective-container">
                  <h2 className="mb-4 font-serif text-4xl font-bold text-foreground [text-shadow:var(--text-shadow-lg)]">
                    Únete a Nuestra Comunidad de Programadores
                  </h2>
                </AnimatedLines>
                <AnimatedText>
                  <div className="text-block">
                    <p>
                      Conecta con desarrolladores de todos los niveles,
                      participa en proyectos colaborativos y acelera tu
                      crecimiento profesional en un ambiente de aprendizaje
                      continuo.
                    </p>
                  </div>
                </AnimatedText>
              </div>

              {/* Benefits Section */}
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif font-semibold text-foreground [text-shadow:var(--text-shadow-sm)]">
                      Proyectos Colaborativos
                    </h3>
                    <p className="text-muted-foreground">
                      Trabaja en proyectos reales con otros desarrolladores.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-trophy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-accent-trophy" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif font-semibold text-foreground [text-shadow:var(--text-shadow-sm)]">
                      Mentorías y Workshops
                    </h3>
                    <p className="text-muted-foreground">
                      Aprende de expertos y mejora tus habilidades.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif font-semibold text-foreground [text-shadow:var(--text-shadow-sm)]">
                      Networking
                    </h3>
                    <p className="text-muted-foreground">
                      Conecta con profesionales de la industria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Information */}
            <div className="relative h-96 w-full rounded-lg lg:h-full flex flex-col items-center justify-center gap-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <ASCIIText
                  text="</hack>"
                  enableWaves={true}
                  asciiFontSize={10}
                />
              </div>

              {/* Button Container */}
              <div className="relative mt-96 flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg hover:opacity-90">
                  Iniciar Sesión
                </Button>
                <Button className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg hover:opacity-90">
                  Regístrate Aquí
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-sidebar-border mt-16 z-1">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2025 HackatonClub. Construyendo el futuro de la programación
            juntos.
          </p>
        </div>
      </footer>
    </div>
  );
}
