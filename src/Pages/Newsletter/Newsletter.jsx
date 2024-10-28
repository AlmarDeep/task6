import React from 'react'
import Navbar from '../../componant/NavBar/NavBar'
import Footer from '../../componant/Footer/Footer'
import AllBolgCard from '../../componant/AllBlog/AllBolgCard'
import Newsletterhead from '../../componant/Newsletterhead/Newsletterhead'

const Newsletter = () => {
    const cardsdata =[
        {
            photo: '/assets/img/1.png',
            date:'Alec Whitten • 1 Jan 2023',
            title :'Bill Walsh leadership lessons',
            content:'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            b1:'Leadership',
            b2:'Management'
        },
        {
            photo: '/assets/img/2.png',
            date:'Alec Whitten • 1 Jan 2023',
            title :'PM mental models',
            content:'Mental models are simple expressions of complex processes or relationships.',
             b1:'products',
            b2:'Research',
            b3:'framworks'
        },
        {
            photo: '/assets/img/3.png',
            date:'Alec Whitten • 1 Jan 2023',
            title :'What is Wireframing?',
            content:'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
            b1:'Design',
            b2:'Research'
        },
    ]
  return (
    <>
    <Navbar />
    <Newsletterhead />
    <div className='mx-28'>
        <h1 className='text-2xl font-semibold '>All blog posts</h1>
        <div className=' pt-8 flex gap-8 flex-wrap items-center max-w-[1280px] items-center justify-center mx-28'>
            {
                cardsdata.map((element,index)=>(
                    <AllBolgCard key={index} photo={element.photo} date={element.date} title={element.title} content={element.content} b1={element.b1} b2={element.b2} b3={element.b3} />
                ))
            }
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Newsletter