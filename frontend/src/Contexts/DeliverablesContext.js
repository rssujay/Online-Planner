import React, {createContext, useState} from 'react';
import uuid from 'uuid';

export const DeliverablesContext = createContext();

const DeliverablesContextProvider = (props) => {
    const [deliverables, setDeliverables] = useState([
        {
            id:1,
            name: "Test",
            description: "lorem ipsum",
            due: "19/12/1970"
        },
        {
            id:2,
            name: "Quizzes",
            description: "lorem ipsum",
            due: "19/12/1992"
        },
        {
            id:3,
            name: "Water",
            description: "lorem ipsum",
            due: "19/12/1912"
        }
    ])

    const addDeliverable = (name,description,due) => {
        //Make local changes
        setDeliverables([...deliverables, {
            id: uuid.v4(),
            name: name,
            description: description,
            due: due
        }])

        //Update DB
    }

    const removeDeliverable = (id) => {
        //Make local changes
        setDeliverables(deliverables.filter((deliverable) => {
            return deliverable.id !== id;
        }))
        
        //Update DB
    }

    return (
        <DeliverablesContext.Provider value={{deliverables, removeDeliverable, addDeliverable}}>
            { props.children }
        </DeliverablesContext.Provider>
    )
}

export default DeliverablesContextProvider