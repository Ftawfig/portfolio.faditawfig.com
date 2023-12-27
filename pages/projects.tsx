import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

function Project({ props, children }) {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }

    return (
        <button onClick={ handleClick } className="project-button" >
            <ListGroup.Item className="project-card">
                <Row>
                    <Col xs={10} sm={11}>
                        <h3 className="project-title">{props.title}</h3>
                        <h4 className="project-category">{props.category}</h4>
                        { expanded && <p className="project-description">{children}</p> }
                    </Col>
                    <Col xs={2} sm={1}>
                         {expanded ? <IoIosArrowDown /> : <IoIosArrowForward />  }
                    </Col>
                </Row>
            </ListGroup.Item>
        </button>
    )
}

export default function Projects() {
    return (
        <>
        <Container className="hero">
            <div className="hero-content">
                <h1>Projects</h1>
                <p>Click on a project for more details.</p>
            </div>
        </Container>
        <Container className="main">
            <ListGroup>
            <Project props={{title: "Minecraft server management app", category: "Web"}}>Hosted on Google Compute Engine.</Project>
            <Project props={{title: "Tic-tac-toe", category: "Web"}}>A tic-tac-toe game built with React.</Project>
            <Project props={{title: "Google Search Console / BigQuery ETL", category: "Data Engineering"}}>ETL pipeline to load Google Search Console data into BigQuery.</Project>
            <Project props={{title: "Unity game-dev", category: "Game-Dev"}}>A 3D game built with Unity.</Project>
            <Project props={{title: "Consulting website", category: "Web"}}>
                A consulting website built with WordPress. 
                <br/><br/>Link: <Link href="https://faditawfig.com">faditawfig.com</Link>
            </Project>
            </ListGroup>
        </Container>
    </>
    )
}