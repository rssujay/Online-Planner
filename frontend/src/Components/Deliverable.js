import React, {useContext} from 'react'
import Card from '@material-ui/core/Card'
import '../Css/deliverable.css'
import Button from '@material-ui/core/Button';
import { DeliverablesContext } from '../Contexts/DeliverablesContext';
import { CardContent, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

export default function Deliverable(props) {
    const {removeDeliverable} = useContext(DeliverablesContext);
    const {id, name, description, due} = props.deliverable;

    return (
        <Card style={{padding:"1rem"}}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
                <Typography variant="h6">Due on: {due}</Typography>
                <Paper style={{margin:"1em",padding:"0.5em"}}>
                    <Typography variant="p">{description}</Typography>
                </Paper>
            </CardContent>              
                <hr/>
                <Button onClick={removeDeliverable.bind(this, id)}>Mark Complete</Button>
        </Card>
    )
}
