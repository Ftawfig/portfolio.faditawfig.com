import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import Hero from '../components/hero';
import { Entry } from '../components/entry/entry';
import EntryList from '../components/entry/entryList';
import Button from 'react-bootstrap/Button';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Head from 'next/head';
import Spinner from 'react-bootstrap/Spinner';

export default function Projects() {
    const [parent] = useAutoAnimate();

    //2 Tags used for filtering the project list 
    const [tags, setTags] = useState(["Web", "Data Engineering", "Game-dev"]);

    // The currently selected tag. When set to null all tags will be displayed. 
    const [selectedTag, setSelectedTag] = useState(null);

    const { data, isLoading, error } = useQuery('projects', async () => {
        const res = await fetch('/api/projects');
        return res.json();
    });

    if (error) return <p>Error: {String(error)}</p>;

    const projects = data?.projects;

    console.log(projects);

    // if the tag to be selected is the same as the currently selected tag, set the selected tag to null
    // otherwise, set the selected tag to the newly selected tag
    const selectTag = (tag) => {
        if (selectedTag === tag) {
            setSelectedTag(null);
        } else {
            setSelectedTag(tag);
        }
    };

    return (
        <>
            <Head>
                <title key="title">Fadi Tawfig's Portfolio | portfolio.fadtawfig.com</title>
                <meta name="description" content="Fadi Tawfig's online resume & portfolio." />
            </Head>
            <Hero props={{ title: "Projects" }}>
                Click on a project for more details.
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
                        <Container className="tags">
                            <h5>Filter by category: </h5>
                            {
                                // display the list of available tags
                                tags.map((tag, i) => {
                                    return <Button key={i} variant="outline-secondary" className={selectedTag === tag ? 'tag selected' : 'tag unSelected'} onClick={() => selectTag(tag)}>{tag}</Button>;
                                })
                            }
                        </Container>
                        <EntryList props={{ entries: projects, selectedTag: selectedTag, entryListType: "project" }} />
                    </>
                }

            </Container>
        </>
    )
}