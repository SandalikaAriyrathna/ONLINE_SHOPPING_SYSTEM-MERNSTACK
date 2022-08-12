
import React from 'react'
import "../index.css"
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import axios from "axios";

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { isFetching, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
     
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });

    }
  };



  return (
    <div>


      <section class=" bg-secondary bg-gradient" >

        <div class="p-5 bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')", height: "300px" }}></div>

        <div className="row d-flex justify-content-center">
          <div class="col-md-6 card mx-4 mx-md-5 shadow-5-strong" style={{
            marginTop: "-100px", background: " hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(30px)"
          }}>


            <div class="card-body py-5 px-md-5">

              <div class="row d-flex justify-content-center">
               
                  <h2 class="fw-bold mb-5 text-center">Log into Your Wozby Account</h2>
                  <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                        aria-controls="pills-login" aria-selected="true">User Login</a>
                    </li>
                   
                  </ul>

                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                      <form className="loginForm" onSubmit={handleSubmit}>
                        <div class="text-center mb-3">
                          <p>Sign in with:</p>
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

                        <p class="text-center">or:</p>


                        <div class="form-outline mb-4">
                          <input type="text" id="loginName" class="form-control" ref={userRef} />
                          <label class="form-label" for="loginName">Email or username</label>
                        </div>


                        <div class="form-outline mb-4">
                          <input type="password" id="loginPassword" class="form-control" ref={passwordRef} />
                          <label class="form-label" for="loginPassword">Password</label>
                        </div>


                        <div class="row mb-4">
                          <div class="col-md-6 d-flex justify-content-center">

                            <div class="form-check mb-3 mb-md-0">
                              <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                              <label class="form-check-label" for="loginCheck"> Remember me </label>
                            </div>
                          </div>

                          <div class="col-md-6 d-flex justify-content-center">

                            <a href="#!">Forgot password?</a>
                          </div>
                        </div>


                        <button type="submit" value="Login" class="btn btn-primary btn-block mb-4" style={{ "width": "650px" }} disabled={isFetching}>Sign in</button>


                        <div class="text-center">
                          <p>Not a member? <a href="signup">Register</a></p>
                        </div>
                      </form>
                    </div>

                  </div>
               
              </div>


            </div>

          </div>
        </div>
      </section>



    </div>
  )
}