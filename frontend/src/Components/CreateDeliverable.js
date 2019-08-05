import React, {useState, useContext} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import { DeliverablesContext } from '../Contexts/DeliverablesContext';

export default function CreateDeliverable() {
    const {addDeliverable} = useContext(DeliverablesContext);

    const [input, setInput] = useState({
        title: "",
        desc:"",
        due: "1970-01-01"
    });

    const handleChange = (e) => {
        setInput({
            title: e.target.id === "title"? e.target.value : input.title,
            desc: e.target.id === "desc"? e.target.value : input.desc,
            due: e.target.id === "due"? e.target.value : input.due
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDeliverable(input.title, input.desc, input.due);
    }

    return (
        <Container style={{maxWidth:"60%"}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Add a new deliverable</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" id="title" onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Control as="textarea" placeholder="Enter Description" id="desc" onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="date" id="due" onChange={handleChange}/>
                    <Form.Text className="text-muted text-left">
                        The above date will be reflected as the date of submission.
                    </Form.Text>
                </Form.Group>

                <Button type="submit" bg="primary">Submit</Button>
            </Form>
        </Container>

    )
}
