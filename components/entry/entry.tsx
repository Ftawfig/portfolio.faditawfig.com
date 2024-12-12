import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import CopyButton from '../copyButton';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import dynamic from 'next/dynamic';
import { GoPencil, GoCheck } from "react-icons/go";
import { EditEntry } from './editEntry';

const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), { ssr: false });
const MarkdownEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

type EntryType = "project" | "resume" | "education";

export interface EntryProps {
    entryKey: string,
    entryType: EntryType,
    title: string,
    category: string,
    entryStartDate?: string,
    entryEndDate?: string,
    description: string | React.ReactNode,
    isExpanded?: boolean
    editMode?: boolean
}

export function Entry({ props, children }: { props: EntryProps, children: React.ReactNode }) {
    const [editMode, setEditMode] = useState(false);
    const [expanded, setExpanded] = useState(props.isExpanded);
    const myRef = useRef(null);
    const [parent] = useAutoAnimate();

    const handleClick = () => {
        setExpanded(!expanded);
        setEditMode(false);

        myRef.current.scrollIntoView();
    }
    const router = useRouter();

    // Get the key parameter from the URL
    const { key } = router.query;

    useEffect(() => {
        // Expand the project if the id parameter matches the project id
        if (props.entryKey && key && props.entryKey === key) {
            myRef.current.scrollIntoView();
            setExpanded(true);
        }
    }, [key]);

    useEffect(() => {
        setExpanded(props.isExpanded);
    }, [props.isExpanded]);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div className="project-button" key={props.entryKey}>
            <ListGroup.Item ref={myRef} className="project-card" >
                <Row>
                    {
                        !editMode ?
                            <Col ref={parent} className="project-details" xs={10} sm={11}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <h3 className="project-title">{props.title}</h3>
                                    {expanded &&
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() => setEditMode(true)}
                                            title="Edit entry"
                                            className="edit-button"
                                            style={{ border: "none" }}
                                        >
                                            <GoPencil />
                                        </Button>}
                                </div>
                                <Row>
                                    <Col xs={6}>
                                        <h4 className="project-category">{props.category}</h4>
                                    </Col>
                                    <Col xs={6}>
                                        {props.entryStartDate && <h4 className="project-date">{props.entryStartDate + " - " + props.entryEndDate}</h4>}
                                    </Col>
                                </Row>
                                { expanded && <MarkdownPreview source={children as string} /> }
                                { expanded && <CopyButton props={{ key: props.entryKey }} /> }
                            </Col>
                            :
                            <EditEntry props={props} toggleEditMode={toggleEditMode} >
                                { children }
                            </EditEntry>
                    }
                    <Col xs={2} sm={1} className="expand-button flex-column">
                        <button title="Expand for details" className="h-100" onClick={handleClick} >{expanded ? <IoIosArrowDown /> : <IoIosArrowForward />}</button>
                    </Col>
                </Row>
            </ListGroup.Item>
        </div>
    )

}