import React from 'react';
import { useQuery } from 'react-query';
import { Container } from 'react-bootstrap';
import Hero from '../components/hero';
import EntryList from '../components/entryList';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Head from 'next/head';
import Spinner from 'react-bootstrap/Spinner';

export default function Resume() {
    const [parent] = useAutoAnimate();

    const { data, isLoading, error } = useQuery('resume', async () => {
        const res = await fetch('/api/resume');
        return res.json();
    });

    if (error) return <p>Error: {String(error)}</p>;

    const resumeEntries = data?.resumeEntries;

    // get year from start date 
    resumeEntries?.map(entry => {
        const startDate = entry.entryStartDate;
        entry.startYear = startDate?.substr(startDate.length - 4);
    })

    console.log(resumeEntries);

    return (
        <>
            <Head>
                <title key="title">Fadi Tawfig's Resume | portfolio.fadtawfig.com</title>
                <meta name="description" content="Fadi Tawfig's online resume & portfolio." />
            </Head>
            <Hero props={{ title: "Resume" }}>
                Click on an entry for more details.
            </Hero>
            <Container className="main" ref={parent}>
                {
                    isLoading ? 
                        <Container
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '50vh',
                                gap: '10px'
                            }}
                        >
                            <Spinner animation="border" role="status" />
                            <span>Loading...</span>
                        </Container> 
                        : error ? <p>Error: {String(error)}</p> :
                        <>
                            <h2 className="subheader">Work experience</h2>
                            <EntryList props={{ entries: resumeEntries.filter(e => e.entryType == 'resume'), selectedTag: null }} />
                            <h2 className="subheader">Education</h2>
                            <EntryList props={{ entries: resumeEntries.filter(e => e.entryType == 'education'), selectedTag: null }} />
                        </>
                }

            </Container>
        </>
    )
}