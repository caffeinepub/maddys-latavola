import { Section } from './Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <Section id="contact" background="muted">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Visit Us</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to serve you at our cafe in Mussoorie
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="shadow-warm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <MapPin className="h-6 w-6" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground mb-4">
              Mussoorie, Uttarakhand<br />
              India
            </p>
            <p className="text-muted-foreground text-sm">
              Located in the beautiful hill station of Mussoorie, the Queen of Hills
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-warm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Phone className="h-6 w-6" />
              Contact Numbers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start text-lg"
              asChild
            >
              <a href="tel:+919997818704">
                <Phone className="mr-2 h-5 w-5" />
                +91 9997818704
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-lg"
              asChild
            >
              <a href="tel:+919756327900">
                <Phone className="mr-2 h-5 w-5" />
                +91 9756327900
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <Card className="max-w-2xl mx-auto shadow-warm bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Clock className="h-6 w-6" />
              Opening Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Open Daily<br />
              Please call ahead to confirm timings
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
