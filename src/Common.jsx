import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return(
    <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid ">
        <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">

              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                <h1>
                  {props.name}<strong className="brand-name"> Mindway Technologies</strong>
                </h1>
                <p className="my-3">We are the team of developer making websites</p>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn btn-outline-primary">{props.btname}</NavLink>
                </div>

              </div>
              

              <div className="col-lg-6 order-1 order-lg-2  header-img">

                <img width="400" height="600" src={props.imgsrc} className="img-responsive animated" alt="Common img" />

              </div>
              </div>

            </div>

        </div>

    </div>

    </section>
    </>
  )
}


export default Common;
