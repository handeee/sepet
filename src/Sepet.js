import { useEffect, useState } from "react";

const Sepet = ({ items = [] }) => {
  // Her ürün için bir adet sayısı nesnesi oluşturuyoruz
  const [adetler, setAdetler] = useState(() => 
    items.reduce((acc,index) => ({ ...acc, [index]: 1 }), {})
  );

  // Azaltma fonksiyonu
  const azalt = (index) => {
    setAdetler(prevAdetler => ({
      ...prevAdetler,
      [index]: Math.max(1, prevAdetler[index] - 1)
    }));
  };

  // Arttırma fonksiyonu
  const arttir = (index) => {
    setAdetler(prevAdetler => ({
      ...prevAdetler,
      [index]: (prevAdetler[index] || 1) + 1
    }));
  };
  // useEffect(()=>{
  //  tutaral();
  // })
  const [fiyat,setFiyat]=useState("");
  useEffect(() =>{
    let total = 0;
    items.forEach(item => {
      //item.count = 1;
      total += parseInt((item.price));
    });
    setFiyat(total);
    },[items])
  // const fiyat=items.price;
  // const tutaral=(fyal)=>{
  //   fiyat=+fyal;
  // }
  return (
    <div className="sepet">
      {items.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="topluseper">
            <div className="sepresim">
              <img src={item.src} alt={item.alt} />
            </div>
            <div className="sepdetay">
              <p>{item.title} </p>
              {/* <p > {Number(adetler[index])*(Number(item.price))}</p> */}
              <p > {(item.price)}</p>
              <p>Size: {item.size}</p>
              <div className="ana">
                <button className="azaltart" onClick={() => azalt(index)}>-</button>
                <button>{adetler[index]||1}</button>
                <button className="azaltart" onClick={() => arttir(index)}>+</button>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))
      )}
       <div className="total">
        <h3> {fiyat}TL</h3>
      </div>
    </div>
  );
};

export default Sepet;






