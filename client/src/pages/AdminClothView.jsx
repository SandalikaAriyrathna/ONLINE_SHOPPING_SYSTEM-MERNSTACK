import React, { useEffect, useState } from 'react'
import axios from'axios'
import SideNav from '../Components/SideNav';
import DeleteClothModel from '../Components/modal/cloths/DeleteClothModel';
import UpdateClothModel from '../Components/modal/cloths/UpdateClothModel';


export default function AdminClothView(props) {

    const[cloth,setCloths] = useState([]);

    const getCloth = (type) =>{
        axios.get(`http://localhost:5000/api/cloths/itemcategory/${type}`)
        
        .then(res => { 
         
          setCloths(res.data);
          console.log(res.data)  
        })
        .catch(err => {
          console.log(err);
        })
      }

  
  
    
    
    return (
        <div >
            <SideNav />
            <br />
          
    

          
            <br/>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">

        
                <br />
    <div  class="btn-group-horizontal d-flex" >
       
    <button style={{"width":"200px",marginLeft:"80px"}} type="button" onClick={()=>getCloth('Men')} class="dbox_action_btn float-left"  >
                 Men
    </button>
    
    <button style={{"width":"200px",marginLeft:"80px"}} type="button" onClick={()=>getCloth('Women')} class="dbox_action_btn ">
                 Women
    </button>
  
    <button style={{"width":"200px",marginLeft:"80px"}} type="button" onClick={()=>getCloth('Kid')} class="dbox_action_btn ">
                 Kid
    </button>
   
    </div>

<br /><br /><br />
<div style={{background:"grey"}}
>
                    <table className="table" >
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Dress Type</th>
                                <th scope="col">Dress Size</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Material</th>
                                <th scope="col">Color</th>
                                <th scope="col">Item Category</th>
                                <th scope="col">Price</th>
                                <th className="text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody style={{color:"white"}}>
                            {cloth.map(es=>(
                            <tr key={es.dress_code}>
                                <td>{es.dress_type}</td>
                                <td>{es.dress_size}</td>
                                <td>{es.quantity}</td>
                                <td>{es.material}</td>
                                <td>{es.color}</td>
                                <td>{es.item_category}</td>
                                <td>{es.price}</td>
                                <td className="text-center">
                                    <UpdateClothModel eid={es.dress_code}/>
                                    <DeleteClothModel eid={es.dress_code}/>
                                  
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    

                </div>
            </div>
            </div>
        </div>
    )
}