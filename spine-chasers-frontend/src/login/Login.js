import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className='login-wrapper'>
            <h1>Log In</h1>
            <form>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' required></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' required></input>
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
            
        </div>
    )
}