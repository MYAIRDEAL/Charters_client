import React, { useEffect, useState } from 'react';
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import RegisterForm from '../components/Categories/RegisterForm';
import LoginImg from '../assets/images/Login/Login_Image.svg'

const Login = () => {
  const navigate = useNavigate();





  // Sending Login Payload 

  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('broker');
  const [isLogin, setIsLogin] = useState(false)

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
      role,
    };

    try {

      if (formData.role.length > 0) {
        setIsLogin(true)
        let Response = await axios.post('http://localhost:8000/api/admin/login', formData);
        // let Response = await axios.post('https://privatejetcharters-server-ttz1.onrender.com/api/admin/login', formData);
        setIsLogin(false)
        return (Response)
      }
      else {
        setIsLogin(false)
        message.error('Select User Role');
      }

      // message.success('User Registered !!!')
    }
    catch (error) {
      // message.error(error);
    }
    return (formData);
  };


  useEffect(() => {
    return () => {
      setIsLogin(false)
    }
  }, [])

  const onFinish = async (values) => {
    try {
      const response = await handleSubmit(values);
      if (response) {
        localStorage.setItem('admin', true);
        console.log(response)
        localStorage.setItem('role', response?.data.details.role)
        localStorage.setItem('user', response?.data.details.name)


        // message.success(response.data.message);
        // console.log('suhail')

        navigate("/dashboard");

      } else {
        setIsLogin(false)
        message.error(response.data.message);
      }
    } catch (err) {
      setIsLogin(false)
      message.error(err.response?.data?.message || "Check Email or Password");
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };




  return (
    <div className='relative min-h-screen'>
      {/* Loading Overlay */}
      {
        isLogin && (
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>
        )
      }


      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-5 ">




        {/* Gray Background Div for Form and Image */}
        <div className=" w-full md:w-[70%] relative z-20 bg-opacity-55 bg-gray-400  rounded-lg justify-between flex flex-col md:flex-row">


          <div className='h-[10rem] w-[10rem] blur-2xl bg-dashboard absolute mr-10 mt-10 left-[50%] rounded-full top-0 z-10 animate-move-up-down'>
          </div>
          <div className='h-[10rem] w-[10rem] blur-2xl bg-hoverColor bottom-0 mr-10 mb-10 right-0 rounded-full absolute z-10 animate-move-left-right'>
          </div>



          {/* Image Section */}
          <div className="w-full md:w-[45%] hidden md:flex justify-center overflow-hidden">
            <img src={LoginImg} alt="Login" className="w-full  rounded-lgh-full object-cover" />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-[50%] 700:pr-10 z-20 px-5 md:px-10 py-5 flex flex-col items-center justify-center">
            <h1 className="text-xl md:text-2xl font-semibold text-hoverColor pb-5 md:pb-10 text-center">
              Holla, Welcome Back!
            </h1>

            <form className="w-full" onSubmit={onFinish}>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 text-sm border rounded focus:outline-none"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-5 relative">
                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    className="w-full p-2 text-sm border rounded focus:outline-none"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* Password visibility toggle button */}
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-2 top-1 flex items-center text-gray-500"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      {!passwordVisible ? (
                        <>
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                          <line x1="2" y1="2" x2="22" y2="22"></line>
                        </>
                      ) : (
                        <>
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </>
                      )}
                    </svg>
                  </button>
                </div>
                <span className="text-right absolute bottom-0 top-12 pt-1 text-hoverColor hover:cursor-pointer mt-2">
                  <Link to="/forgotpassword" className="hover:underline">
                    Forgot Password
                  </Link>
                </span>
              </div>

              <div className="mb-6">
                <label htmlFor="role" className="block mb-1 text-sm font-medium text-gray-700">
                  Select Role
                </label>
                <select
                  id="role"
                  className="w-full p-2 text-sm border cursor-pointer rounded focus:outline-none"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="" >Select User Role</option>
                  <option value="broker" >Broker</option>
                  <option value="operator">Operator</option>
                  <option value="user-admin">User Admin</option>
                  <option value="super-admin">Super Admin</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-hoverColor hover:scale-95 text-white text-sm rounded transition"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>



    </div>
  );

};

export default Login;
