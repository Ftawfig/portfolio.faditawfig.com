import Header from '../components/header';
import Footer from '../components/footer';
import { Container } from 'react-bootstrap';
import InfoAlert from './infoAlert';
import { GoogleAnalytics } from '@next/third-parties/google';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Layout({ children }) {
    const queryClient = new QueryClient();

    return (
        <Container fluid className="page-content">
            <Head>
                <link rel="icon" href="/FT_LOGO.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

            </Head>
            <Header />
            <main>
                <InfoAlert />
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </main>
            <Footer />
            <GoogleAnalytics gaId="G-490YGQQ5HB" />
        </Container>
    )
}