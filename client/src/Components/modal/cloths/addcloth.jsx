import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from 'axios';
import { MDBCol } from 'mdb-react-ui-kit';
import swal from 'sweetalert';

export default function Addcloth(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
  
  const [dress_code , setDressCode] = useState("");
  const [dress_type , setDressType] = useState("");
  const [dress_size , setDressSize] = useState("");
  const [quantity , setQuantity] = useState("");
  const [material , setMaterial] = useState("");
  const [color , setColor] = useState("");
  const [item_category , setItemCategory] = useState("");
  const [price , setPrice] = useState("");
  const [note , setNote] = useState("");
  const [image , setImage] = useState("aa");

  const [file, setFile] = useState(null);
  
  async function handleSubmit(e){
    
    e.preventDefault();
   const clothData ={
    dress_code,
    dress_type,
    dress_size ,
    quantity ,
    material,
    color ,
    item_category,
    price ,
    note,
    image,
    };

    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      clothData.image= filename;
      try {
         await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {
        alert(err)
      }
    }


     // Validation 
   
        if(dress_type.length === 0 || dress_size.length === 0 || quantity.length === 0 || material.length === 0 ||color.length === 0 || item_category.length === 0  || price.length === 0 || note.length === 0 || image.length === 0 ){
              swal(" Fields Cannot empty !","Please enter all data !", "error");
            }  
          else{
            console.log(clothData);
            axios.post('http://localhost:5000/api/cloths', clothData)
            .then(function (response) {
              console.log(response.data);
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
              swal({ text: "Successfully Added", icon: "success", button: "Okay!" })
              .then((value) => {
                window.location = '/clothview';
            });
            })
            .catch(function (error) {
              console.log(error);
              
            });
            
        
          swal({ text: "Successfully Added", icon: "success", button: "Okay!"})
          .then((value) => {
            window.location = '/clothview'+ dress_code; 
         });
        }   
   }
  

  return (
    <>
    
      <Button className="btn-dashb me-5" variant="primary" onClick={handleShow}>
      Adding Details
      </Button>

      <Modal show={show}        
        size="lg"
        centered
        
      >
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">Add Cloth Details</Modal.Title>
         </div> 
        </Modal.Header>
     
        <Modal.Body>

        


  <Form onSubmit={handleSubmit}>
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
        <Button variant="primary" type="submit" onClick={handleSubmit} style={{height:"40px", width:"20%"}}>
            Submit
          </Button>
          <Button variant="danger" onClick={handleClose} style={{height:"40px", width:"20%"}}>
            Cancel
          </Button> 
        
        </Modal.Footer>
      </Modal>
    </>
  );
}