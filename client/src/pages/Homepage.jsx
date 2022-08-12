import React  from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import {
    MDBContainer,
    MDBBtn,
  } from 'mdb-react-ui-kit';


import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBView,
    MDBAnimation
  } from "mdbreact";
import { useEffect } from 'react';


import { useContext } from "react";
import { Context } from "../context/Context";

export default function Homepage() {
  const { user } = useContext(Context);
  useEffect(() => {
    console.log(user)
  }, []);
    return (
        <div>
              <Header/>
          <div
            className="hpimage"
            style={{
            backgroundImage: "url('https://img.freepik.com/free-vector/realistic-studio-lights-empty-background-design_1017-27233.jpg?w=2000')",height: "110vh"
            }}
            >
              <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="7"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s"style={{"marginTop":"250px"}}>
                    <h1 className="h1-responsive font-weight-bold mt-sm-5"  >
                    Always  Wear your invisible crown
                    </h1>
                    <hr className="hr-light" />
                    <h5 className="mb-4">
                    Upload your favourite Wozby outfit on instagram with
                   #lovewozby for a chance to be featured.
                    </h5>
                    <h6>
                    The amazing rise of online clothing stores selling fast fashion — you know, cheap, trendy garments made to be worn one season only — has made it tough to be a budget fashionista. I say that because a budget fashionista is not the gal who buys on price alone.
                    </h6>
                    <MDBBtn color="white">Download</MDBBtn>
                    <MDBBtn outline color="white">
                      Learn More
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                <div id="carouselExampleControls" class="carousel slide d-flex float-center" data-bs-ride="carousel">
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80&h=700" class="d-block " alt="..." style={{"marginBottom":"60px","marginTop":"40px" }}/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80&h=700" class="d-block " alt="..."style={{"marginBottom":"60px","marginTop":"40px"  }}/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/flagged/photo-1559502867-c406bd78ff24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGtpZHMlMjBzaG9wcGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80&h=700" class="d-block " alt="..."style={{"marginBottom":"60px","marginTop":"40px"  }}/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1523483856492-336417234ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80&h=700" class="d-block " alt="..."style={{"marginBottom":"60px","marginTop":"40px"  }}/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80&h=700" class="d-block " alt="..."style={{"marginBottom":"60px","marginTop":"40px"  }}/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1617627057301-7b03d1097672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80&h=700" class="d-block " alt="..."style={{"marginBottom":"60px","marginTop":"40px"  }}/>
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
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
             </div>
              <Footer/>
             

        </div>
          
    )
}