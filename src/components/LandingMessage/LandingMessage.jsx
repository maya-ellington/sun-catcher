import React from 'react';
import { Container } from 'semantic-ui-react'


export default function LandingMessage(props){
    return (
        <Container text className='landing'>
            <h3>Welcome to SunCatcher! A space where you can share photos of beautiful sunrises and sunsets. Collect Sun Tokens for each event you catch.</h3>
        </Container>
    )
}