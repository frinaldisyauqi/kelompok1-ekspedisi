import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Register from "./Register";
import { useSignIn } from 'react-auth-kit';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const signIn = new useSignIn();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/login', {
                email: email,
                password: password
            })
            .then(res => {
                signIn({
                    token: res.data.token, 
                    tokenType: "Bearer",
                    expiresIn: 3600,
                    authState:{ roleUser: res.data.roleUser, nama: res.data.nama }
                })
            });
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
    <div>
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="w-100 modal-title fs-5 text-center" id="loginModalLabel">Sign in</h1>
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <section className="menu py-0" id="menu">
                            <div className="container" data-aos="fade-up">
                                <nav>
                                <h2 className="w-100 text-center fs-6">Sign in sebagai :</h2>
                                <div className="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist" data-aos="fade-up" data-aos-delay="200">
                                    <button className="nav-link active" id="nav-manager-tab" data-bs-toggle="tab" data-bs-target="#nav-manager" type="button" role="tab" aria-controls="nav-manager" aria-selected="true">Admins</button>
                                    <button className="nav-link" id="nav-customer-tab" data-bs-toggle="tab" data-bs-target="#nav-customer" type="button" role="tab" aria-controls="nav-customer" aria-selected="false">Customers</button>
                                </div>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-manager" role="tabpanel" aria-labelledby="nav-manager-tab" tabIndex="-1">
                                    <form className="d-flex flex-column justify-content-center" id="managers" onSubmit={Auth}> 
                                        <label className="form-label p-2" htmlFor="E-Mail"> </label>
                                        <input className="p-2 rounded border border-1" id="email" type="text" name="email" placeholder="E-Mail" required="required"
                                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        <label className="form-label p-2" htmlFor="password"> </label>
                                        <input className="p-2 rounded border border-1" id="password" type="password" name="pass" placeholder="Password" required="required"
                                            value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        <label className="form-label p-2" htmlFor="Cabang Code"> </label>
                                        <input className="p-2 rounded border border-1" id="cabangKode" maxLength="8" type="text" name="cabangKode" placeholder="Kode Cabang"/>
                                        <input className="mt-3 btn-sign-in text-center rounded" type="submit" data-bs-dismiss="modal" aria-label="Close" value="Sign in"/>
                                    </form>
                                    </div>
                                    <div className="tab-pane fade" id="nav-customer" role="tabpanel" aria-labelledby="nav-customer-tab" tabIndex="-1">
                                    <form className="d-flex flex-column justify-content-center" id="customers" action="/login" method="POST"> 
                                        <label className="form-label p-2" htmlFor="E-Mail"> </label>
                                        <input className="p-2 rounded border border-1" id="email" type="email" name="email" placeholder="E-Mail" required="required"/>
                                        <label className="form-label p-2" htmlFor="password"> </label>
                                        <input className="p-2 rounded border border-1" id="password" type="password" name="pass" placeholder="Password" required="required"/>
                                        <input className="my-3 btn-sign-in text-center rounded" type="submit" value="Sign in"/>
                                        <div className="modal-footer">
                                        <p>Tidak punya akun ? <a href="#registerModal" data-bs-toggle="modal">Register</a></p>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                </nav>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <Register/>
    </div>
    )
}

export default Login