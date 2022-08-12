import React, { useContext } from 'react'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import { Context } from '../context/Context';
import "../style.css"
import { FaUser } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';

export default function SideNav() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
    return (
        <div>
            <Navbar variant="dark" bg="dark" expand="lg" className='sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg'>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <div className="text-center">
                  <h1 className="wozby" style={{"fontSize":"50px","fontFamily":"Lucida Handwriting","color":"white"}}>Wozby</h1>
                </div>
                <Container fluid>
                    <Navbar.Collapse id="navbar-dark-example">
                        <div className="navbar-collapse row m-auto ">
                            <div className="navbar-nav col-md-10">
                                <a href="/dash" className="nav-item dash-link nav-link active bg-secondary"> Dashboard</a>
                                <a href="/cloth" className="nav-item nav-link dash-link"> Cloths Manage </a>
                                <a href="/dash" className="nav-item nav-link dash-link"> Settings </a>
                                <a href="/dash" className="nav-item nav-link dash-link"> Mode </a>    
                            </div>
                            
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container-fluid">


                <div className="row">
                    <div className="col-md-3">
                        {/* <h1 className="fredoka"> Hello Jhon ! </h1> */}
                    </div>
                    <div className="col-md-7">
                        <br />
                        <h1 className="fredoka"> Hello Admin ! </h1>
                    </div>
                    <div className="col-md-2 " >
                        <br />
                        <FaBell/>&nbsp;
                        <a href="/" className="btn btn-dash d-inline " onClick={handleLogout}> <FaUser/> <span style={{ color: "white" }}>{user && "LOGOUT"}</span></a>
                    </div>
                  

                </div>
            </div>

        </div>
    )
}