import { useState } from "react";
import { useRef } from "react";

const Gallery = () => {
  // Define the special prominent image separately
  const prominentImage = { id: 9, src: "/fixabout3.webp", alt: "" };

  // Define the rest of the images in the gallery grid
  const galleryImages = [
    { id: 1, src: "/fix1.webp", alt: " " },
    { id: 2, src: "/galler5.jpeg", alt: "" },
    { id: 3, src: "/galler3.jpeg", alt: "" },
    {
      id: 4,
      src: "galler7.jpeg",
      alt: "",
    },
    { id: 5, src: "/fixabout1.webp", alt: " " },
    { id: 6, src: "/galler1.jpeg", alt: "" },
    { id: 7, src: "/fixabout2.webp", alt: "" },
    { id: 8, src: "/galler4.jpeg", alt: "" },
    { id: 10, src: "/galler2.jpeg", alt: "" },
    { id: 11, src: "/fix2.webp", alt: "" },
    { id: 12, src: "/galler6.jpeg", alt: "" },
  ];

  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    src: string;
    alt: string;
  } | null>(null);

  const prominentImageRef = useRef(null);

  const handleImageClick = (image: {
    id: number;
    src: string;
    alt: string;
  }) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our state-of-the-art dental clinic, our dedicated
            team, and the happy smiles we've helped create.
          </p>
        </div>

        {/* Prominent Animated Image */}
        <div className="flex justify-center pt-12 mb-12" ref={prominentImageRef}>
          <img
            src={prominentImage.src}
            alt={prominentImage.alt}
            className="w-72 h-72 object-contain rounded-full shadow-xl cursor-pointer animate-bounce animate-spin-slow"
          />
        </div>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay text */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                <span className="text-white text-sm font-medium text-center">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-4xl font-bold z-50 hover:rotate-90 transition-transform"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
