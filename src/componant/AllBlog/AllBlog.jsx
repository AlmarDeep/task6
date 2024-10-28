import React from 'react'
import AllBolgCard from './AllBolgCard'

const AllBlog = () => {
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
        {
            photo: '/assets/img/4.png',
            date:'Alec Whitten • 1 Jan 2023',
            title :'How collaboration makes us better designers',
            content:'Collaboration can make our teams stronger, and our individual designs better.',
             b1:'Design',
            b2:'Research'
        },
        {
            photo: '/assets/img/5.png',
            date:'Alec Whitten • 1 Jan 2023',
            title :'Our top 10 Javascript frameworks to use',
            content:'JavaScript frameworks make development easy with extensive features and functionalities.',
             b1:'Design',
            b2:'tool',
            b3:'SaaS'
        },
        {
            photo: '/assets/img/6.png',
            date:'Alec Whitten • 1 Jan 2023',
            title :'Podcast: Creating a better CX Community',
            content:'Starting a community doesn’t need to be complicated, but how do you get started?',
             b1:'Podcast',
            b2:'Custumer success'
        },
    ]
  return (
    <div className='mx-28  '>
        <h2>All blog posts</h2>
        <div className=' pt-8 flex gap-8 flex-wrap items-center max-w-[1280px] items-center justify-center mx-28'>
            {
                cardsdata.map((element,index)=>(
                    <AllBolgCard key={index} photo={element.photo} date={element.date} title={element.title} content={element.content} b1={element.b1} b2={element.b2} b3={element.b3} />
                ))
            }
        </div>
        
    </div>
  )
}

export default AllBlog