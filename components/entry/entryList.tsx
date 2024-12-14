import React, { useState, createContext, useEffect } from 'react';
import { Container, ListGroup, Button, OverlayTrigger, Tooltip, Form } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CgReorder } from "react-icons/cg";
import { GoCheck } from "react-icons/go";
import { Entry } from './entry';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Entry as EntryType } from '../../types';

interface EntryListProps {
    entries: EntryType[];
    selectedTag?: string | null;
    entryListType?: "resume" | "project";
}

export default function EntryList({ props }: { props: EntryListProps }) {
    const [parent] = useAutoAnimate();
    const [expandAll, setExpandAll] = useState(false);
    const [entryList, setEntryList] = useState([...props.entries]);
    const [reorderMode, setReorderMode] = useState(false);
    const [orderIndexes, setOrderIndexes] = useState([{ entryKey: "", orderIndex: 0 }]);

    useEffect(() => {
        const orderIndexes = [...props.entries].map((entry, index) => {
            const entryOrderIndex = entry.orderIndex ? entry.orderIndex : index + 1;
            return { entryKey: entry.entryKey, orderIndex: entryOrderIndex };
        });
        setOrderIndexes(orderIndexes);

    }, [props.entries]);

    useEffect(() => {
        setEntryList([...entryList].sort((a, b) => {
            return orderIndexes.find((o) => o.entryKey === a.entryKey)?.orderIndex - orderIndexes.find((o) => o.entryKey === b.entryKey)?.orderIndex;
        }));

    }, [orderIndexes]);


    if (props.entries?.length == 0) {
        return <p>No entries yet...</p>
    }

    const handleClick = () => {
        setExpandAll(!expandAll);
    }

    const handleReduceOrderIndex = (entryKey) => {
        const curOrderIndex = orderIndexes.find((o) => o.entryKey === entryKey)?.orderIndex;
        const newOrderIndex = curOrderIndex - 1;

        updateOrderIndexes(newOrderIndex, entryKey);
    };

    const handleIncreaseOrderIndex = (entryKey) => {
        const curOrderIndex = orderIndexes.find((o) => o.entryKey === entryKey)?.orderIndex;
        const newOrderIndex = curOrderIndex + 1;

        updateOrderIndexes(newOrderIndex, entryKey);
    }

    const updateOrderIndexes = (newOrderIndex, entryKey) => {
        const curOrderIndex = orderIndexes.find((o) => o.entryKey === entryKey)?.orderIndex;

        if (newOrderIndex < 1) {
            newOrderIndex = 1;
        } else if (newOrderIndex > entryList.length) {
            newOrderIndex = 1;
        }

        const newOrderIndexes = [...orderIndexes].map((o) => {
            if (o.entryKey === entryKey) {
                return { entryKey: entryKey, orderIndex: newOrderIndex }
            } else if (o.orderIndex >= newOrderIndex && curOrderIndex > o.orderIndex) {
                return { entryKey: o.entryKey, orderIndex: o.orderIndex + 1 }
            } else if (o.orderIndex <= newOrderIndex && curOrderIndex < o.orderIndex) {
                return { entryKey: o.entryKey, orderIndex: o.orderIndex - 1 }
            }
            return o;
        });

        setOrderIndexes(newOrderIndexes.sort((a, b) => a.orderIndex - b.orderIndex));
    }

    const handleSaveOrder = async () => {
        const res = await fetch('/api/reorderEntries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId : 1, orderIndexes : orderIndexes })
        });

        if (res.status === 200) {
            setReorderMode(false);
        }
    }

    useEffect(() => {
        setEntryList(
            [...entryList].sort((a, b) => {
                return orderIndexes.find((o) => o.entryKey === a.entryKey)?.orderIndex - orderIndexes.find((o) => o.entryKey === b.entryKey)?.orderIndex;
            })
        );
    }, [orderIndexes]);

    useEffect(() => {
    }, [entryList]);

    const tooltip = (
        <Tooltip>
            {expandAll ? "Collapse all" : "Expand all"}
        </Tooltip>
    );

    return (
        <>
            <Container
                style={{
                    marginBottom: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <div>{props.entryListType === "project" && <>
                    {reorderMode ?
                        <Button
                            variant="outline-secondary"
                            onClick={handleSaveOrder}
                            style={{ borderRadius: 1 }}
                            title="Save order"
                        >
                            <GoCheck />
                        </Button>
                        :
                        <Button
                            variant="outline-secondary"
                            onClick={() => setReorderMode(true)}
                            style={{ borderRadius: 1 }}
                            title="Reorder entries"
                        >
                            <CgReorder />
                        </Button>
                    }</>}
                </div>
                <OverlayTrigger placement="left" overlay={tooltip}>
                    <Button variant="outline-secondary" onClick={handleClick} style={{ borderRadius: 1 }}>{
                        expandAll ? <IoIosArrowDown /> : <IoIosArrowForward />
                    }</Button>
                </OverlayTrigger>
            </Container>
            <Container>
                <ListGroup ref={parent}>
                    {entryList?.map((entry) => {
                        entry.isExpanded = expandAll;

                        if (props.selectedTag === null || props.selectedTag === entry.category) {
                            return (
                                <div
                                    key={entry.entryKey}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignContent: "center",
                                    }}
                                >
                                    {orderIndexes.length > 1 && reorderMode &&
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "center",
                                                alignContent: "center",
                                            }}
                                        >
                                            <span>{String(orderIndexes.find(o => o.entryKey === entry.entryKey).orderIndex)}</span>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center",
                                                    alignContent: "center",
                                                    marginRight: 10,
                                                    gap: 5
                                                }}
                                            >
                                                <Button
                                                    variant={"outline-secondary"}
                                                    size="sm"
                                                    onClick={() => handleReduceOrderIndex(entry.entryKey)}
                                                    style={{ borderRadius: 1 }}
                                                >
                                                    <IoIosArrowUp />
                                                </Button>
                                                <Button
                                                    variant={"outline-secondary"}
                                                    size="sm"
                                                    onClick={() => handleIncreaseOrderIndex(entry.entryKey)}
                                                    style={{ borderRadius: 1 }}
                                                >
                                                    <IoIosArrowDown />
                                                </Button>
                                            </div>
                                        </div>
                                    }
                                    <Entry props={entry} >
                                        {entry.description}
                                    </Entry>
                                </div>
                            )
                        }
                    })}
                </ListGroup>
            </Container>
        </>
    );
}