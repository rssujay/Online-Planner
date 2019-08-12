import React, {useContext} from 'react'
import Card from '@material-ui/core/Card'
import '../Css/deliverable.css'
import Button from '@material-ui/core/Button';
import { DeliverablesContext } from '../Contexts/DeliverablesContext';
import { CardContent, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {parse, startOfToday, differenceInDays} from 'date-fns';

export default function Deliverable(props) {
    const {removeDeliverable} = useContext(DeliverablesContext);
    const {id, name, description, due} = props.deliverable;
    const fullDaysLeft = differenceInDays(parse(due),startOfToday());

    return (
        <Card style={{padding:"1rem"}}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
                <Typography variant="h6">Due on: {parse(due).toLocaleDateString()}</Typography>
                <Typography variant="body1" style={fullDaysLeft > 0 ?{color:"blue"}: fullDaysLeft === 0? {color:"orange"}: {color:"red"}}> {fullDaysLeft > 0? (fullDaysLeft === 1? `${fullDaysLeft} day left` : `${fullDaysLeft} days left`): (fullDaysLeft === 0? `Due Today`: `Overdue`)}</Typography>
                <Paper style={{margin:"1em",padding:"0.5em"}}>
                    <Typography variant="body1">{description}</Typography>
                </Paper>
            </CardContent>              
                <hr/>
                <Button onClick={removeDeliverable.bind(this, id)}>Mark Complete</Button>
        </Card>
    )
}
