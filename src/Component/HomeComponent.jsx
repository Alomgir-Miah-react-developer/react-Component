import React from 'react'
import { Link } from 'react-router-dom'
import SocialButton from './SocialButton'
import { LuHardDriveDownload } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



function HomeComponent() {
  return (
    <>
      <div className="container ">
        <div className="personal_text px-[30px] flex flex-col flex-wrap items-center ">
            <div className="img mt-[117px] w-[240px]">
                <img className='w-full h-[240] rounded-full' src="public/img/profile2.png" alt="img" />
            </div>
            <div className='info flex flex-col items-center flex-wrap'>
                <h2><Link className="text-[26px] font-Poppins font-medium text-black mt-[38px] mb-2" to='#'>Alomgir Miah</Link></h2>
                 <p className="text-[14px] font-Poppins font-medium text-[#7b7b7b] mb-[15px]">Ui/Ux Designer</p> 
                    <div className='flex justify-center gap-[17px] mt-2 mb-[30px]'>
                        <SocialButton social_links={'https://www.facebook.com/profile.php?id=61551685600240'} social_icons={<FaFacebookF className='  text-[#1773EA]  hover:text-white'/>} />
                        <SocialButton social_links={'https://x.com/Rezwan971'} social_icons={<FaTwitter className='  text-[#1773EA] hover:text-white' />} />
                        <SocialButton social_links={'https://www.instagram.com/'} social_icons={<FaInstagram className='text-[#1c9cea] hover:text-white' />} />
                        <SocialButton social_links={'https://www.linkedin.com/in/md-rezwan-islam-4886ba2a8/'} social_icons={<FaLinkedinIn className='text-[#144679] hover:text-white' />} />
                     </div> 
                     <div className="button">
                        <Link className='flex justify-center items-center gap-[5px] px-[30px] py-3  text-[18px] text-[#F3F6F6] font-poppins font-normal bg-gradient-to-r from-[#FA5252] to-[#DD2476] border-transparent border-[1px] border-solid rounded-[30px]' to = '#' download ><LuHardDriveDownload />Download Cv</Link>
                     </div>
            </div>        
        </div>
      </div>
    </>
  )
}

export default HomeComponent
