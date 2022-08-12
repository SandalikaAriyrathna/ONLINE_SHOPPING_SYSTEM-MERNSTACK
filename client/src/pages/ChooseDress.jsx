import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import "../index.css"


export default function ChoosDress() {
    return (
        <div>
         <Header/>

         <div
  className="hpimage"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-vector/realistic-studio-lights-empty-background-design_1017-27233.jpg?w=2000')",height: "100vh"
    }}
>
<div class="btn-group-horizontal d-flex" >
<a href='/menwear'><button type="button" class="btn btn btn-outline-secondary btn-lg" style={{marginLeft:"200px", marginTop:"60px" , "width":"300px" }} >Men's</button> </a>
<a href='/womenwear'><button type="button" class="btn btn btn-outline-secondary btn-lg" style={{marginLeft:"100px", marginTop:"60px" , "width":"300px"}}>Women's</button> </a>
<a href='/kidswear'><button type="button" class="btn btn btn-outline-secondary btn-lg" style={{marginLeft:"100px", marginTop:"60px" , "width":"300px"}}>Kid's</button></a>
</div>
<div id="carouselExampleControls" class="carousel slide d-flex float-center" data-bs-ride="carousel">
  <div class="carousel-inner" >
  <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80&h=550" class="d-block " alt="..."style={{marginTop:"40px" }}/>
    </div>
   
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80&h=550" class="d-block " alt="..."style={{marginTop:"40px"}}/>
    </div>
   
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80&h=550" class="d-block " alt="..."style={{marginTop:"40px" }}/>
    </div>
    <div class="carousel-item ">
      <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80&h=550" class="d-block " alt="..." style={{marginTop:"40px"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


</div>

<Footer/>
        </div>
    )
}