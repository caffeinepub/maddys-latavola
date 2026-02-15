export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/assets/gallery/cafe-exterior.jpg",
    alt: "Maddys Latavola cafe exterior in Mussoorie",
    title: "Welcome to Maddys Latavola"
  },
  {
    src: "/assets/gallery/cafe-interior.jpg",
    alt: "Cozy interior of Maddys Latavola",
    title: "Our Cozy Interior"
  },
  {
    src: "/assets/gallery/desserts.jpg",
    alt: "Delicious Italian desserts at Maddys Latavola",
    title: "Italian Desserts"
  },
  {
    src: "/assets/gallery/coffee.jpg",
    alt: "Fresh coffee at Maddys Latavola",
    title: "Artisan Coffee"
  },
  {
    src: "/assets/gallery/pasta.jpg",
    alt: "Fresh pasta dishes",
    title: "Homemade Pasta"
  },
  {
    src: "/assets/gallery/ambiance.jpg",
    alt: "Warm ambiance at Maddys Latavola Mussoorie",
    title: "Warm & Inviting"
  }
];
