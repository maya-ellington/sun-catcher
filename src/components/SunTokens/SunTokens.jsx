import React from "react";
import { Card, Icon, Image, Group } from "semantic-ui-react";



export default function SunTokens( {sunTokens }){
    return (
    <Card.Group background='orange'>
        <Card fluid color='orange' header={ 'My Sun Tokens: ' + '🌞'.repeat(sunTokens)} />
    </Card.Group>
    )
}