import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { Row, Col, ListGroup, Button, Form } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import CopyButton from '../copyButton';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import dynamic from 'next/dynamic';
import { GoPencil, GoCheck } from "react-icons/go";
import { EditEntry } from './editEntry';
import { useSession } from 'next-auth/react';

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
    isExpanded?: boolean,
    editMode?: boolean,
}

export function Entry({ props, children }: { props: EntryProps, children: React.ReactNode }) {
    const { data: session } = useSession();
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
        setExpanded(props.isExpanded);
    }, [props.isExpanded]);

    useEffect(() => {
        // Expand the project if the id parameter matches the project id
        if (props.entryKey && key && props.entryKey === key) {
            myRef.current.scrollIntoView();
            setExpanded(true);
        }
    }, [key]);

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
                                    {expanded && session &&
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
                                        <Button
                                            variant="outline-secondary"
                                            className="entry-tag"
                                        >
                                            {props.category}
                                        </Button>
                                    </Col>
                                    <Col xs={6}>
                                        {props.entryStartDate && <h4 className="project-date">{props.entryStartDate + " - " + props.entryEndDate}</h4>}
                                    </Col>
                                </Row>
                                <div
                                    style={{ paddingLeft: 15, marginTop: 20 }}
                                >
                                    {expanded && <MarkdownPreview source={children as string} />}
                                    {expanded && <CopyButton props={{ key: props.entryKey }} />}
                                </div>
                            </Col>
                            :
                            <EditEntry props={props} toggleEditMode={toggleEditMode} >
                                {children}
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