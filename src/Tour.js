import React, { useState } from "react";

const Tour = ({ id, name, info, image, price }) => {
  return (
    <div>
      <article className="single-tour"></article>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
        </div>
      </footer>
    </div>
  );
};

export default Tour;
