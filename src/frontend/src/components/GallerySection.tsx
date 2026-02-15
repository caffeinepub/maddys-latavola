import { Section } from './Section';
import { Card } from '@/components/ui/card';
import { galleryImages } from '@/content/gallery';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <Section id="gallery">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Gallery</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into our cozy cafe and delicious offerings
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer group shadow-warm hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-square relative overflow-hidden bg-muted">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/600x600/d4a574/ffffff?text=${encodeURIComponent(image.title || 'Gallery')}`;
                }}
              />
              {image.title && (
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-primary-foreground font-semibold p-4 w-full">{image.title}</p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedImage !== null ? galleryImages[selectedImage].title : 'Gallery Image'}
          </DialogTitle>
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/1200x800/d4a574/ffffff?text=${encodeURIComponent(galleryImages[selectedImage].title || 'Gallery')}`;
                }}
              />
              {galleryImages[selectedImage].title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <h3 className="text-primary-foreground text-xl font-semibold">
                    {galleryImages[selectedImage].title}
                  </h3>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
