import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import {
    MDBContainer,
  } from 'mdb-react-ui-kit';


import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBView,
    MDBAnimation
  } from "mdbreact";

export default function AboutUs() {
    return (
        <div>
              <Header/>
         
              <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                

                <MDBCol md="6" xl="5" className="mt-xl-5">
    

<div
            className="hpimage"
            style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')",height: "80vh", "marginBottom":"40px"
            }}
            ></div>
 
                </MDBCol>
                <MDBCol
                  md="7"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s"style={{"marginTop":"100px"}}>
                    <h1 className="h1-responsive font-weight-bold mt-sm-5"  >
                    Always  Wear your invisible crown
                    </h1>
                    <hr className="hr-light" />
                    <h6>
                    Wozby Founded in 2017, Today it has seen rapid progress becoming one of the
                     leading department stores in Sri Lanka. With outlets located in Piliyandala, Wattala, Malabe, Nugegoda,
                      Maharagama, Colombo (exclusive), Kandy and at One Galle Face Mall, Wozby is a one-stop shopping 
                      destination that offers an array of items ranging from clothing, homeware, Toys, Baby care and much more. Over 
                      the years, Wozby has successfully earned the trust of its loyal customers for
                     its commendable quality of products and service providing full value for money.
                    </h6>

                    <a className='btn btn-outline-light btn-floating m-1' style={{"color":"black"}}>
                        <MDBIcon fab icon='twitter' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1'style={{"color":"black"}}>
                        <MDBIcon fab icon='google' />
                        </a>
                        <a className='btn btn-outline-light btn-floating m-1'style={{"color":"black"}}>
                        <MDBIcon fab icon='instagram' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' style={{"color":"black"}}>
                        <MDBIcon fab icon='linkedin-in' />
                        </a>

                        <a className='btn btn-outline-light btn-floating m-1' style={{"color":"black"}}>
                        <MDBIcon fab icon='github' />
                        </a>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
          
              <Footer/>
             

        </div>
          
    )
}