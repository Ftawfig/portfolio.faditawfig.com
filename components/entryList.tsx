import React, { useState } from 'react';
import { Container, ListGroup, Button, OverlayTrigger, Tooltip, Overlay } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Entry } from './entry';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Entry as EntryType } from '../types';

interface EntryListProps {
    entries: EntryType[];
    selectedTag?: string | null;
}

export default function EntryList({ props }: { props: EntryListProps }) {
    const [parent] = useAutoAnimate();
    console.log("EntryList: ", props.entries);

    const [expandAll, setExpandAll] = useState(false);

    if (props.entries.length == 0) {
        return <p>No entries yet...</p>
    }

    const handleClick = () => {
        setExpandAll(!expandAll);
    }

    const tooltip = (
        <Tooltip>
            {expandAll ? "Collapse all" : "Expand all"}
        </Tooltip>
    )

    return (
        <>
            <Container
                style={{
                    marginBottom: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end"
                }}
            >
                <OverlayTrigger placement="left" overlay={tooltip}>
                    <Button variant="outline-secondary" onClick={handleClick} style={{borderRadius: 1}}>{
                        expandAll ? <IoIosArrowDown /> : <IoIosArrowForward />
                    }</Button>
                </OverlayTrigger>
            </Container>
            <Container>
                <ListGroup ref={parent}>
                    {props.entries.map((entry) => {
                        entry.isExpanded = expandAll;
                        if (props.selectedTag === null || props.selectedTag === entry.category) {
                            return <Entry key={entry.entryKey} props={entry} >
                                {entry.description}
                            </Entry>
                        }
                    })}
                </ListGroup>
            </Container>
        </>
    );
}