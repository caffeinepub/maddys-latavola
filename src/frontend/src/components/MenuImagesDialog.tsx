import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ImageIcon, X } from 'lucide-react';
import { menuImages } from '@/content/menuImages';

export function MenuImagesDialog() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="lg" className="gap-2">
            <ImageIcon className="h-5 w-5" />
            View Original Menu
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>Original Menu Images</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[70vh] pr-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image.src)}
                  className="relative group overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 px-4 py-2 rounded-md">
                      Click to enlarge
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex items-center justify-center p-4">
              <img
                src={selectedImage}
                alt="Menu enlarged view"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
