import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();
 
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            resetForm();
            history.push("/");
            
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    const resetForm = () => {
        setName("")
        setPassword("")
        setEmail("")
        setConfPassword("")
      }
    
    return(
        <div className="modal fade" id="registerModal" aria-hidden="true" aria-labelledby="registerModalLabel" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="w-100 modal-title fs-5 text-center" id="registerModalLabel">Register</h1>
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form className="d-flex flex-column justify-content-center" id="customers" onSubmit={Register}>
                        <p>{msg}</p>
                        <label className="form-label p-2" htmlFor="E-Mail"> </label>
                        <input className="p-2 rounded border border-1" id="email" type="email" name="email" placeholder="E-Mail" required="required"
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label className="form-label p-2" htmlFor="Nama"></label>
                        <input className="p-2 rounded border border-1" id="nama" type="text" name="username" placeholder="Nama" required="required" 
                            value={name} onChange={(e) => setName(e.target.value)}/>
                        <label className="form-label p-2" htmlFor="password"> </label>
                        <input className="p-2 rounded border border-1" id="password" type="password" name="password" placeholder="Password" required="required"
                            value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <label className="form-label p-2" htmlFor="confPassword"> </label>
                        <input className="p-2 rounded border border-1" id="confPassword" type="password" name="confPassword" placeholder="Confirm Password" required="required"
                            value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                        <input className="my-3 btn-sign-in text-center rounded" type="submit" value="Register"/>
                    </form>
                    </div>
                    <div className="modal-footer"></div>
                </div>
            </div>
        </div>
    );
}

export default Register;