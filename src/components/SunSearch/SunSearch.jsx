import React, { useState } from 'react';



export default function SunSearch({sunApiData}){
    const [sunriseButtonText, setSunriseButtonText] = useState('Sunrise Time for My Location');

    function handleSunriseClick() {
      setSunriseButtonText('Sunrise:  ' + sunApiData.sunriseTime + ' AM');
    }
  
    return (
      <div>
        <button onClick={handleSunriseClick}>{sunriseButtonText}</button>
      </div>
    );
  }