import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img style={{"height":"130px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORIoyDvFEC6ctQDMpPgYwhB1UFe5opyFtaw&usqp=CAU' className='w-100' alt='' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img style={{"height":"130px"}} src='https://as2.ftcdn.net/v2/jpg/01/43/62/95/1000_F_143629503_Lf15p6N6YTBLKlJsWI7GYca3zxAqHy7T.jpg' className='w-100' alt='' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img style={{"height":"130px"}} src='https://as1.ftcdn.net/v2/jpg/01/43/63/24/1000_F_143632490_vW69GhVBkSzQrS33jxtTaqNTUAPupXrb.jpg' className='w-100' alt=''/>
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img style={{"height":"130px"}} src='https://img.freepik.com/premium-photo/luxury-shopping-mall-department-clothing-store-interior_271317-1371.jpg?w=996' className='w-100' alt='' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img style={{"height":"130px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDIzDu-tSOG2MM9OqP0R_qWhHUW-4AjeWnbw&usqp=CAU' className='w-100' alt='' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img style={{"height":"130px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJBUXDNKB1d9E39ll73DNgZkWYdN7RT8Dvg&usqp=CAU' className='w-100' alt='' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>

        <section className='mb-4 mt-4'>
         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='facebook-f' />
         </a>

         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='twitter' />
         </a>

         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='google' />
         </a>
         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='instagram' />
         </a>

         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='linkedin-in' />
         </a>

         <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
           <MDBIcon fab icon='github' />
         </a>
       </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Wozby.com
        </a>
      </div>
    </MDBFooter>
    
    
     
   

   
  
  );
}