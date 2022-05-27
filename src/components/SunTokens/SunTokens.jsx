import React from "react";
import { Card, Icon, Image, Group } from "semantic-ui-react";



export default function SunTokens( {sunTokens, user }){
    return (
    <Card.Group background='orange'>
        <Card fluid color='orange' header={ `${user?.username}'s Sun Tokens: ` + '🌞'.repeat(sunTokens)} />
    </Card.Group>
    )
}