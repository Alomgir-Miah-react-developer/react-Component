import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { VscHome } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa";
import { TfiAgenda } from "react-icons/tfi";
function Navbar() {
  return (
    <>
        <nav className=''>
            <div className="container mt-[30px]">
                <div className="menu_row p-5 flex justify-between flex-wrap">
                    <div className="logo_col">
                        <Link to = '#'><img src="img/web-logo.png" alt="logo" /></Link>
                    </div>
                    <div className="menu">
                        <ul className='flex flex-wrap gap-4 text-[13px] font-medium font-Poppins '>
                        <NavLink  to="/" className={({ isActive,  }) =>  isActive ? "px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg" : "text-inherit px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><VscHome className='text-xl'/>Home</NavLink>
                        <NavLink  to="/about" className={({ isActive,  }) =>  isActive ? "px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg" : "text-inherit px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><IoPersonOutline className='text-xl'/>About</NavLink>
                        <NavLink  to="/resume" className={({ isActive,  }) =>  isActive ? "px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg" : "text-inherit px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><FiFileText className='text-xl'/>Resume</NavLink>
                        <NavLink  to="/works" className={({ isActive,  }) =>  isActive ? "px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg" : "text-inherit px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><IoBriefcaseOutline className='text-xl'/>Works</NavLink>
                        <NavLink  to="/blogs" className={({ isActive,  }) =>  isActive ? "px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg" : "text-inherit px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><FaBloggerB className='text-xl'/>Blogs</NavLink>
                        <NavLink  to="/contact" className={({ isActive,  }) =>  isActive ? "px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg" : "text-inherit px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><TfiAgenda className='text-xl'/>Contact</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav> 
    </>
  )
}

export default Navbar
