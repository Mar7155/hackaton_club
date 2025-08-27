import { Users, Zap, Trophy } from "lucide-react";
import AnimatedText from "@/components/cursor-animation";
import AnimatedLines from "@/components/animated-lines";
import ASCIIText from "@/components/ascii-text";
import LoginButtons from "@/components/ui/login-buttons";

export default function Home() {
  return (
    <div className="flex flex-col bg-background font-sans bg-gradient-to-b from-transparent via-green-400/10 to-blue-500/10 border-t">
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
      {/* Main Content */}
      <main className="w-full min-h-screen flex justify-center items-center">
        <div className="container py-12 px-12">
          <div className="grid items-start lg:grid-cols-2">
            {/* Left Column: Information */}
            <div className="space-y-8">
              <div>
                <AnimatedLines className="perspective-container">
                  <h2 className="mb-4 font-serif text-4xl font-bold text-foreground [text-shadow:var(--text-shadow-lg)]">
                    Únete a la Comunidad de Programadores
                  </h2>
                </AnimatedLines>
                <AnimatedText>
                  <div className="text-block">
                    <p>
                      Conecta con desarrolladores de todos los niveles,
                      y acelera tu crecimiento profesional en un ambiente 
                      de aprendizaje continuo para participar en hackatones 
                      de todo tipo.
                    </p>
                  </div>
                </AnimatedText>
              </div>

              {/* Benefits Section */}
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 bg-accent-trophy/10 flex-shrink-0 items-center justify-center rounded-lg">
                    <Trophy className="h-6 w-6 text-accent-trophy" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif font-semibold text-foreground [text-shadow:var(--text-shadow-sm)]">
                      Hackatones Colaborativos
                    </h3>
                    <p className="text-muted-foreground">
                      Trabaja en equipo con otros desarrolladores para competir en hackatones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif font-semibold text-foreground [text-shadow:var(--text-shadow-sm)]">
                      Mentorías y Entrenamiento
                    </h3>
                    <p className="text-muted-foreground">
                      Mejora tus habilidades con ejercicios practicos y asesorias en equipo.
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
                      Conecta con más compañeros y aprende de ellos.
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
              <div className="relative mt-96 flex gap-4 justify-center items-center">
                <LoginButtons />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
