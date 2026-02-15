import { SiInstagram, SiFacebook } from 'react-icons/si';
import { Phone, MapPin, Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'maddys-latavola';

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Maddys Latavola</h3>
            <p className="text-primary-foreground/80 mb-4">
              Authentic Italian cuisine and delightful desserts in the heart of Mussoorie
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Location
            </h4>
            <p className="text-primary-foreground/80">
              Mussoorie, Uttarakhand<br />
              India
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href="tel:+919997818704"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                +91 9997818704
              </a>
              <a
                href="tel:+919756327900"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                +91 9756327900
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm text-center md:text-left">
            © {currentYear} Maddys Latavola. All rights reserved.
          </p>
          <p className="text-primary-foreground/70 text-sm flex items-center gap-1">
            Built with <Heart className="h-4 w-4 fill-current" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
