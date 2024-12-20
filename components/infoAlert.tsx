'use client';

import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useState, useEffect } from 'react';

export default function InfoAlert() {
    const [show, setShow] = useState(false);
    const [parent, enableAnimations] = useAutoAnimate();

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 500);
    }, []);

    return (
        <Container
            className="alert-space"
            ref={parent}
        >{show &&
            <Alert
                variant="info"
                className="text-center"
                onClose={() => setShow(false)}
                dismissible
                style={{
                    padding: 0,
                    paddingTop: 12,
                    paddingBottom: 12,
                    borderRadius: 2,
                }}
            >
                Check out my latest project: <Alert.Link href="https://bluegill.world" target="_blank">bluegill.world</Alert.Link>!
            </Alert>
            }
        </Container>
    )
}
