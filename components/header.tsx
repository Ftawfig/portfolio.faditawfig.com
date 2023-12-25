import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import React, { use } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Header() {
    const [theme, setTheme] = useState("dark");

    const router = useRouter();

    const handleClick = () => { 
        toggleTheme(theme, setTheme);
        document.documentElement.setAttribute('data-bs-theme', theme)
    }

    return (
        <>
            <Head>
                <title>portfolio.faditawfig.com</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header >
                <Navbar expand="md"  className="navbar-main">
                    <Container>
                        <Navbar.Brand href="#home">portfolio.faditawfig.com</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Nav.Link href="/projects">Projects</Nav.Link>
                                <Nav.Link href="/resume">Resume</Nav.Link>
                                <Nav.Link href="https://faditawfig.com">Consulting</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Button 
                            onClick={ handleClick }
                            variant={"outline" + (theme === 'dark' ? '-dark' : '-light')}
                        >
                            <MdDarkMode/>
                        </Button>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

function toggleTheme(theme, setTheme) {
    console.log(theme);

    var curTheme = localStorage.getItem('theme');

    console.log(curTheme);
    
    if (curTheme === 'light') {
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
    } else {
        localStorage.setItem('theme', 'light');
        setTheme('light');
    }}

function getDefaultTheme() {
    // detect system theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {    
        return 'light';
    }
}