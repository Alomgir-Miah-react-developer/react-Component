import React from 'react'
import CommonHead1 from './CommonHead1'

import CommonHead2 from './CommonHead2';
import IdoCard from './IdoCard';
import { IoIosPhonePortrait } from "react-icons/io";

import { MdEmail } from "react-icons/md";

import { CiLocationOn } from "react-icons/ci";

import { MdOutlineDateRange } from "react-icons/md";




function AboutComponent() {
  return (
    <>
      <section className='about'>
        <div className="container">
            <div className='w-full bg-slate-50 rounded-[20px] pt-[60px] px-[80px]'>
               <div>
               <CommonHead1 CommonHead1Title='About Me'/>
               </div>
               <div className="about_text mt-[80px] flex ">
                    <div className="img w-[557px] h-[400px] ">
                      <img src="public/img/image.jpg" alt="img" />
                    </div>
                    <div className="all_text gap-[20px] ">
                        <h2 className='text-[26px] font-medium font-Poppins text-[#000]'>Who Am I?</h2>
                        <p className=' text-[16px] font-normal font-Poppins text-[#44566c] mt-[11px]'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                        <p className='text-[16px] font-normal font-Poppins text-[#44566c] mt-[37px]'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                                   
                         <div className="py-[20px]">
                            <h3 className="mb-[15px] text-[28px] font-poppins font-medium">Personal Info</h3>
                            <div className="w-[500px] flex flex-wrap justify-between pr-3 px-3">
                 
                             <div className="phone flex flex-wrap gap-[10px] py-[10px]">
                              <div className="icon w-[44px] h-[44px] bg-[#ffffff] shadow-[2.0px_2.0px_2.0px_rgba(0,0,0,0.38)] rounded-lg flex justify-center items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]"><IoIosPhonePortrait className="text-[22px] font-black text-[#e93b81]" /></div>
                              <div className="text">
                                <span className="block text-[12px] font-poppins font-normal mb-[3px] text-[#44566c]">Phone</span>
                                <p className="text-[14px] font-poppins font-normal text-black">+123 456 7890</p>
                             </div>
                             </div>
                  
                               <div className=" email flex flex-wrap gap-[10px] py-[10px]">
                                <div className="icon w-[44px] h-[44px] bg-[#ffffff] shadow-[2.0px_2.0px_2.0px_rgba(0,0,0,0.38)] rounded-lg flex justify-center items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">< MdEmail className="text-[22px] font-black text-[#6AB5B9]" /></div>
                                <div className="text">
                                  <span className="block text-[12px] font-poppins font-normal mb-[3px] text-[#44566c]">Email</span>
                                  <p className="text-[14px] font-poppins font-normal text-black">Example@Mail.Com</p>
                                </div>
                               </div>

                               <div className=" flex flex-wrap gap-[10px] py-[10px]">
                                <div className="icon w-[44px] h-[44px] bg-[#ffffff] shadow-[2.0px_2.0px_2.0px_rgba(0,0,0,0.38)] rounded-lg flex justify-center items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">< CiLocationOn className="text-[22px] font-black text-[#fd7590]" /></div>
                                <div className="text">
                                  <span className="block text-[12px] font-poppins font-normal mb-[3px] text-[#44566c]">Location</span>
                                  <p className="text-[14px] font-poppins font-normal text-black">Hong Kong China</p>
                                </div>
                               </div>

                               <div className=" flex flex-wrap gap-[10px] py-[10px] pr-[50px]">
                                <div className="icon w-[44px] h-[44px] bg-[#ffffff] shadow-[2.0px_2.0px_2.0px_rgba(0,0,0,0.38)] rounded-lg flex justify-center items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">< MdOutlineDateRange className="text-[22px] font-black text-[#c17ceb]" /></div>
                                <div className="text">
                                  <span className="block text-[12px] font-poppins font-normal mb-[3px] text-[#44566c]">Birthday</span>
                                  <p className="text-[14px] font-poppins font-normal text-black">May 27, 1990</p>
                                </div>
                               </div>
                           </div>
                          </div>
                     </div>
                 </div>
                <div>
                <CommonHead2 CommonHead2Title='What I Do!'/>
                <div className='flex justify-between flex-wrap  '>
                  <IdoCard  cardColor='bg-[#fff4f4]'  cardimg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/design.svg' cardHead='Ui/Ux Design' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                  <IdoCard cardColor='bg-[#eef5fa]'  cardimg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/app-development.svg' cardHead='App Development' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                  <IdoCard cardColor='bg-[#FCF4FF]'  cardimg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/photograph.svg' cardHead='Photography' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                  <IdoCard cardColor='bg-[#FEFAF0]'  cardimg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/webdev.svg' cardHead='Web Development' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                  <IdoCard cardColor='bg-[#FFF0F8]'  cardimg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/management.svg' cardHead='Management' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                  <IdoCard cardColor='bg-[#fff4f4]'  cardimg='https://bostami-bootstrap-nextjs.vercel.app/assets/img/webdev.svg' cardHead='Web Development' cardText='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.' />
                </div>
               </div>
            </div>         
        </div>
      </section>
    </>
  )
}

export default AboutComponent