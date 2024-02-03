require("react-bootstrap");

import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
        return (<Layout>
                        <Component {...pageProps} />
                </Layout>);
}