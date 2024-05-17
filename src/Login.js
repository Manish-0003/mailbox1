import React from 'react';
import './css/login.css';
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { signin } from './features/userSlice';

function Login() {
    const dispatch = useDispatch();
    const login = ()=>{
        auth.signInWithPopup(provider).then(({user})=>{
            dispatch(signin(({
                displayName:user.displayName,
                photoURL:user.photoUrl,
                email:user.email
            })))

        }).catch(error =>{
            alert(error)
        })
    }
  return (
    <div className='loginwrapper'>
        <div className='login'>
            <img src='https://www.pixel4k.com/wp-content/uploads/2019/06/spiderman-dark-illustration-4k_1560533458.jpg.webp' />
            
            
            <button className='gmail_login' onClick={login}>login with gmail</button>
            </div>
    </div>
  )
}

export default Login;