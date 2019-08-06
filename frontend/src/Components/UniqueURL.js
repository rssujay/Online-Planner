import React, {useEffect, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import shortid from 'shortid';
import axios from 'axios';
import { DeliverablesContext } from '../Contexts/DeliverablesContext';
import { UserContext } from '../Contexts/UserContext';

export default function UniqueURL() {
    let short_id = "";
    const {id, setId} = useContext(UserContext);
    const {setDeliverables} = useContext(DeliverablesContext);

    if (window.location.pathname !== "/"){
        short_id = window.location.pathname.substr(1,9);
        localStorage.setItem("uniqueid", short_id);
    }

    else if (localStorage.getItem("uniqueid") != null){
        short_id = localStorage.getItem("uniqueid");
        setId(short_id);
    }
    else {
        short_id = shortid.generate();
        setId(short_id);
        localStorage.setItem("uniqueid", short_id);
    }

    console.log(short_id);

    useEffect(() => {
        axios.get(`/api/getUser/${short_id}`)
        .then((res) => {
            setDeliverables(res.data);
        })
    }, [short_id, setDeliverables]);

    return (
        <Container>
            <p style={{fontWeight:"600"}}>{window.location.origin}/{short_id}</p>
            <p>Use this URL to access your entries in the future.</p>
        </Container>
    )
}
