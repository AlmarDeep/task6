import React from 'react'

const BlogDetailCard = ({ photo, content, content1,content2,content3, title ,title1}) => {
  return (
    <div className='max-w-[761px]' >
      <img src={photo} alt="" />
      <p className='text-tgray  my-8 text-center '>{title1}</p>
      <p className='text-tgray my-3'>{content}</p>
      <p className='text-tgray my-3'>{content1}</p>
      <p className='text-tgray my-3'>{content2}</p>
      <p className='text-tgray my-3'>{content3}</p>
      <p className='text-tgray text-bold text-center my-8 text-lg font-Inter '>{title}</p>

    </div>
  )
}

export default BlogDetailCard