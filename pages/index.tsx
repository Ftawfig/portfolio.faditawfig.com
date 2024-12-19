import { Container, ListGroup } from 'react-bootstrap';
import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import Head from 'next/head';
import { useState, useEffect } from "react";
import { title } from 'process';
import next from 'next';


export default function Page() {
    const titles = ["Analytics engineer", "Web developer", "Hobbyist game-dev"];
    const [titleIndex, setTitleIndex] = useState(1);
    const [animationClass, setAnimationClass] = useState("");

    const switchInterval = 2000;

    useEffect(() => {
        const interval = setInterval(() => {
            // First trigger animation
            setAnimationClass("animated-text slide-up");
            console.log("Animating titles");

            // After animation completes, update indexes and reset animation class
            setTimeout(() => {
                console.log("Switching titles");
                setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
                setAnimationClass("");
            }, 500); // Match this with CSS transition duration

        }, switchInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Head>
                <title key="title">Fadi Tawfig's Portfolio & Online Resume | portfolio.fadtawfig.com</title>
                <meta name="description" content="Fadi Tawfig's Portfolio" />
            </Head>
            <Container className="hero">
                <div className="hero-content">
                    <h1>
                        <span style={{ textDecoration: "overline" }}>portfolio</span>.
                        <span style={{ textDecoration: "underline" }}>faditawfig</span>.com
                    </h1>
                    <div
                        className='main-page-text'
                        style={{ display: "flex", flexDirection: "row", gap: 3 }}
                    >
                        <p>Online resume & portfolio of Fadi Tawfig: </p>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginBottom: 0,
                                // set opacity at top and bottom to 0 to hide the text
                                overflow: "hidden",
                                height: 40,
                                backgroundColor: "black",
                                paddingLeft: 10,
                                paddingRight: 10,
                                alignContent: "center",
                                justifyContent: "center",
                                border: "3px solid var(--bs-warning-border-subtle)",
                                borderLeft: "none",
                                borderTop: "none",
                                width: 260,
                                minWidth: 260,
                                borderRadius: 2
                            }}
                        >
                            {
                                <>
                                    <p
                                        key={0}
                                        className={animationClass}
                                        style={{
                                            margin: 0,
                                            fontWeight: "bold",
                                            color: "white",
                                            textAlign: "center"
                                        }}
                                    >
                                        {titles[titleIndex - 1 < 0 ? titles.length - 1 : titleIndex - 1]}
                                    </p>
                                    <p
                                        key={1}
                                        className={animationClass}
                                        style={{
                                            margin: 0,
                                            fontWeight: "bold",
                                            color: "white",
                                            textAlign: "center"

                                        }}
                                    >
                                        {titles[titleIndex]}
                                    </p>
                                    <p
                                        key={2}
                                        className={animationClass}
                                        style={{
                                            margin: 0,
                                            fontWeight: "bold",
                                            color: "white",
                                            textAlign: "center"
                                        }}
                                    >
                                        {titles[titleIndex + 1 >= titles.length ? 0 : titleIndex + 1]}
                                    </p>
                                </>
                            }

                        </div>
                    </div>
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