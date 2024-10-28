import React from 'react'

const Newsletterhead = () => {
  return (
    
         <div className='flex flex-col justify-center items-center gap-3 '>
        <h2 className='font-semibold text-base text-purple'>Newsletter</h2>
        <h1 className='font-bold text-5xl '>Stories and interviews</h1>
        <p className='text-tgray font-normal text-xl max-w-[740px] text-center'> Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
        <div className='m-10 flex '>
            <div className='flex flex-col items-start justify-start gap-1'>
            <input type="text" placeholder='Enter your email' className='rounded-lg border  h-[42px] w-[315px] px-3' />
            <p className='text-tgray'>We care about your data in our <a href="">privacy policy</a></p>
            </div>
           
            <input type="submit" value='Subscribe' className='bg-bpurple text-white w-[112px] h-[42px] rounded-lg' />
        </div>
       
    </div>
    
  )
}

export default Newsletterhead