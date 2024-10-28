import React from 'react'

const Examples = ({image,photodesc,examples,example1,content}) => {
  return (
    <div className='max-w-[761px]'>
     <img src={image} alt="" />
    <div className='max-w-[542px] m-auto'><p className='text-tgray  my-8 text-center  '>{photodesc}</p></div> 
     <p className='text-tgray text-bold  my-8 text-[18px] font-Inter '>{examples}</p>
     <p className='text-tgray text-bold  my-8 text-[16px] font-Inter '>{example1}</p>
     <p className='text-tgray my-3 text-[16px]'>{content}</p>

    </div>
  )
}

export default Examples