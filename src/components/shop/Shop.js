import React from "react";

const Shop = () => {
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
          <ul>
            {products?.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;
