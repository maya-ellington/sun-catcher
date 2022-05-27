import React, { useState } from 'react';



export default function SunSearch({sunApiData}){
    const [sunriseButtonText, setSunriseButtonText] = useState('Sunrise Time for My Location');
    const [sunsetButtonText, setSunsetButtonText] = useState('Sunset Time for My Location');


    function handleSunriseClick() {
      setSunriseButtonText('Sunrise:  ' + sunApiData.sunriseTime + ' AM');
    }

    function handleSunsetClick() {
      setSunsetButtonText('Sunset:  ' + sunApiData.sunsetTime + ' PM');
    }
  
    return (
      <div>
        <button onClick={handleSunriseClick}>{sunriseButtonText}</button>
        <button onClick={handleSunsetClick}>{sunsetButtonText}</button>
      </div>
    );
  }