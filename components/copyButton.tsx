import React from 'react';
import { useState } from 'react';
import { IoLink } from "react-icons/io5";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

export default function CopyButton({ props }) {
    const [copied, setCopied] = useState(false);

    const copyLink = () => {
        let hostname = window.location.hostname;

        // get slug from the URL
        const slug = window.location.pathname +  "?key=";

        // if dev attach port number
        if (hostname === "localhost") {
            hostname += ":3000";
        }

        navigator.clipboard.writeText(hostname + slug + props.key);

        setCopied(true);
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>{copied ?  "Link copied to clipboard!" : "Copy link to this item"}</Tooltip>
      );

    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <Button variant="outline-secondary" className="copy-button" onClick={ copyLink } ><IoLink /></Button>
        </OverlayTrigger>
    )
}