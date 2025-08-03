import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary"> Qui</span> Suis-je?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Développeur Logiciel Passionné et Créateur de Solutions
            </h3>

            <p className="text-muted-foreground">
              J'effectue mon Master 2 en Informatique à Epitech Nancy, avec une
              spécialisation dans le développement logiciel. Je suis spécialisé
              dans le développement de logiciels réactifs, accessibles et efficaces
              en employant des technologies contemporaines.
            </p>

            <p className="text-muted-foreground">
              Je suis passionné par l'élaboration de solutions raffinées à des
              problématiquescomplexes et je m'efforce d'apprendre en continu les
              technologies et méthodes les plus récentes pour demeurer à
              l'avant-garde du secteur dynamique du développement logiciel.
              Mon but est de demeurer en perpétuel changement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Me Contacter
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
                  <h4 className="font-semibold text-lg"> Développement Logiciel</h4>
                  <p className="text-muted-foreground">
                    Création d'applications dynamiques utilisant des technologies actuelles.
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
                  <h4 className="font-semibold text-lg">Design UI/UX</h4>
                  <p className="text-muted-foreground">
                    Conception des interfaces utilisateurs intuitives et des
                    expériences utilisateurs sans accroc.
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
                    Mener des projets de l'idéation à la mise en œuvre en
                    utilisant des méthodologies agiles.
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
