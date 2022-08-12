
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import "../../../style.css";
import axios from 'axios';
import swal from 'sweetalert'

export default function DeleteClothModel(props) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [show, setShow] = useState(false);
    const [dress_code, setDressCode] = useState("");
    const [dress_type, setDressType] = useState("");
    const [dress_size, setDressSize] = useState("");
    const [quantity, setQuantity] = useState("");
    const [material, setMaterial] = useState("");
    const [color, setColor] = useState("");
    const [item_category, setItemCategory] = useState("");
    const [price, setPrice] = useState("");

    const clothData = {
        dress_code,
        dress_type,
        dress_size,
        quantity,
        material,
        color,
        item_category,
        price
    }

    const DeleteShow = () => {
        console.log(props.eid)
        setDressCode(props.eid)
        axios.get("http://localhost:5000/api/cloths/" + props.eid)
        .then(function (response) {
            setDressCode(response.data['dress_code']);
            setDressType(response.data['dress_type']);
            setDressSize(response.data['dress_size']);
            setQuantity(response.data['quantity']);
            setMaterial(response.data['material']);
            setColor(response.data['color']);
            setItemCategory(response.data['item_category']);
            setPrice(response.data['price']);
            setShow(true)


        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };

    function submitForm(e) {
        e.preventDefault();
        axios.delete('http://localhost:5000/api/cloths/delete/' + props.eid)
            .then(function (response) {
                setShow(false);
                swal({ text: "Cloth Successfully Deleted", icon: "success", button: "Okay!" }).then((value) => {
                    window.location = '/clothview';
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

  

    return (
        <>
            <Button className='btn-danger me-2' onClick={DeleteShow}>
                Delete
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Delete Cloth</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                    <Form>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Dress Type
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={dress_type} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                            Dress Size
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={dress_size} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                            Quantity
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={quantity} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                            Material
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={material} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                            Color
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={color} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                            Item Category
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={item_category} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                            Price
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" value={price} disabled />
                            </Col>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Delete Cloth
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}