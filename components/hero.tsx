import { Container } from 'react-bootstrap';

// Hero section with a title and description
export default function Hero({props, children}) {
    return (
        <Container className="hero">
            <div className="hero-content">
                <h1>{props.title}</h1>
                <p>{children}</p>
            </div>
        </Container>
    )
}