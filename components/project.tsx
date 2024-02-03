import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Hero from '../components/hero';

export default function Project({ props, children }) {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }

    return (
        <button onClick={ handleClick } className="project-button" >
            <ListGroup.Item className="project-card">
                <Row>
                    <Col xs={10} sm={11}>
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
                    </Col>
                    <Col xs={2} sm={1}>
                         { expanded ? <IoIosArrowDown /> : <IoIosArrowForward />  }
                    </Col>
                </Row>
            </ListGroup.Item>
        </button>
    )
}