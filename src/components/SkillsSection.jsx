import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Dev
  { name: "C", category: "langages" },
  { name: "C++", category: "langages" },
  { name: "Python", category: "langages" },
  { name: "Haskell", category: "langages" },
  { name: "Assembly x86_64", category: "langages" },
  { name: "Java", category: "langages" },
  { name: "C#", category: "langages" },

  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },

  // Tools
  { name: "Git/GitHub", category: "outils" },
  { name: "VS Code", category: "outils" },
  { name: "Docker", category: "outils" },
];

const categories = ["global", "langages", "frontend", "backend", "outils"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("global");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "global" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary"> Compétences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
