import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
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

    return (
        <Container>
            <ListGroup ref={parent}>
                {props.entries.map((entry) => {
                    if (props.selectedTag === null || props.selectedTag === entry.category) {
                        return <Entry key={entry.entryKey} props={entry} >
                            {entry.description}
                        </Entry>
                    }
                })}
            </ListGroup>
        </Container>
    );
}