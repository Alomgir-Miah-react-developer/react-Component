import React from 'react'
import { Link } from 'react-router-dom'



function SocialButton({social_icons, social_links}) {
  return (
   <>
    <Link className='w-[40px] h-[40px] bg-[#f3f6f6] rounded-lg flex justify-center items-center text-xl hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]' to = {social_links}>
    {social_icons}

    </Link>
   </>
  )
}

export default SocialButton