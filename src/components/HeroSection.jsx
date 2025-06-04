import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Bonjour, je m'appelle</span>
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ta'o
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Darbellay
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Je suis à présent en deuxième année d'études en Informatique à Epitech Nancy.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Je suis à la recherche d'un stage à mi-temps les jeudis et vendredis
            du 18 septembre 2025 au 28 février 2026.
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
              La semaine 45 et 46 sont banalisées à cause d'un rappel scolaire.
            </p>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Je suis également à la recherche d'un stage à plein temps d'une
            durée de 4 à 5 mois, commençant le premier avril 2026.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Voir Mes Projets
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Faites défiler vers le bas </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
