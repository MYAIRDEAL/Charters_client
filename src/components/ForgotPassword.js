import React, { useState } from 'react'

import left_arrow from '../assets/images/Reset/left_arrow.svg'
import lock from '../assets/images/Reset/Lock.svg'
import { message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

function ForgotPassword() {



    const [email, setEmail] = useState('');
    let navigate = useNavigate()


    const onFinish = async (values) => {
        // try {
        //     // const response = await handleSubmit(values);
        //     // if (response) {

        //         navigate("/dashboard");

        //     } else {
        //         message.error(response.data.message);
        //     }
        // } catch (err) {
        //     message.error(err.response?.data?.message || "An error occurred during login.");
        // }

        console.log(values)
    };


    return (


        <div className='flex justify-center h-screen p-10'>


            <div className='w-[90%] bg-selectType rounded-md p-10 flex flex-col  justify-center gap-10'>

                <div className='flex items-center justify-center'>
                    <img src={lock} alt="" className='bg-gray-400 p-[0.5rem] rounded-md' />
                </div>
                <div className='flex flex-col mb-10 text-center'>
                    <h1 className='text-[1.5rem] font-semibold text-hoverColor tracking-wider'>Forgot Password?</h1>
                    <p>
                        No worries, we'll send you reset instruction
                    </p>
                </div>

                <div className='flex justify-center'>
                    <div className='w-[90%] 600:w-[40%]'>
                        <form className="w-full" onSubmit={onFinish}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1  text-sm font-medium text-gray-700">
                                    Enter your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 text-sm border rounded focus:outline-none"
                                    placeholder="uname@gmail.com"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>



                            <div className='flex flex-col gap-5'>
                                <button
                                    type="submit"
                                    className="w-full  font-semibold py-2  bg-hoverColor text-white text-sm rounded transition"
                                >
                                    Rset Password
                                </button>
                                <button
                                    type="submit"
                                    className="w-full  font-semibold py-2 text-hoverColor flex items-center justify-center border-[2px] border-hoverColor text-sm rounded transition"
                                >
                                    <img src={left_arrow} alt="" className='px-3 w-11' />
                                    <Link to={'/login'}>
                                    Back to Login
                                    </Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>


        </div>


    )
}

export default ForgotPassword