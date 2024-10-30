import React from 'react';
import Hero from '../components/hero';
import { Container } from 'react-bootstrap';
import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title key="title">Contact | portfolio.faditawfig.com</title>
                <meta name="description" content="Contact Fadi Tawfig" />
            </Head>
            <Hero props={{title: "Contact"}}>
                Feel free to get in touch via email, or visit <a href="https://faditawfig.com">faditawfig.com</a> for more information on consulting and services. 
            </Hero>
            <Container className="main"> 
                <p><b>Email: </b> <a href="faditawfig@gmail.com">faditawfig@gmail.com</a></p>
            </Container>
        </>
    )
}