import React, { useState } from "react";

const Tour = ({ id, name, info, image, price }) => {
  return (
    <div>
      <article className="single-tour"></article>
      <img src={image} alt={image} />
    </div>
  );
};

export default Tour;
