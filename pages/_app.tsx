require("react-bootstrap");

import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'react-bootstrap';

export default function App({ Component, pageProps }: AppProps) {
        return <Component {...pageProps} />
}