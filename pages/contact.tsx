import React from 'react';
import Hero from '../components/hero';
import { Container } from 'react-bootstrap';

export default function Contact() {
    return (
        <>
            <Hero props={{title: "Contact"}}>
                Feel free to get in touch via email, or visit <a href="https://faditawfig.com">faditawfig.com</a> for more information on consulting and services. 
            </Hero>
            <Container className="main"> 
                <p><b>Email: </b> <a href="faditawfig@gmail.com">faditawfig@gmail.com</a></p>
            </Container>
        </>
    )
}