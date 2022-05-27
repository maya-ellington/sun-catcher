import React from "react";
import { Card } from "semantic-ui-react";


export default function SunTokens({ sunTokens, user }){
    return (
    <Card.Group>
        <div className='sun-tokens'>
            <Card fluid color='orange' header={ `${user?.username}'s Sun Tokens: ` + '🌞'.repeat(sunTokens)} />
        </div>
    </Card.Group>
    )
}