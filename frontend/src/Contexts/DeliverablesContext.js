import React, {createContext, useState, useContext} from 'react';
import uuid from 'uuid';
import axios from 'axios';
import { UserContext } from './UserContext';

export const DeliverablesContext = createContext();

const DeliverablesContextProvider = (props) => {
    const [deliverables, setDeliverables] = useState([])
    const {id} = useContext(UserContext);

    const addDeliverable = (name,description,due) => {
        const newId = uuid.v4();

        //Make local changes
        setDeliverables([...deliverables, {
            id: newId,
            name: name,
            description: description,
            due: due
        }])

        //Update DB
        axios.post(`/api/addItem/${id}`, {
            id: newId,
            name: name,
            description: description,
            due: due
        })
        .then(res => {
            console.log(res);
        })
    }

    const removeDeliverable = (itemId) => {
        //Make local changes
        setDeliverables(deliverables.filter((deliverable) => {
            return deliverable.id !== itemId;
        }))
        
        //Update DB
        axios.post(`/api/removeItem/${id}`, {
            id: itemId,
        })
        .then(res => {
            console.log(res);
        })
    }

    return (
        <DeliverablesContext.Provider value={{deliverables, removeDeliverable, addDeliverable, setDeliverables}}>
            { props.children }
        </DeliverablesContext.Provider>
    )
}

export default DeliverablesContextProvider