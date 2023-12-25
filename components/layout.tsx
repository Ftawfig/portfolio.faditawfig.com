import Header from '../components/header';
import { Container } from 'react-bootstrap';

export default function Layout({ children }) {
    return (
        <Container fluid className="page-content">
            <Header/>
            <main >
                {children}
            </main>
        </Container>
    )
}