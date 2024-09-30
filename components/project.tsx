import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import CopyButton from './copyButton';

export default function Project({ props, children }) {
    const [expanded, setExpanded] = useState(false);
    const myRef = useRef(null);

    const handleClick = () => {
        setExpanded(!expanded);

        myRef.current.scrollIntoView();
    }
    const router = useRouter();

    // Get the id parameter from the URL
    const { id } = router.query;

    useEffect(() => {
        // Expand the project if the id parameter matches the project id
        if (props.id && id && props.id === id) {
            myRef.current.scrollIntoView();
            setExpanded(true);
        }
    }, [id]);


    return (

        <div className="project-button" >
            <ListGroup.Item ref={myRef} className="project-card">
                <Row>
                    <Col className="project-details" xs={10} sm={11}>
                        <h3 className="project-title">{props.title}</h3>
                        <Row>
                            <Col xs={6}>
                                <h4 className="project-category">{props.category}</h4>
                            </Col>
                            <Col xs={6}>
                                {props.date && <h4 className="project-date">{props.date}</h4>}
                            </Col>
                        </Row>
                        { expanded && <p className="project-description">{children}</p> }
                        { expanded && <CopyButton props={{ id : props.id }} /> }
                    </Col>
                    <Col xs={2} sm={1} className="expand-button flex-column">
                        <button title="Expand for details" className="h-100" onClick={ handleClick } >{ expanded ? <IoIosArrowDown /> : <IoIosArrowForward /> }</button>
                    </Col>
                </Row>
            </ListGroup.Item>
        </div>

    )
}