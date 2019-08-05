import React, {useContext} from 'react'
import Container from 'react-bootstrap/Container';
import { DeliverablesContext } from '../Contexts/DeliverablesContext';
import Deliverable from './Deliverable'

export default function Deliverables() {
    const {deliverables} = useContext(DeliverablesContext);

    return (
        <div className="m-3 p-2 border border-dark rounded-lg" style={{backgroundColor:"#333"}}>
            <h3 className="text-left text-uppercase mx-3" style={{color: "#AAF"}}>{deliverables.length > 0? deliverables.length > 1 ? `${deliverables.length} things left` : "Just one thing left" :""}</h3>    
            <p className="text-left mx-3" style={{color:"#fff"}}>{deliverables.length > 0?"": `It appears you have nothing left to do :)`}</p>
            <Container fluid>
                <div className="row">
                    {deliverables.map((deliverable) => (
                        <Deliverable className="col-12" key={deliverable.id} deliverable={deliverable}/>
                    ))}
                </div>
            </Container>
        </div>
    )
}
