import React from 'react';
import './LandingMessage.css'
import { Container, Header } from 'semantic-ui-react'


export default function LandingMessage(props){
    return (
        <Container text className='landing'>
            <h3>Welcome to SunCatcher! A space where you can collect all of your beautiful sunrise and sunset moments and collect Sun Tokens for each experience you caught.</h3>
        </Container>
    )
}