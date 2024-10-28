import React from 'react'
import Navbar from '../../componant/NavBar/NavBar'
import Hero from '../../componant/Hero/Hero'
import RecentBlog from '../../componant/RecentBlog/RecentBlog'
import AllBlog from '../../componant/AllBlog/AllBlog'
import Footer from '../../componant/Footer/Footer'

const Blogs = () => {
  return (
    <>
     <Navbar />
    <Hero />
    <RecentBlog />
    <AllBlog />
    <Footer /> 
    </>
  )
}

export default Blogs