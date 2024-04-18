import React from "react";
import "../shop/Shop.css";
import cook from "../../assets/images/cook.avif";
import buds from "../../assets/images/buds.avif";
import frame from "../../assets/images/frame.avif";
import fridge from "../../assets/images/fridge.avif";
import phone from "../../assets/images/phone.avif";
import tv from "../../assets/images/tv.avif";
const Shop = () => {
  let shop = [
    {
      id: 1,
      image: cook,
      name: "Bespoce cp. ft. Smart Slide-In Gas Range with Smart Oven Camera",
      save: "Save $600",
      from: "From $1499",
      btn: "Pre-order now",
    },
    {
      id: 2,
      image: buds,
      name: "Galaxy Buds2 Pro",
      save: "Save up to $40",
      from: "From $189.99 before eligible trade-in",
      btn: "Buy now",
    },
    {
      id: 3,
      image: frame,
      name: '55" The Frame',
      save: "Save $500",
      from: "From $99.999",
      btn: "Buy now",
    },
    {
      id: 4,
      image: fridge,
      name: "23 cu .ft. Bescope 4-Door Flex Refrigerator with All Family Hub",
      save: "Save $1200",
      from: "From $3899",
      btn: "Pre-order now",
    },
    {
      id: 5,
      image: phone,
      name: "Galaxy S24 Ultra, 1TB Unlocked",
      save: "Save up to $150",
      from: "From $1509.99 before eligible trade-in",
      btn: "Buy now",
    },
    {
      id: 6,
      image: tv,
      name: '49" OdysseyOLED G95SCDQHDNeo Quantum Processor Pro',
      save: "Save $700",
      from: "From $1009.99",
      btn: "Buy now",
    },
  ];
  let products = [
    "For You",
    "Mobile & Computing",
    "TV & Audio",
    "Home Appliance",
    "Samsung Live",
    "For Bussines",
  ];
  return (
    <div className="shop">
      <div className="container">
        <div className="shop_contents">
          <h2>Shop all latest offers and innovations</h2>
          <ul className="shop_items">
            {products?.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
          <div className="shop_cards">
            {shop?.map((el) => (
              <div key={el.id} className="shop_card">
                <img src={el.image} alt="product" />
                <h3>{el.name}</h3>
                <div className="shop_hide">
                  <h4>{el.save}</h4>
                  <p>{el.from}</p>
                </div>
                <button className="shop_btn">{el.btn}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
