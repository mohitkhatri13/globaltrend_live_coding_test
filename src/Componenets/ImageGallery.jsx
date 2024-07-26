import React, { useState } from 'react';
import image1 from '../assets/flower1.jpeg';
import image2 from '../assets/flower2.jpeg';
import image3 from '../assets/flower3.jpeg';
import image4 from '../assets/flower4.jpeg';

const images = [image1, image2, image3, image4];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="font-bold text-2xl text-center">Image Gallery</div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer m-10" onClick={() => openModal(image)}>
            <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-auto" loading="lazy" />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="relative bg-white p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-xl font-bold" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Selected" className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
