import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Qui</span> suis-je ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Développeur logiciel (M2 Epitech Nancy)
            </h3>

            <p className="text-muted-foreground">
              Je conçois des outils simples, lisibles et robustes. Je privilégie une
              approche pragmatique : comprendre le besoin, livrer une base propre,
              itérer.
            </p>

            <p className="text-muted-foreground">
              J'aime résoudre des problématiques complexes sans surcouche inutile.
              Je reste attentif aux évolutions techniques pour garder des pratiques
              actuelles tout en évitant le superflu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Me contacter
              </a>

              <a
                href="/CV Ta'o DARBELLAY.pdf"
                download="CV_Tao_DARBELLAY.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Développement logiciel
                  </h4>
                  <p className="text-muted-foreground">
                    Applications réactives, maintenables. Attention portée aux
                    performances et à la lisibilité du code.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI / UX</h4>
                  <p className="text-muted-foreground">
                    Interfaces sobres. Priorité à l'usage réel plutôt qu'à
                    l'esthétique gratuite.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Gestion de projet</h4>
                  <p className="text-muted-foreground">
                    Organisation simple, priorisation, feedback régulier. Avancer
                    par incréments plutôt que viser un "gros bloc" final.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
