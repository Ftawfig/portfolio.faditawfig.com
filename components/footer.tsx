import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container className="footer fixed-bottom">
            <Row>
            <Col xs="6"><p>Built by Fadi Tawfig using Next.js</p></Col>
            <Col xs="6"><p>View this project on <a href="https://github.com/ftawfig">GitHub</a></p></Col>
            </Row>
        </Container>
    )
}