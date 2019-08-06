import React from 'react';
import Container from 'react-bootstrap/Container';
import shortid from 'shortid';

export default function UniqueURL() {
    let short_id = "";

    if (localStorage.getItem("uniqueid") != null){
        short_id = localStorage.getItem("uniqueid");
    }
    else {
        short_id = shortid.generate();
        localStorage.setItem("uniqueid", short_id);
    }

    return (
        <Container>
            <p style={{fontWeight:"600"}}>{window.location.href}/{short_id}</p>
            <p>Use this URL to access your entries in the future.</p>
        </Container>
    )
}
