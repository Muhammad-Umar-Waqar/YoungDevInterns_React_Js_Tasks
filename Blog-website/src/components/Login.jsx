import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin } from '../store/authSlice' 
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'


function Login() { 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
  
    const login = async(data)=>{
        setError("")
        try{
            const session = await authService.login(data) // Now if this session is present then it's mean user is logged in 
            if(session){                                  // and session is not present then user isn't logged in.
                const userData = await authService.getcurrentUser()
                if (userData) dispatch(authLogin(userData)) // If this condition is sucessfull then its mean user logged in 
                navigate('/')                              // Succcessfully so we navigate user to Home automatically 
                console.log("userData from: LOGIN", userData)
            }                                            // If we use Link then it don't navigate automatically
        }
        catch(error){
            setError(error.message)
        }
    }

  return (
    <div  className='flex items-center justify-center w-full ' >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 m-20 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="text-black  font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && 
        <p className="text-red-600 mt-8 text-center"> {error} </p> }
        <form onSubmit={handleSubmit(login)}  className='mt-8'>
            <div className="space-y-5">
                <Input
                
                placeholder='Enter your Email'
                type = "email"
                {    ...register("email", 
                {
                    required : "true",
                    validate : {
                        matchPattern : (value) => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(value) ||  "Email Address must be a valid Adsress"
                    }
                })   }

                />
                <Input
                type = "password"
                placeholder = "Enter your password"
                {...register("password", {
                    required : "true",
                })}
               
                />
                <Button
                type = "submit"
                className='w-full text-black border-black'
                >Login</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login