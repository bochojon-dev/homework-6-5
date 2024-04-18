import React, { memo } from "react";
import "../banner/Banner.css";
const Banner = ({ title, items, image, name, description, button }) => {
  return (
    <div className="banner">
      <div className="container">
        <div
          style={{
            background: `url(${image}) no-repeat center/cover`,
            height: "800px",
          }}
          className="banner_components"
        >
          <h2>{title}</h2>
          <ul>
            {items?.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
          <h3>{name}</h3>
          <p>{description}</p>
          <button>{button}</button>
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);
