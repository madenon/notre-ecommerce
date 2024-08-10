import React, { useState } from 'react'
import logo from "../assest/signin.gif";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const handleChnage = (e) =>{
        const {name, value} = e.target

        setData((prev) =>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    console.log("Hi", data)
    const handleSubmit = (e) =>{
        e.preventDefault()

    }
    return (
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div
                    className='bg-white p-5   w-full max-w-sm mx-auto'>
                    <div className='w-10 h-10 mx-auto'>
                        <img src={logo} alt='login-icon' />
                    </div>
                    <form className='pt-6' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email:</label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                className='w-full outline-none bg-transparent' type='email'
                                 placeholder='Votre Email..'
                                 name='email' 
                                 value={data.email}
                                 onChange={handleChnage} 
                                 
                                 />

                            </div>
                        </div>
                        <div>
                            <label>Mot de passe:</label>
                            <div className='bg-slate-100 p-2 flex '>
                                <input className='w-full outline-none bg-transparent' 
                                type={showPassword ? "text" : "password"}
                                 placeholder='Votre mot de passe ..' 
                                 name='password'
                                 value={data.password}
                                 onChange={handleChnage}
                                 />

                                <div className='cursor-pointer text-lg' 
                                onClick={() =>setShowPassword((prev) =>!prev)}>
                                    <span>
                                        {
                                            showPassword ? (

                                                <FaRegEye />
                                            ) : (
                                                <IoEyeOffSharp />

                                            )
                                        }
                                    </span>

                                </div>
                            </div>
                            <Link to={'/forget-password'} className='block w-fit ml-auto hover:underline hover:text-red-400'>
                            Mot de passe oublié 😞

                            </Link>
                        </div>
                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[140px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>
                            Connexion
                        </button>
                    </form>
                    <p className='my-5'>Vous n'avez pas de compte ? <Link to={'/sign-up'} className=' text-red-600 hover:underline hover:text-red-700'>Céer un compte</Link> </p>
                </div>
            </div>

        </section>
    )
}

export default Login