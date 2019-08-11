import React, {useContext} from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { DeliverablesContext } from '../Contexts/DeliverablesContext';
import Deliverable from './Deliverable'
import faded_icon from '../Assets/Icon_faded.svg'
import Typography from '@material-ui/core/Typography';

export default function Deliverables() {
    const {deliverables} = useContext(DeliverablesContext);

    return (
        <Box p="1rem">
        <Container style={{backgroundColor:"#555", minHeight:"50vh", padding:"1rem"}}>
            <Typography variant="h4" style={{color:"#fff",textTransform:"uppercase"}}>{deliverables.length > 0? deliverables.length > 1 ? `${deliverables.length} things left` : "Just one thing left" :""}</Typography>
            <Typography m={2} variant="p" className="text-left mx-3" style={{color:"#fff"}}>{deliverables.length > 0?"": `It appears you have nothing left to do :)`}</Typography>
            <Grid container spacing={2}>         
                {deliverables.map((deliverable) => (
                    <Grid item xs={12} lg={4} md={6} >
                        <Deliverable key={deliverable.id} deliverable={deliverable}/>
                    </Grid>
                ))}
            </Grid>
            <img src={faded_icon} alt="" style={{margin:"1rem", width:"4%", opacity:"0.5",alignItems:"flex-center", justifyContent:"center"}}/>
        </Container>
        </Box>
    )
}
