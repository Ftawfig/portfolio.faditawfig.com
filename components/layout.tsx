import Header from '../components/header';
import Footer from '../components/footer';
import { Container } from 'react-bootstrap';
import InfoAlert from './infoAlert';

export default function Layout({ children }) {
    return (
        <Container fluid className="page-content">
            <Header />
            <main>
                <InfoAlert />
                {children}
            </main>
            <Footer />
        </Container>
    )
}