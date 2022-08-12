import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import "../index.css"


export default function KidsWear(props) {
    const[cloth,setCloths] = useState([]);
    const [image , setImage] = useState("");
    
    const PF = "http://localhost:5000/images/"


    useEffect(()=>{
        const fetchcloth = async ()=>{
            const res  =await axios.get('http://localhost:5000/api/cloths/itemcategory/Kid')
            setCloths(res.data)
            setImage(res.data['image'])
            
        }
        fetchcloth()
    },[])
    
    

    return (
        <div>
            <Header />
            <br /><br />

            <div class="container">
  <div class="Col row-col-4">
    <div class="row">

    {cloth.map(stf=>(
                        <div key={stf.dress_code} class="card" style={{ marginLeft:"70px",marginBottom:"40px", width: "15rem", height: "25rem" }}>
                            <div class="card-img-top">
                           
                            <img  src={PF+stf.image} className='img-fluid rounded' style={{height:"200px", width:"200px",marginLeft:"10px" }}alt=''  />
                            {/* <img  src="https://www.pngkit.com/png/detail/20-204640_mens-formal-wear-png.png" className='img-fluid rounded' style={{height:"200px", width:"200px",marginLeft:"10px" }}alt=''  /> */}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{stf.dress_type}</h5>
                                <p class="card-text">{stf.dress_size}</p>
                                <h3 class="card-text">{stf.price}</h3>
                               
                            </div>
                        </div>
                    ))}
                    


      
    </div>
   
  </div>
</div>
            
          
            <Footer />
            </div>

            )
}