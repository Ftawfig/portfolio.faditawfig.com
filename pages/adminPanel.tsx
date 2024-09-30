import React from 'react';
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
    const [value, setValue] = React.useState("**Hello world!!!**");

    return (
        <>
            <Hero props={{ title: "Admin" }}>
                Feel free to get in touch via email, or visit <a href="https://faditawfig.com">faditawfig.com</a> for more information on consulting and services.
            </Hero>
            <Container className="main">
                <h2>Projects</h2>
                <h2>Resume Entries</h2>
                <Container>
                    <h2>Create new entry</h2>
                    <Form>
                        <Form.Group controlId="entryType">
                            <Form.Select aria-label="project_type">
                                <option value="project">Project</option>
                                <option value="resume">Resume</option>
                                <option value="education">Education</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="entryText">
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