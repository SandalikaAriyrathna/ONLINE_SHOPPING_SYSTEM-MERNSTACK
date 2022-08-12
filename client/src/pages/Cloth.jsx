import React from 'react'
import "../style.css"
import { Link } from 'react-router-dom'
import SideNav from '../Components/SideNav';
import Addcloth from '../Components/modal/cloths/addcloth';

export default function Cloth() {


    return (
        <div>


            <br />
            <div className="row text-right inline">
                <SideNav />

                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <br />
                   
                </div>
            </div>

            <br />
            <div className="row text-center inline">
                <div className="col-md-2"></div>
                <div className="col-md-10 d-flex justify-content-center">

                    <Addcloth />

                    <Link to="/clothview" className="btn btn-dashb d-flex align-items-center">
                            View Cloth Details
                        </Link><br/><br/>

                </div>

            </div>
        </div>
    )
}