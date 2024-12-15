import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [mask, setMask] = useState(null);

  // Handle Image Upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setImage(file);
    
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Uploaded Image:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // Handle Mask Upload
  const handleMaskUpload = async (event) => {
    const file = event.target.files[0];
    setMask(file);

    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/upload-mask/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Uploaded Mask:', response.data);
    } catch (error) {
      console.error('Error uploading mask:', error);
    }
  };

  return (
    <div>
      <h2>Image Inpainting Widget</h2>

      <div>
        <input type="file" onChange={handleImageUpload} />
        <p>{image ? `Selected Image: ${image.name}` : 'No image selected'}</p>
      </div>

      <div>
        <input type="file" onChange={handleMaskUpload} />
        <p>{mask ? `Selected Mask: ${mask.name}` : 'No mask selected'}</p>
      </div>
    </div>
  );
};

export default ImageUpload;
