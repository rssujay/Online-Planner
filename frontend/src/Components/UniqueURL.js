import React, {useEffect, useContext} from 'react';
import shortid from 'shortid';
import axios from 'axios';
import { DeliverablesContext } from '../Contexts/DeliverablesContext';
import { UserContext } from '../Contexts/UserContext';
import Container from "@material-ui/core/Container"
import { Typography } from '@material-ui/core';

export default function UniqueURL() {
    let short_id = "";
    const {setId} = useContext(UserContext);
    const {setDeliverables} = useContext(DeliverablesContext);

    if (window.location.pathname !== "/"){
        short_id = window.location.pathname.substr(1,9);
        localStorage.setItem("uniqueid", short_id);
        setId(short_id);
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

    useEffect(() => {
        axios.get(`/api/getUser/${short_id}`)
        .then((res) => {
            setDeliverables(res.data);
        })
    }, [short_id, setDeliverables]);

    return (
        <Container>
            <hr/>
          <Typography variant="p"><h4>{window.location.origin}/${short_id}</h4> to access your entries in the future.</Typography>
        </Container>
    )
}
