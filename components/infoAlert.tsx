'use client';

import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function InfoAlert() {
    const [parent, enableAnimations] = useAutoAnimate();

    return (
        <Container
            className="alert-space"
            ref={parent}
        >
            <Alert
                variant="info"
                className="text-center"
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
        </Container>
    )
}
