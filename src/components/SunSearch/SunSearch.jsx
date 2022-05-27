import React, { useState } from 'react';



export default function SunSearch({sunriseApiData, sunsetApiData}){
    const [sunriseButtonText, setSunriseButtonText] = useState('Sunrise Time for My Location');
    const [sunsetButtonText, setSunsetButtonText] = useState('Sunset Time for My Location');


    function handleSunriseClick() {
      setSunriseButtonText('Sunrise:  ' + sunriseApiData.sunriseTime + ' AM');
    }

    function handleSunsetClick() {
      setSunsetButtonText('Sunset:  ' + sunsetApiData.sunsetTime + ' PM');
    }
  
    return (
      <div className='button-div'>
        <button className='button' onClick={handleSunriseClick}>{sunriseButtonText}</button>
        <button className='button' onClick={handleSunsetClick}>{sunsetButtonText}</button>
      </div>
    );
  }