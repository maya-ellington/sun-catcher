import React from "react";


export default function SunTokens(sunApiData){

    const handleButton = () => {
        console.log('handleButton');
        handle(sunApiData._id)
      }

    return (
    <button onClick={handleButton}>When can I catch the next sunrise/sunset?</button>
    )
}