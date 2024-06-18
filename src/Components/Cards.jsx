import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen px-16 flex items-center gap-5 bg-black'>
        <div className='cardcontainer w-1/2 h-[60vh]'>
         <div className='relative w-full h-full bg-[#004D43] rounded-xl flex justify-center items-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-5 bottom-8 border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-full px-5 py-1'>&copy;2019-2024</button>
         </div>
        </div>
        <div className='cardcontainer w-1/2 h-[60vh] flex gap-5'>
         <div className='relative w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-5 bottom-8 border-[1px] rounded-full px-5 py-1'>RATING 5.0 ON CLUTCH</button>
         </div>
         <div className='relative w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center'>
          <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute left-5 bottom-8 border-[1px] rounded-full px-5 py-1'>BUISNESS BOOTCAMP ALUMINI</button>
         </div>
        </div>
    </div>
  )
}

export default Cards