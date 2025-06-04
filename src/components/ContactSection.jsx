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

        <div className="gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {" "}
              Mes Coordonnées
            </h3>

            <div className="space-y-6 flex flex-col items-center">
              <div className="flex items-start space-x-4">
                <div className="text-center">
                  <div className="p-6 rounded-full bg-primary/10 w-95 h-20 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Mail className="h-6 w-6 text-primary"/>
                      <h4 className="font-medium"><b>Email</b></h4>
                    </div>
                    <a
                      href="mailto:darbellay.tao@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      darbellay.tao@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-center">
                  <div className="p-6 rounded-full bg-primary/10 w-95 h-20 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Phone className="h-6 w-6 text-primary"/>
                      <h4 className="font-medium"><b>Téléphone</b></h4>
                    </div>
                    <a
                      href="tel:+33641352278"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +33 6 41 35 22 78
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-center">
                  <div className="p-6 rounded-full bg-primary/10 w-95 h-20 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <MapPin className="h-6 w-6 text-primary"/>
                      <h4 className="font-medium"><b>Adresse</b></h4>
                    </div>
                    <p className="text-muted-foreground">Laneuveville-devant-Nancy, 54410, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center"> D'autres liens</h4>
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
        </div>
      </div>
    </section>
  );
};
