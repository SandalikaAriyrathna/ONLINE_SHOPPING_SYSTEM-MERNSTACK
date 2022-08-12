import React from 'react'
import { Col, Row, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { MDBCol } from 'mdb-react-ui-kit';

export default function UpdateClothModel(props) {

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
    const [note, setNote] = useState("");
    const [image , setImage] = useState("aa");

    const [file, setFile] = useState(null);

 

    // const PF = "http://localhost:5000/images/";

   
     const clothData = {
        dress_code,
        dress_type,
        dress_size,
        quantity,
        material,
        color,
        item_category,
        price,
        image
    }
    if (file) {
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        clothData.image= filename;
        try {
            axios.post("http://localhost:5000/api/upload", data);
        } catch (err) {
          alert(err)
        }
      }

    const updateShow = () => {
        setDressCode(props.eid)
        axios.get('http://localhost:5000/api/cloths/' + props.eid).then(function (response) {
            setDressCode(response.data['dress_code']);
            setDressType(response.data['dress_type']);
            setDressSize(response.data['dress_size']);
            setQuantity(response.data['quantity']);
            setMaterial(response.data['material']);
            setColor(response.data['color']);
            setItemCategory(response.data['item_category']);
            setPrice(response.data['price']);
            setNote(response.data['note']);
            setImage(response.data['image']);
            setShow(true)

        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };

    function submitForm(e) {
        e.preventDefault();
     
        axios.put('http://localhost:5000/api/cloths/update/' + props.eid, clothData)
            .then(function (response) {            
                setDressCode('');
                setDressType('');
                setDressSize('');
                setQuantity('');
                setMaterial('');
                setColor('');
                setItemCategory('');
                setPrice('');
                setNote('');
                setImage('');
                setShow(false);
                swal({ text: "Cloth Successfully Updated", icon: "success", button: "Okay!" }).then((value) => {
                    window.location = '/clothview';
                });
              
            })
            .catch(function (error) {
                console.log(error);
            });
    }


   

    return (
        <>
            <Button className='btn-success me-2' onClick={updateShow}>
                Edit
            </Button>

            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Update Cloth Details</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                    <Form>

                    <div className='row justify-content-center'>
  <Col sm={3}>
  <fieldset>

    <Form.Group  className="p-2 bd-highlight d-flex flex-column justify-content-center" >
      
      <MDBCol  className='mb-4'>
      {file && (
        <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" /> 
      )} 
      </MDBCol>
     
  
      
    </Form.Group>
  </fieldset>
  </Col>
  </div>
  <Col sm={10}>

  <Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
          Select Cloth Image
  </Form.Label>
  <Col sm="7">
    <Form.Control type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} required/>
  </Col>
</Form.Group>


                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">
                            Dress Type  
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control type="text" placeholder="Enter Dress Type " value={dress_type} onChange={(e)=>setDressType(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3" >
                            Dress Size
                            </Form.Label>
                            <Col sm="5" >
                            <Form.Control type="text" placeholder="Enter Dress Size" value={dress_size} onChange={(e)=>setDressSize(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">
                            Quantity
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control type="Email" placeholder="Enter Quantity"  value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">
                            Material
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control type="Email" placeholder="Enter Material" value={material} onChange={(e)=>setMaterial(e.target.value)} />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">
                            Color 
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control type="textarea"placeholder="Enter Color" value={color} onChange={(e)=>setColor(e.target.value)}  />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3"  >
                            Item Category 
                            </Form.Label>
                            <Col sm={3}>
                            <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"200px"}}  onChange={(e)=>setItemCategory(e.target.value)}>
                            <option selected>Select Item Category</option>
                            <option value="Men">Men's</option>
                            <option value="Women">Women's</option>
                            <option value="Kid">Kid's</option>
                            </select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">
                            Price
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control   type="text" placeholder="Enter Price" maxLength="10" value={price}  onChange={(e)=>setPrice(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">
                            Note
                            </Form.Label>
                            <Col sm="7">
                            <Form.Control   type="text" placeholder="Enter Note" maxLength="10" value={note} onChange={(e)=>setNote(e.target.value)} />
                            </Col>
                        </Form.Group>
                        </Col>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Update Cloth
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}