import Header from '../components/header';
import Footer from '../components/footer';
import { Container } from 'react-bootstrap';
import InfoAlert from './infoAlert';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Layout({ children }) {
    return (
        <Container fluid className="page-content">
            <Header />
            <main>
                <InfoAlert />
                {children}
            </main>
            <Footer />
            <GoogleAnalytics gaId="G-490YGQQ5HB" />
        </Container>
    )
}