require("react-bootstrap");

import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
        return (
                <Layout>
                        <SessionProvider session={pageProps.session}>
                                <Component {...pageProps} />
                        </SessionProvider>
                </Layout>
        );
}