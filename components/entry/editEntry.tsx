import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import CopyButton from '../copyButton';
import dynamic from 'next/dynamic';
import { GoCheck, GoTrash } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import { EntryProps } from './entry';

const MarkdownEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export function EditEntry({ props, children, toggleEditMode }: { props: EntryProps, children: React.ReactNode, toggleEditMode: () => void }) {
    const [editorText, setEditorText] = useState(children as string);

    const handleSubmit = async (e) => {
        //e.preventDefault();
        const userId = 1;
        const entryTitle = e.target.entryTitle.value;
        const entryCategory = e.target.entryCategory.value;
        const entryText = editorText;
        const entryType = props.entryType;
        const entryKey = props.entryKey;
        const entryStartDate = e.target.entryStartDate?.value;
        const entryEndDate = e.target.entryEndDate?.value;
        console.log(entryType, entryText);

        console.log("Submitting form: ", entryTitle, entryCategory, entryText, entryType, entryKey, entryStartDate, entryEndDate);

        try {
            await fetch('/api/editEntry', {
                body: JSON.stringify({
                    userId,
                    entryTitle,
                    entryCategory,
                    entryKey,
                    entryType,
                    entryText,
                    entryStartDate,
                    entryEndDate
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(() => toggleEditMode());
        } catch (error) {
            console.error('An unexpected error happened:', error);
        }
    }

    return (
        <Col className="project-details" xs={10} sm={11}>
            <Form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignContent: "center",
                            gap: 10,
                        }}>
                        <Button
                            variant="outline-secondary"
                            title="Save changes"
                            type="submit"
                            className="edit-button"
                            style={{ border: "none" }}
                        >
                            <GoCheck />
                        </Button>
                        <Button
                            variant="outline-secondary"
                            onClick={toggleEditMode}
                            title="Discard changes"
                            className="edit-button"
                            style={{ border: "none" }}
                        >
                            <IoMdClose />
                        </Button>
                        <Button
                            variant="outline-secondary"
                            onClick={toggleEditMode}
                            title="Delete entry"
                            className="edit-button"
                            style={{ border: "none" }}
                        >
                            <GoTrash />
                        </Button>
                    </div>
                </div>

                <Form.Group controlId="entryTitle"                    >
                    <Form.Control size="lg" type="text" defaultValue={props.title} />
                </Form.Group>

                <Row>
                    <Col xs={6}>
                        <Form.Group controlId="entryCategory" style={{ marginTop: 15, marginBottom: 15 }}>
                            <Form.Control size="sm" type="text" defaultValue={props.category} />
                        </Form.Group>
                    </Col>

                    <Col xs={6}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                alignContent: "center",
                                gap: 10
                            }}>
                            {props.entryType !== "project" &&
                                <>
                                    <Form.Group controlId="entryStartDate" style={{ marginTop: 15, marginBottom: 15 }}>
                                        <Form.Control size="sm" type="text" defaultValue={props.entryStartDate} />
                                    </Form.Group>
                                    <span> - </span>
                                    <Form.Group controlId="entryEndDate" style={{ marginTop: 15, marginBottom: 15 }}>
                                        <Form.Control size="sm" type="text" defaultValue={props.entryEndDate} />
                                    </Form.Group>
                                </>
                            }
                        </div>
                    </Col>
                </Row>
                <MarkdownEditor preview="edit" height={300} onChange={setEditorText} value={editorText as string} />
            </Form>

        </Col>
    )
}