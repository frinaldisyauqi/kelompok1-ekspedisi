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
                                <form className="d-flex flex-column justify-content-center" id="managers" onSubmit={Auth}> 
                                    <label className="form-label p-2" htmlFor="E-Mail"> </label>
                                    <input className="p-2 rounded border border-1" id="email" type="text" name="email" placeholder="E-Mail" required="required"
                                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <label className="form-label p-2" htmlFor="password"> </label>
                                    <input className="p-2 rounded border border-1" id="password" type="password" name="pass" placeholder="Password" required="required"
                                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <input className="my-3 btn-sign-in text-center rounded" type="submit" data-bs-dismiss="modal" aria-label="Close" value="Sign in"/>
                                    <div className="modal-footer">
                                        <p>Tidak punya akun ? <a href="#registerModal" data-bs-toggle="modal">Register</a></p>
                                    </div>
                                </form>
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