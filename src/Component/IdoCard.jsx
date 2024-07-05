import React from 'react'

function IdoCard({cardimg, cardHead, cardText, cardColor}) {
  return (
    <>
        <div className={`w-[397px] h-[195px] p-5 px-5 pb-[15px] rounded-[12px] mt-[30px] flex gap-5 ${cardColor}`}>
            <div className="img_col w-[57px]">
                <img className='w-full' src={cardimg} alt="card_img" />
            </div>
            <div >
               <h2 className='text-[20px] font-medium font-Poppins text-[#000] mb-[10px] '>{cardHead}</h2>
               <p className='text-[16px] font-normal font-Poppins text-[#44566c] leading-[30px] w-[255px]'>{cardText}</p>
            </div>
        </div>
    </>
  )
}

export default IdoCard