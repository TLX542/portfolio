import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Mon site personnel (React + Tailwind + Supabase).",
    image: "/projects/portfolio.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    URL: "https://github.com/TLX542/portfolio",
  },
  {
    id: 2,
    title: "Contrôle de géométries",
    description:
      "Extension QGIS : détection et signalement d'erreurs sur des vecteurs.",
    image: "/projects/qgis.png",
    tags: ["Python", "API QGIS", "Orienté Objet"],
    URL: "https://github.com/TLX542/portage-OGRE-QGIS",
  },
  {
    id: 3,
    title: "Moteur 3D (Ray Tracing)",
    description:
      "Moteur simple avec calcul des rayons et ombres sur objets 3D.",
    image: "/projects/raytracer.png",
    tags: ["C++", "Orienté Objet", "SFML", "Ray Tracing"],
    URL: "https://github.com/TLX542/modeleur-3D",
  },
  {
    id: 4,
    title: "Mini Arcade",
    description:
      "Plateforme avec 2 jeux et 3 bibliothèques graphiques. Changement à chaud.",
    image: "/projects/arcade.png",
    tags: ["C++", "Orienté Objet", "Chargement Dynamique"],
    URL: "https://github.com/TLX542/mini-arcade",
  },
  {
    id: 5,
    title: "Compresseur d'images",
    description:
      "Réduction de taille via moyenne de couleurs sur blocs.",
    image: "/projects/compressor.png",
    tags: ["Haskell", "Programmation fonctionnelle"],
    URL: "https://github.com/TLX542/image-compressor",
  },
  {
    id: 6,
    title: "Automate cellulaire",
    description:
      "Automate 1D en exécution continue.",
    image: "/projects/WolframRule30.png",
    tags: ["Haskell", "Programmation fonctionnelle"],
    URL: "https://github.com/TLX542/cellular-automation",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Projets</span> en vedette
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Quelques projets personnels ou académiques. Code lisible, fonctionnalités
          ciblées, pas de sur-architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-3 text-center flex flex-col h-full">
                <div className="flex flex-wrap gap-1 mb-1 justify-center">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-xs leading-tight">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-start items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`Ouvrir le dépôt GitHub du projet ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TLX542"
          >
            Mon profil GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};