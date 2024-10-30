import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import Hero from '../components/hero';
import Project from '../components/project';
import Button from 'react-bootstrap/Button';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Head from 'next/head';

export default function Projects() {
    const [parent, enableAnimations] = useAutoAnimate();

    // Tags used for filtering the project list 
    const [tags, setTags] = useState(["Web", "Data Engineering", "Game-dev"]);

    // The currently selected tag. When set to null all tags will be displayed. 
    const [selectedTag, setSelectedTag] = useState(null);

    // List of project components to display: each project has a "cat" used for filtering 
    const [projects, setProjects] = useState([
        {
            cat: "Web", prj:
                <Project props={{ id: "mcserver", title: "Minecraft server management app", category: "Web" }}>
                    Hosted on Google Compute Engine.
                </Project>
        }
        , {
            cat: "Web", prj:
                <Project props={{ id: "tictactoe", title: "Tic-tac-toe", category: "Web" }}>
                    A tic-tac-toe game built with React.
                </Project>
        }
        , {
            cat: "Data Engineering", prj:
                <Project props={{ id: "gcs_bq", title: "Google Search Console / BigQuery ETL", category: "Data Engineering" }}>
                    <p>ETL pipeline to load Google Search Console data into BigQuery.</p>
                </Project>
        }
        , {
            cat: "Game-dev", prj:
                <Project props={{ id: "unity", title: "Unity game-dev", category: "Game-dev" }}>
                    A 3D game built with Unity.
                </Project>
        }
        , {
            cat: "Web", prj:
                <Project props={{ id: "website", title: "Consulting website", category: "Web" }}>
                    <p>WordPress website to highlight consulting/freelance services. Hosted on Google Compute Engine.</p>

                    <br />Link: <Link href="https://faditawfig.com">faditawfig.com</Link>
                </Project>
        }
        , {
            cat: "Web", prj: <Project props={{ id: "portfolio", title: "this.portfolio", category: "Web" }}>
                <p>Portfolio website to highlight my personal projects and resume. Built with React / Next.js. Hosted using Google Cloud Run.</p>

                <h5>Features:</h5>
                <ul>
                    <li>Global dark-mode toggle with system-default detection</li>
                    <li>Filterable projects and resume pages</li>
                    <li>Copy a shortcut link to specific project/resume items</li>
                </ul>
                <br />Link: <Link href="/">portfolio.faditawfig.com</Link>
            </Project>
        }
    ]);

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
                <title key="title">Fadi Tawfig's Online Portfolio | portfolio.fadtawfig.com</title>
                <meta name="description" content="Fadi Tawfig's online Resume" />
            </Head>
            <Hero props={{ title: "Projects" }}>
                Click on a project for more details.
            </Hero>
            <Container className="main">
                <Container className="tags">
                    <h5>Filter by category: </h5>
                    {
                        // display the list of available tags
                        // TODO - add a class to highlight the currently selected tag
                        tags.map((tag, i) => {
                            return <> <Button variant="outline-secondary" className={selectedTag === tag ? 'tag selected' : 'tag unSelected'} onClick={() => selectTag(tag)}>{tag}</Button> </>;
                        })
                    }
                </Container>
                <ListGroup ref={parent}>
                    {
                        // filter the project list: only return each project if the selected tag is null or the selected tag matches the projects tag
                        projects.map((project, i) => {
                            if (selectedTag === null || selectedTag === project.cat) {
                                return project.prj;
                            }
                        })
                    }
                </ListGroup>
            </Container>
        </>
    )
}