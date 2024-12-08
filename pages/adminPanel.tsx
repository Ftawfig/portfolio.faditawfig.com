import { useState } from 'react';
import Hero from '../components/hero';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import * as commands from "@uiw/react-md-editor/commands"
import dynamic from "next/dynamic";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
);

export default function AdminPanel() {
    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedType, setSelectedType] = useState('project'); 1

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = 1;
        const entryTitle = e.target.entryTitle.value;
        const entryText = value;
        const entryType = e.target.entryType.value;
        const entryKey = e.target.entryKey.value;
        const entryStartDate = e.target.entryDate?.value;
        const entryEndDate = e.target.entryDate?.value;
        console.log(entryType, entryText);

        try {
            const res = await fetch('/api/newEntry', {
                body: JSON.stringify({ userId, entryTitle, entryKey, entryType, entryText, entryStartDate, entryEndDate }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })

            if (res.status === 200) {
                console.log('New entry added successfully');
            }
        } catch (error) {
            console.error('An unexpected error happened:', error
            )
        }

    }

    return (
        <>
            <Hero props={{ title: "Admin" }}>
                Submit a new entry or edit existing entries.
            </Hero>
            <Container
                className="main"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 25,
                }}
            >
                <h2>Projects</h2>
                <h2>Resume Entries</h2>
                <Container
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 25,
                        marginTop: 25,
                    }}
                >
                    <h2>Create new entry</h2>
                    <Form onSubmit={handleSubmit}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                gap: 10,
                                marginTop: 25,
                                marginBottom: 25,
                            }}
                        >
                            <Form.Group controlId="entryType">
                                <Form.Label><b>Entry Type</b></Form.Label>
                                <Form.Select aria-label="entryType"
                                    onChange={(e) => setSelectedType(e.target.value)}
                                >
                                    <option value="project">Project</option>
                                    <option value="resume">Resume</option>
                                    <option value="education">Education</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="entryTitle">
                                <Form.Label><b>Entry Title</b></Form.Label>
                                <Form.Control type="text" aria-label="entryTitle" />
                            </Form.Group>
                            <Form.Group controlId="entryKey">
                                <Form.Label><b>Entry Key</b></Form.Label>
                                <Form.Control type="text" aria-label="entryKey" />
                            </Form.Group>

                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                gap: 50,
                                marginBottom: 25,
                            }}
                        >
                            <Form.Group controlId="entryCategory">
                                <Form.Label>
                                    <b>
                                        {
                                            selectedType === 'project' ? 'Project Category' :
                                                selectedType === 'resume' ? 'Employer' :
                                                    'School'
                                        }
                                    </b>
                                </Form.Label>
                                <Form.Control type="text" aria-label="entryCayegory" />
                            </Form.Group>
                            {
                                (selectedType === 'resume' || selectedType === 'education') &&
                                <>
                                    <Form.Group controlId="entryDate">
                                        <Form.Label><b>Start Date</b></Form.Label>
                                        <Form.Control type="text" aria-label="entryDate" />
                                    </Form.Group>
                                    <Form.Group controlId="entryDate">
                                        <Form.Label><b>End Date</b></Form.Label>
                                        <Form.Control type="text" aria-label="entryDate" />
                                    </Form.Group>
                                </>
                            }
                        </div>
                        <Form.Group controlId="entryText">
                            <Form.Label><b>Entry Text</b></Form.Label>
                            <MDEditor
                                value={value}
                                onChange={setValue}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit Entry
                        </Button>
                    </Form>
                </Container>
            </Container>
        </>
    )
}