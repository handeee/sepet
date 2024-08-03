import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Detail = ({ veriat, sepeteEkle }) => {
  const location = useLocation();
  const { image } = location.state || {};
  //const sizes = image.stock ? Object.entries(image.stock) : [];
  const [selectedSize, setSelectedSize] = useState(null);
  const [availableSizes, setAvailableSizes] = useState([]);

  const numaradegal = (size) => {
    setSelectedSize(size); // Seçilen numarayı state'e kaydediyoruz
  };

  const handleSepeteEkle = () => {
    if (!selectedSize) {
      alert("Lütfen bir numara seçiniz.");
      return;
    }

    const item = {
      src: image.src,
      alt: image.alt,
      price: image.price,
      title: image.title,
      size: selectedSize,
      description: image.description,
    };

    sepeteEkle(item);
  };

  useEffect(() => {
    const sizes = veriat
      .filter((shoe) => shoe.title === image.title)
      .map((shoe) => shoe.size);
    setAvailableSizes(sizes);
  }, [veriat, image]);

  return (
    <div className="detail-container">
      <img src={image.src} alt={image.alt} className="detayresim" />
      <div className="detail-content">
        <div className="content">
          {image.description}
          <br />
          <p className="imgtitle">{image.title}</p>
        </div>
        <div className="size-container">
          {availableSizes.map((size, index) => (
            <button
              key={index}
              className={`size-button ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => numaradegal(size)}
            >
              {size} 
            </button>
          ))}
        </div>
        <div className="price-container">
          <button
            className="button is-small"
            style={{ width: "100%", marginTop: "10px" }}
            onClick={handleSepeteEkle}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
