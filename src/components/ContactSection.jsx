import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message envoyé!",
        description: "Merci pour votre message. Je vous répondrai au plus vite.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Me <span className="text-primary"> Contacter</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Avez-vous un projet en tête ou souhaitez collaborer ? 
        </p>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          N'hésitez pas à me contacter.
          Je suis toujours ouvert à de nouvelles opportunités.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Mes Coordonnées
            </h3>

            <div className="space-y-6 justify-start">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> <b>Email</b></h4>
                  <a
                    href="mailto:darbellay.tao@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    darbellay.tao@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> <b>Téléphone</b></h4>
                  <a
                    href="tel:+33641352278"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +33 6 41 35 22 78
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="text-left">
                  <h4 className="font-medium"> <b>Addresse</b></h4>
                  <a className="text-muted-foreground transition-colors">
                    Laneuveville-devant-Nancy, 54410, France
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> D'autres liens</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/ta-o-darbellay-9a19642a2/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/TLX542" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Envoyer Un Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Ta'o Darbellay..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="votre-email@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Votre Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Bonjour, j'aimerais parler de..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
