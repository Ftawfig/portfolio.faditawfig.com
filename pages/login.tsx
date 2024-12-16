import React from 'react';
import Hero from '../components/hero';
import { Container } from 'react-bootstrap';
import Head from 'next/head';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
    return (
        <>
            <Head>
                <title key="title">Contact | portfolio.faditawfig.com</title>
                <meta name="description" content="Contact Fadi Tawfig" />
            </Head>
            <Hero props={{ title: "Contact" }}>
                Feel free to get in touch via email, or visit <a href="https://faditawfig.com">faditawfig.com</a> for more information on consulting and services.
            </Hero>
            <Container className="main">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: 30,
                        marginTop: 30,
                        flexWrap: 'wrap',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'baseline',
                            gap: 10,
                            fontSize: 20
                        }}
                    >
                        <MdOutlineEmail size={22} />
                        <p><a href="mailto:faditawfig@gmail.com" target="_blank">faditawfig@gmail.com</a></p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'baseline',
                            gap: 10,
                            fontSize: 20
                        }}
                    >
                        <FaGithub size={22} />
                        <p><a href="https://github.com/Ftawfig" target="_blank">Ftawfig</a></p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'baseline',
                            gap: 10,
                            fontSize: 20
                        }}
                    >
                        <FaLinkedin size={22} />
                        <p><a href="https://www.linkedin.com/in/fadi-tawfig/" target="_blank">Fadi Tawfig</a></p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'baseline',
                            gap: 10,
                            fontSize: 20
                        }}
                    >
                        <FaXTwitter size={22} />
                        <p><a href="https://x.com/FadiTawfig" target="_blank">@FadiTawfig</a></p>
                    </div>
                </div>
            </Container>
        </>
    )
}