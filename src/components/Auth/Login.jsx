import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler =(e)=>{
        e.preventDefault()
         handleLogin(email, password) 
        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex item-center justify-center '>
      <div className='border-2 border-emerald-600 p-20 rounded-3xl mt-20 '>
        <form 
        onSubmit={(e)=>{
        
        submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'  >
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
             required className=' placeholder:text-white text-white border-2 bg-transparent outline-none text-xl border-emerald-600 py-4 px-5 rounded-full  ' type='email' placeholder='Enter Your Email' />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required className=' placeholder:text-white text-white border-2 bg-transparent outline-none text-xl border-emerald-600 py-4 px-5 rounded-full mt-4 ' type='password' placeholder='Enter Your Password' />
            <button className=' placeholder:text-white  border-2  outline-none text-xl border-emerald-600 py-4 px-5 rounded-full bg-emerald-600 border-none text-fuchsia-100 mt-5'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
