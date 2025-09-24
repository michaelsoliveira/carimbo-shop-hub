import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stamps.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Carimbos
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Profissionais
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-lg mx-auto lg:mx-0">
              Qualidade superior, entrega rápida e personalização completa para suas necessidades empresariais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="shadow-elegant">
                Ver Catálogo
              </Button>
              <Button size="lg" variant="hero">
                Carimbos Personalizados
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-foreground">500+</div>
                <div className="text-primary-foreground/70">Modelos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">24h</div>
                <div className="text-primary-foreground/70">Entrega</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">10+</div>
                <div className="text-primary-foreground/70">Anos</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Carimbos profissionais" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;