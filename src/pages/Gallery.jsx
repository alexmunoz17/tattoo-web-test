import { useState } from 'react';
import { t } from '../utils/i18n';
import { FiFilter, FiX, FiHeart, FiMessageCircle } from 'react-icons/fi';

// Import your images here
import finelineImage from '../assets/images/fineline.jpeg';
// import image2 from '../assets/images/image2.jpg';
// import image3 from '../assets/images/image3.jpg';

// Gallery data - Add your images here
const galleryImages = [
  { id: 1, style: 'minimalist', color: 'bw', placement: 'arm', artist: 'zero', thumbnail: finelineImage },
  { id: 2, style: 'realism', color: 'color', placement: 'leg', artist: 'zero', thumbnail: 'https://via.placeholder.com/800' },
  { id: 3, style: 'traditional', color: 'color', placement: 'back', artist: 'zero', thumbnail: 'https://via.placeholder.com/800' },
  { id: 4, style: 'minimalist', color: 'bw', placement: 'arm', artist: 'zero', thumbnail: 'https://via.placeholder.com/800' },
  { id: 5, style: 'realism', color: 'bw', placement: 'chest', artist: 'zero', thumbnail: 'https://via.placeholder.com/800' },
  { id: 6, style: 'traditional', color: 'color', placement: 'leg', artist: 'zero', thumbnail: 'https://via.placeholder.com/800' },
];

function Gallery({ lang }) {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.style === filter || img.color === filter || img.placement === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t(lang, 'gallery.title')}</h1>
        <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-8">
          Entdecke unsere neuesten Arbeiten und lass dich inspirieren
        </p>
        
        {/* Filter button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-md border border-white/20"
        >
          <FiFilter />
          Filter
        </button>

        {/* Filters */}
        {showFilters && (
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {['all', 'minimalist', 'realism', 'traditional'].map(type => (
              <button
                key={type}
                onClick={() => {
                  setFilter(type);
                  if (type !== 'all') setShowFilters(false);
                }}
                className={`px-6 py-2 rounded-lg transition-colors capitalize ${
                  filter === type 
                    ? 'bg-primary text-white' 
                    : 'bg-white/10 text-text-secondary hover:bg-white/20'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Gallery grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="group relative aspect-square bg-white/5 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.thumbnail}
                alt={`Tattoo ${image.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-semibold mb-1">{image.style} • {image.placement}</p>
                <button className="text-sm text-primary font-medium hover:underline">
                  {t(lang, 'gallery.askAbout')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FiX size={32} />
          </button>
          <img
            src={selectedImage.thumbnail}
            alt={`Tattoo ${selectedImage.id}`}
            className="max-w-full max-h-[90vh] rounded-lg"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
