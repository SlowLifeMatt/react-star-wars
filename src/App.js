import React, { useState, useEffect } from "react";
import StarshipCard from "./components/StarshipCard";
import spaceautoplay from"../src/video.mp4"
import './App.css';

function App() {

  const [shipModel, setShipModel] = useState(null)
  
  

  useEffect(() => {
    const shipURL =`https://swapi.dev/api/starships/`;
    const makeApiCall = async() => {
      const res= await fetch(shipURL);
      const json = await res.json();
      setShipModel(json)
      console.log(json)
    };
    makeApiCall();

  }, []);

  // const shipArray = shipModel.results
  // console.log(shipArray)

  const shipNames = shipModel?.results.map((ele, index) => {
  
    return (
      <div>
<StarshipCard 
key={index}
{...ele}
/>
      </div>
    )
  })  

  return (
<div className="head">
<video autoPlay loop muted>
<source src={spaceautoplay} type = "video/mp4"/>
</video>
<h1 className="title">Star Wars Starships</h1>


    <div className="App">


{shipNames}
    </div>
    </div>
  );
}

export default App;
