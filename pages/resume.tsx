import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Project } from "./projects";
import Hero from '../components/hero';

export default function Resume() {
    return (
        <>
            <Hero props={{title : "Resume"}}>
                Click on an item to expand details. 
            </Hero>
            <Container className="main">
                <ListGroup>
                    <Project props={{title: "Manager, Digital Marketing Analytics", category: "TD Bank", date: "Jan 2021 - Present"}}>
                        <ul>
                            <li>Lead 3 senior analysts as part of the digital marketing analytics team.</li>
                            <li>Responsible for building and maintaining core datasets for reporting on Digital marketing performance, which emable actionable insights for performance marketers as well as key executive reports.</li>
                            <li>Winner of the 2023 League of Excellence reward, recognizing the top 3% of performers at the bank.</li>
                        </ul>
                    </Project>
                </ListGroup>
            </Container>
        </>
    )
}