import React from 'react'

function CommonHead1({CommonHead1Title}) {
  return (
    <>
      <h2 className='text-[40px] font-bold font-roboto text-[#000] relative '>{CommonHead1Title} <span className="absolute top-[50%] left-[22%] translate-y-[50%] w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-[5px]  "></span> </h2>
    </>
  )
}

export default CommonHead1

{/* <span className='w-[200px] h-[3px] bg-red-500'></span> */}