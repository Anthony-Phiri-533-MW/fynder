import React from 'react'

const Login = () => {
  return (
    <div>
        <div>
            <h1>login</h1>
        </div>

        <div>
            <label>Email</label>
            <input type='email' placeholder='Your email' />

            <label>Password</label>
            <input type="password" placeholder='Your Password' />

            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Login</button>
        </div>
    </div>
  )
}

export default Login