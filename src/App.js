import { useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import Sepet from './Sepet';
import Detaydasepet from './Detaydasepet';
import Siparisozet from './Siparisozet';
import bilkur from './resimler/bilkur2.jpg';
import ger from './resimler/ger.jpg';

function App() {
  const [resim1, setResim] = useState('');
  const [sepres, setSepres] = useState("");
  const [number, setNumber] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Resim tıklama işlevi
  const detayagit = (resimUrl) => {
    setResim(resimUrl);
    navigate('/detail');
  };

  const numal = (al) => {
    setNumber(al);
  };

  const Detaydasepetegit = (resimal) => {
    console.log('DetaySepet verisi al:', resimal);
    setSepres(resimal);
  };

  const sepeteEkle = (item) => {
    console.log('Adding item to cart:', item); // Debugging
    setCartItems((prevItems) => [...prevItems, item]);
    navigate('/sepet');
  };

  // Initial shoe data
  const data = {
    shoes: [
      {
        src: bilkur,
        alt: 'Bilkur',
        price: '799,99 TL',
        title: '1',
        subtitle: '@johnsmith',
        description: 'Lorem ',
        gender: "2",
        size: "40",
        stock: 3,
      },
      {
        src: bilkur,
        alt: 'Bilkur',
        price: '799,99 TL',
        title: '1',
        subtitle: '@johnsmith',
        description: 'Lorem ',
        gender: "2",
        size: "41",
        stock: 4,
      },
      {
        src: bilkur,
        alt: 'Bilkur',
        price: '799,99 TL',
        title: '1',
        subtitle: '@johnsmith',
        description: 'Lorem ',
        gender: "2",
        size: "42",
        stock: 3,
      },
      {
        src: bilkur,
        alt: 'Bilkur',
        price: '799,99 TL',
        title: '1',
        subtitle: '@johnsmith',
        description: 'Lorem ',
        gender: "2",
        size: "43",
        stock: 4,
      },
      {
        src: bilkur,
        alt: 'Bilkur',
        price: '799,99 TL',
        title: '1',
        subtitle: '@johnsmith',
        description: 'Lorem ',
        gender: "2",
        size: "44",
        stock: 3,
      },
      {
        src: bilkur,
        alt: 'Bilkur',
        price: '799,99 TL',
        title: '1',
        subtitle: '@johnsmith',
        description: 'Lorem ',
        gender: "2",
        size: "45",
        stock: 4,
      },
      {
        src: ger,
        alt: 'Bilkur Again',
        price: '799,99 TL',
        title: 'Jane Doe',
        subtitle: '@janedoe',
        description: 'Lorem Ipsum',
        gender: "1",
        size: "36",
        stock: 4,
      },
      {
        src: ger,
        alt: 'Bilkur Again',
        price: '799,99 TL',
        title: 'Jane Doe',
        subtitle: '@janedoe',
        description: 'Lorem Ipsum',
        gender: "1",
        size: "37",
        stock: 4,
      },
      {
        src: ger,
        alt: 'Bilkur Again',
        price: '799,99 TL',
        title: 'Jane Doe',
        subtitle: '@janedoe',
        description: 'Lorem Ipsum',
        gender: "1",
        size: "38",
        stock: 4,
      },
      {
        src: ger,
        alt: 'Bilkur Again',
        price: '799,99 TL',
        title: 'Jane Doe',
        subtitle: '@janedoe',
        description: 'Lorem Ipsum',
        gender: "1",
        size: "39",
        stock: 4,
      },
      {
        src: ger,
        alt: 'Bilkur Again',
        price: '799,99 TL',
        title: 'Jane Doe',
        subtitle: '@janedoe',
        description: 'Lorem Ipsum',
        gender: "1",
        size: "40",
        stock: 4,
      },
    ],
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home resim={detayagit} veriyiat={data.shoes}  />} />
        <Route path="/sepet" element={
          <div className='sepetodeme'>
            <div><Sepet items={cartItems} /></div>
            <div className='sipaozet'> <Siparisozet /></div>
          </div>
        } />
        <Route
          path="/detail"
          element={
            <div className="detail-container">
              <div className="detail-content">
                <Detail resim={resim1} verial={Detaydasepetegit} degeral={numal} sepeteEkle={sepeteEkle} veriat={data.shoes} />
              </div>
              <div className="sepet-container">
                <Detaydasepet res={sepres} />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
