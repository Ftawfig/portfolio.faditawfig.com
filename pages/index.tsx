import { Container, ListGroup } from 'react-bootstrap';
import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import Head from 'next/head';

export default function Page() {
    return (
        <>
            <Head>
                <title key="title">Fadi Tawfig's Portfolio & Online Resume | portfolio.fadtaw</title>
                <meta name="description" content="Fadi Tawfig's Portfolio" />
            </Head>
            <Container className="hero">
                <div className="hero-content">
                    <h1>portfolio.faditawfig.com</h1>
                    <p>Online resume and portfolio for Fadi Tawfig: Toronto-based analytics engineer. Web dev. Hobbyist game-dev.</p>
                </div>
            </Container>
            <Container className="main" style={{ marginTop: 30 }}>
                <ListGroup>
                    <Link href="/projects"><ListGroup.Item>Projects <IoIosArrowForward /></ListGroup.Item></Link>
                    <Link href="/resume"><ListGroup.Item>Resume <IoIosArrowForward /></ListGroup.Item></Link>
                    <Link href="/contact"><ListGroup.Item>Contact <IoIosArrowForward /></ListGroup.Item></Link>
                    <Link href="https://faditawfig.com"><ListGroup.Item>Consulting <IoIosArrowForward /></ListGroup.Item></Link>
                </ListGroup>
            </Container>
        </>
    )
}