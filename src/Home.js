import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';




const Home = ({veriyiat}) => {
  const [shoeList, setShoeList] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    // Load local JSON data and filter by gender
    const filteredShoes = veriyiat;
    let tempList = [];
    filteredShoes.forEach((shoe) => {
      let flag = true;
      for (let i = 0; i < tempList.length; i++) {
        if (shoe.title === tempList[i].title) {
          flag = false;
        }
      }
      if (flag) {
        tempList.push(shoe);
      }
    });
    setShoeList(tempList);


  }, []);

  const detayagit = (image) => {
    navigate('/detail', { state: { image } });
  };

  return (
    <div className="columns is-centered is-variable is-2">
      {shoeList.map((image, index) => (
        <div className="column is-one-third" key={index}>
          <div className="card is-small" style={{ maxWidth: '300px', margin: '0 auto' }}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  onClick={() => detayagit(image)} // Resmin tüm bilgilerini burada belirtiyoruz
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{image.title}</p>
                  <p className="subtitle is-6">{image.subtitle}</p>
                </div>
              </div>
              <div className="content">
                {image.description}
                <br />
                <button className="button is-small" style={{ width: '100%', marginTop: '10px' }} onClick={() => detayagit(image)}>
                  {image.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
