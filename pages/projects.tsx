import Link from 'next/link';
import { Container, ListGroup } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";

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
            <Link href="/projects"><ListGroup.Item>Minecraft server management app<IoIosArrowForward /></ListGroup.Item></Link>
            <Link href="/resume"><ListGroup.Item>Tic-tac-toe <IoIosArrowForward /></ListGroup.Item></Link>
            <Link href="/contact"><ListGroup.Item>Google Search Console / BigQuery ETL <IoIosArrowForward /></ListGroup.Item></Link>
            <Link href="/contact"><ListGroup.Item>Unity game-dev <IoIosArrowForward /></ListGroup.Item></Link>
            <Link href="https://faditawfig.com"><ListGroup.Item>Consulting website <IoIosArrowForward /></ListGroup.Item></Link>
            </ListGroup>
        </Container>
    </>
    )
}