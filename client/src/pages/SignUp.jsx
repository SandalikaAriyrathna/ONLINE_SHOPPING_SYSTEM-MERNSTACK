import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import "../index.css"


export default function SignUp(props) {

  const [show, setShow] = useState(false);

  const [username , setUserName] = useState("");
  const [name , setname] = useState("");
  const [address , setAddress] = useState("");
  const [phone_number , setMnumber] = useState("");
  const [age , setAge] = useState("");
  const [gender , setGender] = useState("");
  const [profile_pic , setProfilepic] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
 

  const [file, setFile] = useState(null);

  const userData ={
    username ,
    name ,
    address ,
    phone_number,
    age ,
    gender,
    profile_pic,
    email,    
    password
  }
  


  function submitForm(e){
    e.preventDefault();
    if(username.length === 0 || name.length === 0 || address.length === 0 || phone_number.length === 0 || age.length === 0 || gender.length === 0 || email.length === 0 || password.length === 0 ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else{
      console.log(userData);
      axios.post('http://localhost:5000/api/auth/register', userData)
      .then(function (response) {
        console.log(response);
        setname('');
        setAge('');
        setGender('');
        setMnumber('');
        setAddress('');
        setEmail('');
        setUserName('');
        setPassword('');
        swal({ text: "Successfully Added", icon: "success", button: "Okay!"})
        window.location.replace("/login");
      })
      .catch(function (error) {
        console.log(error);
        alert("not added");
      });
    }
    
  }

    return (
        <div>
         
      
<section class=" bg-secondary bg-gradient" > 
 
  <div class="p-5 bg-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",height: "300px"}}></div>

<div className="row d-flex justify-content-center">
  <div class="col-md-6 card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: "-100px",background:" hsla(0, 0%, 100%, 0.8)",backdropFilter: "blur(30px)"
    }}>


    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
  
          <h2 class="fw-bold mb-5 text-center">Create Your Wozby Account</h2>
          <form onSubmit={submitForm}>

          <div class="form-outline mb-4">
          <label class="form-label" for="form3Example3">Username</label>
              <input type="text" id="form3Example3" class="form-control" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>            
            </div>
          
          <div class="form-outline mb-4">
          <label class="form-label" for="form3Example3">Name</label>
              <input type="text" id="form3Example3" class="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}/>            
            </div>
          
            <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Address</label>
              <input type="text-area" id="form3Example3" class="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
             
            </div>

            <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Phone Number</label>
              <input type="text" id="form3Example3" class="form-control" value={phone_number} onChange={(e)=>{setMnumber(e.target.value)}}/>
             
            </div>

            
            <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Age</label>
              <input type="text" id="form3Example3" class="form-control" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
             
            </div>

<form onChange={(e)=>setGender(e.target.value)}>
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3"> 
            <label class="form-label" for="form3Example3">Gender</label><br />
            <div class="form-check">
                <input class="form-check-input" type={type} name="flexRadioDefault" value={"Male"} id={`inline-${type}-1`}/>
                <label class="form-check-label" for="flexRadioDefault1">
                Male
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type={type} name="flexRadioDefault" value={"Female"} id={`inline-${type}-2`} />
                <label class="form-check-label" for="flexRadioDefault2">
                    Female
                </label>
            </div>
         </div>
  ))}
  </form>

         <br />
            <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Email address</label>
              <input type="email" id="form3Example3" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              
            </div>

        
            <div class="form-outline mb-4">
            <label class="form-label" for="form3Example4">Password</label>
              <input type="password" id="form3Example4" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
             
            </div>


            <div class="text-center">
            <button type="submit" class="btn btn-primary btn-block mb-4 w-50">
              Sign up
            </button>
            </div> 
         
            <div class="text-center">
              <p>or sign up with:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button>
            </div>

            <div class="text-center">
                          <p>Already a member? <a href="/login">Login</a></p>
                        </div>

          </form>

      </div>
     

    </div>
   
  </div>
  </div>
</section>



        </div>
    )
}