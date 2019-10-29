import React from "react";

// Comoponent:

// const Travel = ({ destination, country, distance, photo }) => (
//   <figure>
//     {<img src={photo} alt={''} height="50%" border="2 px"/>}
//     <figcaption>
//       <h2>{destination}</h2>
//       <h2>{country}</h2>
//       <h2>{distance}</h2>
//     </figcaption>
//   </figure>
// );

// Component that contain an array:

const travels = [
  {
    photo:"https://www.kyero.com/guides/wp-content/uploads/2018/12/Tenerife-beautiful-landscape-1800x1200.jpg",
    destination:'Tenerife',
    country:'Spain',
    distance:'5.239 Km'
  },
  {
    photo:"https://content.tui.co.uk/adamtui/2016_10/1_13/7ecfce0b-cd33-406d-8003-a69200dfbfaf/TUS_MTE_0803WebOriginalCompressed.jpg?i10c=img.resize(width:1080);img.crop(width:1080%2Cheight:608)",
    destination:'Toscana',
    country:'Italy',
    distance:'1.781 Km'
  },
  {
    photo:"https://imgix.bustle.com/uploads/shutterstock/2019/9/19/a49124d9-5f62-47a5-b5ec-8dd3a3066b30-shutterstock-1420728554.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
    destination:'Paris',
    country:'France',
    distance:'2.324 Km'
  },
  {
    photo:"https://www.holland.com/upload_mm/d/0/7/69550_fullimage_fietsen-amsterdam_1360x.jpg",
    destination:'Amsterdam',
    country:'Netherlands',
    distance:'2.235 Km'
  },
  {
    photo:"https://www.princesstravel.ro/wp-content/uploads/2019/05/venetia-960x546.jpeg",
    destination:'Venice',
    country:'Italy',
    distance:'1.541 Km'
  },

  {
    photo:"https://media.timeout.com/images/105186767/image.jpg",
    destination:'Milano',
    country:'Italy',
    distance:'1.793 Km'
  }
  
];
const Travel = travels.map((oneTravel, i) => {
  return (
      <div class='blockImage'> 
        <img class='img' key={i} src={oneTravel.photo}  height="200px" width="300px" border="4px"/>         
        <div key={i}>{oneTravel.destination}</div>
        <div key={i}>{oneTravel.country} </div>
        <div key={i}>{oneTravel.distance} </div>
       </div>
  )}
)
 
const travelceva = () => (
  <div>
    {Travel}
  </div>
)


export default travelceva;