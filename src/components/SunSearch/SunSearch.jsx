import React, { useState } from 'react';



export default function SunSearch({sunriseApiData, sunsetApiData}){
    const [sunriseButtonText, setSunriseButtonText] = useState('Sunrise Time for My Location');
    const [sunsetButtonText, setSunsetButtonText] = useState('Sunset Time for My Location');


    function handleSunriseClick() {
      setSunriseButtonText('Sunrise:  ' + sunriseApiData.sunriseTime + ' AM');
    }

    function handleSunsetClick() {
      setSunsetButtonText('Sunset:  ' + (Math.abs(sunsetApiData.sunsetTime) - 1200) + ' PM');
    }
  
    return (
      <div>
        <button onClick={handleSunriseClick}>{sunriseButtonText}</button>
        <button onClick={handleSunsetClick}>{sunsetButtonText}</button>
      </div>
    );
  }