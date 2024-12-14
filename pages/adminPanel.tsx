import { useState } from 'react';
import { useQuery } from 'react-query';
import Hero from '../components/hero';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import * as commands from "@uiw/react-md-editor/commands"
import dynamic from "next/dynamic";
import Spinner from 'react-bootstrap/Spinner';
import EntryList from '../components/entry/entryList';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
);

function NewEntryForm() {
    const [value, setValue] = useState("");
    const [selectedType, setSelectedType] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = 1;
        const entryTitle = e.target.entryTitle.value;
        const entryCategory = e.target.entryCategory.value;
        const entryText = value;
        const entryType = e.target.entryType.value;
        const entryKey = e.target.entryKey.value;
        const entryStartDate = e.target.entryStartDate?.value;
        const entryEndDate = e.target.entryEndDate?.value;
        console.log(entryType, entryText);

        try {
            const res = await fetch('/api/newEntry', {
                body: JSON.stringify({ userId, entryTitle, entryCategory, entryKey, entryType, entryText, entryStartDate, entryEndDate }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })

            if (res.status === 200) {
                console.log('New entry added successfully');
            }
        } catch (error) {
            console.error('An unexpected error happened:', error);
        }

        // Reset the form
        e.target.reset();
        setSelectedType(null);
        setValue("");
    }

    return (
        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 25,
                marginTop: 25,
            }}
        >
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
                            <option>Select entry type</option>
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
                {selectedType &&
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
                                <Form.Group controlId="entryStartDate">
                                    <Form.Label><b>Start Date</b></Form.Label>
                                    <Form.Control type="text" aria-label="entryStartDate" />
                                </Form.Group>
                                <Form.Group controlId="entryEndDate">
                                    <Form.Label><b>End Date</b></Form.Label>
                                    <Form.Control type="text" aria-label="entryEndDate" />
                                </Form.Group>
                            </>
                        }
                    </div>
                }
                <Form.Group controlId="entryText">
                    <Form.Label><b>Entry Text</b></Form.Label>
                    <MDEditor
                        value={value}
                        onChange={setValue}
                        height={600}
                    />
                </Form.Group>
                <Container
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: 10,
                        marginTop: 25,
                        marginBottom: 25,
                    }}
                >
                    <Button variant="outline-primary" type="submit" style={{ width: "100%" }}>
                        Submit Entry
                    </Button>
                </Container>
            </Form>
        </Container>
    )
}

export default function AdminPanel() {
    const { data, isLoading, error } = useQuery('entries', async () => {
        const res = await fetch('/api/entries');
        return res.json();
    });

    if (error) return <p>Error: {String(error)}</p>;

    const entries = data?.allEntries;

    const [expandResume, setExpandResume] = useState(false);
    const [expandProjects, setExpandProjects] = useState(false);
    const [newEntry, setNewEntry] = useState(false);

    const handleExpandResume = () => {
        setExpandResume(!expandResume);
    }

    const handleExpandProjects = () => {
        setExpandProjects(!expandProjects);
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
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        gap: 10,
                                        marginTop: 25,
                                        borderBottom: '1px solid #ccc',
                                    }}
                                >
                                    <h2 className="subheader">Projects</h2>
                                    <Button variant="none" onClick={handleExpandProjects} style={{ borderRadius: 1 }}>{
                                        expandProjects ? <IoIosArrowDown /> : <IoIosArrowForward />
                                    }</Button>
                                </div>
                                {expandProjects && <EntryList props={{ entries: entries?.filter(e => e.entryType == 'project').sort((a, b) => a.orderIndex - b.orderIndex), selectedTag: null, entryListType: "project" }} />}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        gap: 10,
                                        marginTop: 25,
                                        borderBottom: '1px solid #ccc',
                                    }}
                                >
                                    <h2 className="subheader">Resume Entries</h2>
                                    <Button variant="none" onClick={handleExpandResume} style={{ borderRadius: 1 }}>{
                                        expandResume ? <IoIosArrowDown /> : <IoIosArrowForward />
                                    }</Button>
                                </div>
                                {expandResume && <EntryList props={{ entries: entries?.filter(e => e.entryType == 'resume'), selectedTag: null }} />}
                            </>
                }
                <h2 className="subheader">Create new entry</h2>
                {!newEntry &&
                    <Button variant="outline-primary" onClick={() => setNewEntry(!newEntry)} style={{ width: "100%" }}>Create new entry</Button>
                }
                {newEntry &&
                    <>
                        <Button
                            variant="outline-secondary"
                            onClick={() => setNewEntry(!newEntry)}
                            title="Discard changes"
                            className="edit-button"
                            style={{ border: "none" }}
                        >
                            <IoMdClose />
                        </Button>
                        <NewEntryForm />
                    </>
                }
            </Container>
        </>
    )
}