import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './css/login.css';
import { signin } from "./features/userSlice";
import { auth } from "./firebase";

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                if (user) {
                    console.log("User data:", user); // Log user data for debugging
                    dispatch(signin({
                        displayName: user.displayName || 'No display name',
                        photoURL: user.photoURL || '',
                        email: user.email || 'No email'
                    }));
                } else {
                    console.error('No user information available');
                }
            })
            .catch(error => {
                setError(error.message);
                console.error("Error signing in:", error);
            });
    }

    return (
        <div className='loginwrapper'>
            <div className="login">
                <img src='https://www.pixel4k.com/wp-content/uploads/2019/06/spiderman-dark-illustration-4k_1560533458.jpg.webp' alt="Spiderman" />
                <div className="login__form">
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className='error'>{error}</p>}
                    <button className="gmail_login" onClick={login}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
