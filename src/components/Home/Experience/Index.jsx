import React from 'react'

const Experience = () => {
  return (
    <div  className='p-8 pl-16 flex'>
        <div className='flex flex-wrap w-3/6  pl-16'>
            <img className='h-80' src="./Exeperience/doctor-1.png" alt="Doctor-image"/>
            <img className='h-80' src="./Exeperience/doctor-2.png" alt="Doctor-image"/>
            <img className='h-80' src="./Exeperience/doctor-3.png" alt="Doctor-image"/>
            <img className='h-80' src="./Exeperience/doctor-4.png" alt="Doctor-image"/>
        </div>
        <div className='flex flex-col justify-center items-start w-2/4 pl-20'>
            <h1 className="font-bold text-4xl" >30 Years More Services <br/> Experience</h1>
            <p className='text-2xl'>A Tradition Of Healing Excellence.</p>
            <div >
                <div className=' flex justify-between pt-6 pb-2 font-bold' >
                  <p>Heart Surgery</p>
                  <p>75%</p>
                </div>
                <div className='gray-container bg-gray-300 rounded-full'>
                    <div className='blue-container h-4 bg-[#0057A6] border rounded-full'></div>
                </div>
            </div>
            <div >
                <div className=' flex justify-between pt-6 pb-2 font-bold' >
                  <p>Laborate Analysis</p>
                  <p>80%</p>
                </div>
                <div className='gray-container bg-gray-300 rounded-full'>
                    <div className='blue-container-2 h-4 bg-[#0057A6] border rounded-full'></div>
                </div>
            </div>
            <div >
                <div className=' flex justify-between pt-6 pb-2 font-bold' >
                  <p>Customer Support</p>
                  <p>65%</p>
                </div>
                <div className='gray-container bg-gray-300 rounded-full'>
                    <div className='blue-container-3 h-4 bg-[#0057A6] border rounded-full'></div>
                </div>
            </div>
            <div >
                <div className='flex justify-between pt-6 pb-2 font-bold' >
                  <p>Medical Research</p>
                  <p>90%</p>
                </div>
                <div className='gray-container bg-gray-300 rounded-full'>
                    <div className='blue-container-4 h-4 bg-[#0057A6] border rounded-full'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
