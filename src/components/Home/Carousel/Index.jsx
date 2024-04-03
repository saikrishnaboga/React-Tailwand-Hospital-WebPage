import React from 'react'

const Carousel = () => {
  return (
    <div className='p-8 pl-24 flex space-x-16'>
        <div className='w-64 text-center  rounded-lg shadow-xl p-4'>
            <img className='h-44 p-9' src="/carousel/ellipse9.png" alt="doctors"/>
            <p className='bg-[#0057A6] text-white mb-1'>CARDIAC SURGERY</p>
            <p >Dr.Sreekanth Yendem</p>
        </div>
        <div className='w-64 text-center  rounded-lg shadow-xl p-4'>
            <img className='h-44 p-9' src="/carousel/ellipse8.png" alt="doctors"/>
            <p className='bg-[#0057A6] text-white mb-1'>LABARATORY MEDICINE</p>
            <p >Dr.Ramakanta Panda</p>
        </div>
        <div className='w-64 text-center  rounded-lg shadow-xl p-4'>
            <img className='h-44 p-9' src="/carousel/injuction.png" alt="doctors"/>
            <p className='bg-[#0057A6] text-white mb-1'>LABORATORY MEDICINE</p>
            <p >Sr.Consultant Cardiology</p>
        </div>
        <div className='w-64 text-center  rounded-lg shadow-xl p-4'>
            <img className='h-44 p-9' src="/carousel/treatment.png" alt="doctors"/>
            <p className='bg-[#0057A6] text-white mb-1'>CARDIOLOGY</p>
            <p >Sr.Consultant Cardiology</p>
        </div>
        
    </div>
  )
}

export default Carousel
