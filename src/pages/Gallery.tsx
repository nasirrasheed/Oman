import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dolphins playing in Muscat waters',
      category: 'Dolphin Watching'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury yacht cruising',
      category: 'Yacht Tours'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Snorkeling in crystal clear waters',
      category: 'Snorkeling'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Traditional dhow at sunset',
      category: 'Dhow Cruise'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Coastal cruise along Muscat',
      category: 'Coastal Cruise'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Underwater marine life',
      category: 'Marine Life'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Island excursion',
      category: 'Island Tours'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Sunset cruise experience',
      category: 'Sunset Cruise'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fishing trip adventure',
      category: 'Fishing Trip'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bandar Al Khairan beauty',
      category: 'Bandar Al Khairan'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dimaniyat Islands paradise',
      category: 'Dimaniyat Islands'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Semi submarine tour',
      category: 'Semi Submarine'
    }
  ];

  const categories = ['All', 'Dolphin Watching', 'Yacht Tours', 'Snorkeling', 'Dhow Cruise', 'Island Tours'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the beauty of Oman's marine adventures through our collection of stunning photographs showcasing the best moments from our tours.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <img 
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-medium">{filteredImages[selectedImage].category}</p>
                <p className="text-sm text-gray-300">{filteredImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}

        {/* Video Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Experience Our Adventures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500">Dolphin Watching Highlights</p>
            </div>
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500">Snorkeling Adventures</p>
            </div>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Follow Us on Instagram
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with our latest adventures and see more stunning photos from our guests.
          </p>
          <a 
            href="https://instagram.com/muscatyachtclub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-colors"
          >
            @muscatyachtclub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;