import React, {useContext} from 'react'
import Card from 'react-bootstrap/Card'
import '../Css/deliverable.css'
import { DeliverablesContext } from '../Contexts/DeliverablesContext';

export default function Deliverable(props) {
    const {removeDeliverable} = useContext(DeliverablesContext);
    const {id, name, description, due} = props.deliverable;

    return (
        <Card className="p-2 m-3" style={{width:"18rem"}}>
            <Card.Body className="p-2 text-left">
                <Card.Title className="font-weight-bold">{name}</Card.Title>
                <Card.Subtitle className="text-muted font-weight-light">Due on: {due}</Card.Subtitle>
                <br/>
                <Card.Text>{description}</Card.Text>
                <hr/>
                <button className="complete_btn" onClick={removeDeliverable.bind(this, id)}>Mark Complete</button>
            </Card.Body>
        </Card>
    )
}
