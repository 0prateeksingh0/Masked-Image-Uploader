import React, { useState, useRef } from 'react';
import './App.css';
import CanvasDraw from 'react-canvas-draw';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [brushSize, setBrushSize] = useState(5);
  const canvasRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleExport = () => {
    if (canvasRef.current) {
      const maskDataUrl = canvasRef.current.getDataURL("image/png");
      const link = document.createElement('a');
      link.href = maskDataUrl;
      link.download = 'mask.png';
      link.click();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Inpainting Widget</h1>

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {imageSrc && (
          <div>
            {/* Canvas for drawing the mask */}
            <CanvasDraw
              ref={canvasRef}
              imgSrc={imageSrc}
              brushColor="white"
              brushRadius={brushSize} 
              canvasWidth={500}
              canvasHeight={500}
            />
            <div>
              <button onClick={() => setBrushSize(brushSize + 1)}>Increase Brush Size</button>
              <button onClick={() => setBrushSize(brushSize - 1)}>Decrease Brush Size</button>
            </div>
            {/* Export Mask Button */}
            <button onClick={handleExport}>Save</button>

            {/* Display the original image */}
            <div>
              <h3>Original Image</h3>
              <img src={imageSrc} alt="Original" width="300" />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
