import React from 'react'
import './Register.css'

export default function Register() {
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
                    <label htmlFor='username'>Username</label>
                    <input type='username' id='username' name='username' required></input>
                </div>
                <div>
                    <label htmlFor='firstname'>First Name</label>
                    <input type='firstname' id='firstname' name='firstname' required></input>
                </div>
                <div>
                    <label htmlFor='lastname'>Last Name</label>
                    <input type='lastname' id='lastname' name='lastname'></input>
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}