import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Hero from '../components/hero';



export function Project({ props, children }) {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }

    return (
        <button onClick={ handleClick } className="project-button" >
            <ListGroup.Item className="project-card">
                <Row>
                    <Col xs={10} sm={11}>
                        <h3 className="project-title">{props.title}</h3>
                        <h4 className="project-category">{props.category}</h4>
                        { expanded && <p className="project-description">{children}</p> }
                    </Col>
                    <Col xs={2} sm={1}>
                         {expanded ? <IoIosArrowDown /> : <IoIosArrowForward />  }
                    </Col>
                </Row>
            </ListGroup.Item>
        </button>
    )
}

export default function Projects() {
    // Tags used for filtering the project list
    const [tags, setTags] = useState(["Web", "Data Engineering", "Game-dev"]);
    
    // The currently selected tag. When set to null all tags will be displayed. 
    const [selectedTag, setSelectedTag] = useState(null);

    // List of project components to display: each project has a "cat" used for filtering 
    const [projects, setProjects] = useState([
        {cat : "Web", prj : 
            <Project props={{title: "Minecraft server management app", category: "Web"}}>
                Hosted on Google Compute Engine.
            </Project>
        }
        ,{cat : "Web", prj : 
            <Project props={{title: "Tic-tac-toe", category: "Web"}}>
                A tic-tac-toe game built with React.
            </Project>}
        ,{cat : "Data Engineering", prj : 
            <Project props={{title: "Google Search Console / BigQuery ETL", category: "Data Engineering"}}>
                ETL pipeline to load Google Search Console data into BigQuery.
            </Project>
        }
        ,{cat : "Game-dev", prj : 
            <Project props={{title: "Unity game-dev", category: "Game-dev"}}>
                A 3D game built with Unity.
            </Project>
        }
        ,{cat : "Web", prj : 
            <Project props={{title: "Consulting website", category: "Web"}}>
                A consulting website built with WordPress. 
                <br/><br/>Link: <Link href="https://faditawfig.com">faditawfig.com</Link>
            </Project>
        }
        ,{cat: "Web", prj: <Project props={{title: "this.portfolio", category: "Web"}}>
            Portfolio website to highlight my personal projects and resume. Built with React / Next.js. Hosted using Google Cloud Run. 

            <h5>Features:</h5>
            <ul>
                <li>Global dark-mode toggle with system-default detection</li>
                <li>FIlterable projects and resume pages</li>
            </ul>
            <br/><br/>Link: <Link href="/">portfolio.faditawfig.com</Link>
        </Project>}
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
            <Hero props={{title: "Projects"}}>
                Click on a project for more details.
            </Hero>
            <Container className="main">
                <Container className="tags">
                    <h5>Filter by category: </h5>
                    {
                        // display the list of available tags
                        // TODO - add a class to highlight the currently selected tag
                        tags.map((tag, i) => {
                            return <> <a className={ selectedTag === tag ? 'tag selected' : 'tag unSelected' } onClick={() => selectTag(tag)}><h4 className="project-category">{tag}</h4></a> </>;
                        })
                    }
                </Container>

                {/* show selected tag for testing 
                <Container className="tags">
                    <h5>Selected tag: </h5>
                        <h4 className="project-category">{selectedTag}</h4>
                </Container>
                */}
                
                <ListGroup>
                    {
                        // filter the project list: only return each project if the selected tag is null or the selected tag matches the projects tag
                        projects.map((project, i) => { 
                            if (selectedTag === null || selectedTag === project.cat)
                            {
                                return project.prj;
                            }
                        })
                    }
                </ListGroup>
            </Container>
        </>
    )
}