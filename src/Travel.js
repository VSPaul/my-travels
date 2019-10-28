import React from "react";

const Travel = ({ destination, country, distance, photo }) => (
  <figure>
    {<img src={photo} alt={''} height="50%" border="2 px"/>}
    <figcaption>
      <h2>{destination}</h2>
      <h2>{country}</h2>
      <h2>{distance}</h2>
    </figcaption>
  </figure>
);

export default Travel;