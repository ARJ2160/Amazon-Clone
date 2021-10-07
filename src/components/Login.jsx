import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { auth } from '../firebase';
import "../Login.css"

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const mail = e => {
        setEmail(e.target.value);
    }

    const pass = e => {
        setPassword(e.target.value);
    }

    const signIn = e => {
        e.preventDefault();

        //Firebase Login
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(err => console.error(err));
    }

    const register = e => {
        e.preventDefault();

        //Firebase Register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(err => { alert(err.message) })   
    }
    
    return (
        <div className="login">
            <Link to="/">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                className="login__logo"
            />
            </Link>

            <div className="login__container">
                
                <h1>Sign In</h1>
                <form action="" autoComplete="off">
                    <h5>Email</h5>
                    <input
                        value={email}
                        type="mail"
                        onChange={mail}
                    />
                    
                    <h5>Password</h5>
                    <input
                        value={password}
                        type="password"
                        onChange={pass}
                    />

                    <button
                        type="submit"
                        className="login__signInButton"
                        onClick={signIn}
                    >Sign In
                    </button>
                </form>
                <p>By Signing In you agree to the AMAZON FAKE CLONE Condition of Use & Sale. Please see our Privacy Notice, out Cookies Notice and our Interest-Based Ads Notice</p>

                <button
                    onClick={register}
                    className="login__registerButton">Create Your Amazon Account
                </button>

            </div>
        </div>
    )
}

export default Login
