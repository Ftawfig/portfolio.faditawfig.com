import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { IoIosArrowForward } from "react-icons/io";

export default function Page() {
    return (
        <Layout >
            <Container className="hero">
                <div className="hero-content">
                    <h1>Fadi Tawfig's Portfolio</h1>
                    <p>Toronto-based analytics engineer & web dev & hobbyist game-dev.</p>
                </div>
            </Container>
            <Container className="main">
                <ListGroup>
                <Link href="/projects"><ListGroup.Item>Projects <IoIosArrowForward /></ListGroup.Item></Link>
                <Link href="/resume"><ListGroup.Item>Resume <IoIosArrowForward /></ListGroup.Item></Link>
                <Link href="/contact"><ListGroup.Item>Contact <IoIosArrowForward /></ListGroup.Item></Link>
                <Link href="https://faditawfig.com"><ListGroup.Item>Consulting <IoIosArrowForward /></ListGroup.Item></Link>
                </ListGroup>
            </Container>
        </Layout>
    )
}