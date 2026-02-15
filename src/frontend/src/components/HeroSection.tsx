import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-background to-muted overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 pt-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary mb-6">
            Maddys Latavola
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Authentic Italian Cuisine & Delightful Desserts
          </p>
          <div className="flex items-center justify-center gap-2 text-foreground/70 mb-8">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Mussoorie, Uttarakhand, India</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('menu')}
              className="text-lg px-8 shadow-warm"
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="bg-card p-6 rounded-lg shadow-warm">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-2">Italian Specialties</h3>
              <p className="text-muted-foreground">Authentic pasta, pizza, and more</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-warm">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-2">Artisan Desserts</h3>
              <p className="text-muted-foreground">Handcrafted sweet delights</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-warm">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-2">Cozy Ambiance</h3>
              <p className="text-muted-foreground">Perfect mountain retreat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
