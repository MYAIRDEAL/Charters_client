import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { FaAngleDoubleDown } from "react-icons/fa";
import { message } from "antd";

import search from '../../src/assets/images/DashBordNav/search.svg'
import hand from '../../src/assets/images/DashBordNav/hande.svg'
import exit from '../../src/assets/images/DashBordNav/exit.svg'
import handburgur from '../../src/assets/images/sidebar/handburgur.svg'
import bookings from '../../src/assets/images/sidebar/bookings.svg'

import { FaUsersGear } from "react-icons/fa6";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSideBrOpen, setSideBrOpen] = useState(false);

  const user = { name: localStorage.getItem('user') };
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate("/login");
  };


  // let isRole = localStorage.getItem('role') == 'operator' ||  localStorage.getItem('role') == 'admin'  ? true : false



  return (
    <div className="flex">
      <div className="flex-1 flex flex-col">
        <header className={` sticky top-0 z-10 w-[100%] bg-dashboard pb-2 text-white shadow-md flex justify-between items-center`}>
          <div className="container  flex items-center space-x-4 mx-10 justify-between">
            <div>
              <h1 className="text-[1.5rem] my-3 font-semibold">
                My<span className="text-hoverColor" >Air</span>Deal
              </h1>

              <h2 className="flex font-semibold">
                Hi , {user.name}
                <img src={hand} alt="" className="w-[1.7rem]" />
              </h2>
              <p>
                Welcome to {localStorage.getItem('role') || 'Control'}  Panel
              </p>
            </div>
            <div>
              {user ? (
                <div className="ml-auto flex flex-wrap items-center justify-center space-x-4">
                  {/* <span className="font-semibold">{user.name}</span> */}
                  <div className="flex  bg-searchbar p-2 rounded-lg w-[15rem]">
                    <img src={search} alt="" className='w-[1rem]' />
                    <input type="text" placeholder="Search anything ..." className="border-none px-1 outline-none bg-searchbar " />
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-white  rounded flex items-center font-semibold justify-center"
                  // className="flex bg-red-700 items-center justify-center h-[2rem]"
                  >
                    Logout
                    <img src={exit} alt="" className="w-[1rem] mx-1 mt-1" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Login
                </button>
              )}
            </div>
          </div>


        </header>


        <div className="flex">


          {isSideBrOpen ? (
            <aside className="min-w-[10rem] sticky top-0 left-0  w-[12rem] bg-gray-200 border shadow-md text-black 1025:h-[82vh] transition-all duration-300 ease-in-out overflow-hidden">
              <div className="p-4 flex justify-between items-center cursor-pointer">
                <h2 className="text-[1rem] font-bold">Menu</h2>
                <img
                  src={handburgur}
                  className="text-2xl w-[1rem]"
                  onClick={() => setSideBrOpen(false)}
                  alt="Toggle Sidebar"
                />
              </div>
              <nav className="mt-6">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to={"/dashboard"}
                      className="px-4 py-2 w-full hover:bg-gray-500 hover:text-white flex items-center transition-all duration-300 ease-in-out"
                    >
                      <MdDashboard className="m-2 min-w-[1rem]" />
                      Dashboard
                    </Link>
                  </li>
                  <li className={`${localStorage.getItem('role') === 'super-admin' ? 'flex' : 'hidden'}`}>
                    <Link
                      to={"/users"}
                      className="px-4 py-2 w-full hover:bg-gray-500 hover:text-white flex items-center transition-all duration-300 ease-in-out"
                    >
                      <FaUsersGear className="m-2" />
                      Users
                    </Link>
                  </li>
                  <li className={`${localStorage.getItem('role') === 'super-admin' ? 'flex' : 'hidden'}`}>
                    <Link
                      to={"/users"}
                      className="px-4 py-2 w-full hover:bg-gray-500 hover:text-white flex items-center transition-all duration-300 ease-in-out"
                    >
                      {/* <FaUsersGear className="m-2" /> */}
                      <img src={bookings} alt="" className="text-black m-2 hover:grayscale w-[1rem]" />
                      Bookings
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>

          ) : (
            <div className="sticky top-0 left-0 w-[4rem] bg-gray-200 border shadow-md text-black 1025:h-[82vh] transition-all duration-300 ease-in-out overflow-hidden">
              <div className="p-4 cursor-pointer">
                <img src={handburgur} className="text-2xl w-[1.5rem]" onClick={() => setSideBrOpen(true)} />
              </div>
              {/* Add your navigation links or other content here */}
            </div>

          )}

          <main className="flex-1 p-6">{children}</main>

        </div>



      </div>
    </div>
  );
};

export default Layout;
