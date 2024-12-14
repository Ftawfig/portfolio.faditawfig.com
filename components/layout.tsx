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