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
                <img style={{"height":"130px"}} src='data:image/jpeg;base64,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' className='w-100' alt='' />
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
                <img style={{"height":"130px"}} src='data:image/jpeg;base64,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' className='w-100' alt=''/>
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
                <img style={{"height":"130px"}} src='https://i.pinimg.com/736x/9c/4a/de/9c4adea01a881eac6f642b846121a735--boutique-shop-interior-boutique-store-front.jpg' className='w-100' alt='' />
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