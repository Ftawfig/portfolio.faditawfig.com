import React from 'react';
import Hero from '../components/hero';
import { Container, Button } from 'react-bootstrap';
import Head from 'next/head';
import { FaGithub } from "react-icons/fa";
import { useSession, signOut, signIn } from 'next-auth/react';
import Link from 'next/link';

export default function Contact() {
    const { data: session } = useSession();

    console.log(session);

    return (
        <>
            <Head>
                <title key="title">Login | portfolio.faditawfig.com</title>
                <meta name="description" content="Contact Fadi Tawfig" />
            </Head>
            <Hero props={{ title: "Login" }}>
                Login to access the admin panel.
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

                        <div>
                            {session ?
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 10
                                    }}
                                >
                                    <p>Logged in as {session?.account.email}</p>

                                    <Button onClick={() => signOut()} variant="outline-secondary">
                                        Logout
                                    </Button>
                                    <Link href="/adminPanel">Go to admin panel</Link>
                                </div>
                                :
                                <div>
                                    <Button onClick={() => signIn('github')} variant="outline-secondary">
                                        <FaGithub size={22} /> Login with Github
                                    </Button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}