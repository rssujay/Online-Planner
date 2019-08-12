import React, {useState, useContext} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import { DeliverablesContext } from '../Contexts/DeliverablesContext';
import {startOfToday} from 'date-fns';

export default function CreateDeliverable() {
    const {addDeliverable} = useContext(DeliverablesContext);

    const [input, setInput] = useState({
        title: "",
        desc:"",
        due: startOfToday().toLocaleDateString(),
        preserve: false
    });

    const handleChange = (e) => {
        setInput({
            title: e.target.id === "title"? e.target.value : input.title,
            desc: e.target.id === "desc"? e.target.value : input.desc,
            due: e.target.id === "due"? e.target.value : input.due,
            preserve: e.target.id === "preserve"? !input.preserve : input.preserve
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDeliverable(input.title, input.desc, input.due);

        if (!input.preserve){
            setInput({
                title:"",
                desc: "",
                due: startOfToday().toLocaleDateString(),
                preserve:false
            })
        }
    }

    return (
        <Container style={{maxWidth:"60%"}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Add a new deliverable</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" id="title" value={input.title} onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Control as="textarea" placeholder="Enter Description" id="desc" value={input.desc} onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="date" id="due" value={input.due} onChange={handleChange}/>
                    <Form.Text className="text-muted text-left">
                        The above date will be reflected as the due date.
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <input type='checkbox' id="preserve" defaultChecked={input.preserve} onClick={handleChange}/>
                    <span> Preserve form data upon submission.</span>
                </Form.Group>
                <Button type="submit" bg="primary" className="mb-2">Submit</Button>
            </Form>
        </Container>

    )
}
