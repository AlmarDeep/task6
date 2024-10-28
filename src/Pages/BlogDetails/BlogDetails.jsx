import React from 'react'
import Navbar from '../../componant/NavBar/NavBar'
import AllBolgCard from '../../componant/AllBlog/AllBolgCard'
import BlogDetailCard from '../../componant/BlogCard/BlogDetailCard'
import Examples from '../../componant/BlogCard/Examples'
import Newsletterhead from '../../componant/Newsletterhead/Newsletterhead'
import Footer from '../../componant/Footer/Footer'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
    const cardsdata =[
        { 
             photo:'/assets/img/7.png' ,
             date:'olivia rhye . 1 jan 2023',
             title:"UX review presentation" ,
             content :"How do you create compelling presentations that wow your colleagues and impress your managers?",
             b1:'Leadership',
            b2:'Management'
        },
        {
           photo:'/assets/img/image2.png',
            date:'Phoenix Baker • 1 Jan 2023',
            title:"Migrating to Linear 101" ,
           content:"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
            b1:'Leadership',
            b2:'Management'
        },
        {
            photo:'/assets/img/image3.png' ,
            date:'Lana Steiner • 1 Jan 2023' ,
            title:"Building your API Stack",
             content:"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
               b1:'Leadership',
            b2:'Management'
        },
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
    ];
   const details=[{
     photo:'/assets/img/i1.png' ,
     content:'A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.',
      content1:'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
      title:'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
   },
   {
    photo:'/assets/img/i2.png' ,
    title1:'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
    content:' There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.',
      content1:"Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
      content2:"Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
      content3:'Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.'
    },

];
const example=[{
    image:'/assets/img/i3.png',
    photodesc:'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
    examples:'Examples of Grids in Use',
    example1:'Example 1: Hierarchical Grid',
    content:'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
},
{
    image:'/assets/img/i4.png',
    photodesc:'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
    example1:'Example 2: Column Grid',
    content:'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
},
{
    image:'/assets/img/i5.png',
    photodesc:'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
    example1:'Example 3: Modular Grid',
    content:'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
},
{
    image:'/assets/img/i6.png',
    photodesc:'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
    example1:'Example 4: Breaking the Grid',
    content:'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
},
{
    image:'/assets/img/i7.png',
    photodesc:'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)'
}]
  return (
    <>
    <Navbar />
    <div class="grid grid-cols-3  mx-28">
   
  <div class="">
    <h1 className='text-2xl font-semibold mb-8'>Recent blog posts</h1>
  {
                cardsdata.map((element,index)=>(
                    <AllBolgCard key={index} photo={element.photo} date={element.date} title={element.title} content={element.content} b1={element.b1} b2={element.b2} b3={element.b3} />
                ))
            }
  </div>
  <div class="col-span-2 ">
    <h1 className='text-purple text-base font-semibold'>Sunday , 1 Jan 2023</h1>
    <h1 className='text-4xl font-bold'>Grid system for better Design User Interface</h1>
    {
     details.map((element,index)=>(
        <BlogDetailCard key={index} photo={element.photo} title1={element.title1} content={element.content} content1={element.content1} content2={element.content2} content3={element.content3} title={element.title} />
     ))
    }
    {
        example.map((element,index)=>(
            <Examples key={index} image={element.image} photodesc={element.photodesc} examples={element.examples} example1={element.example1} content={element.content} /> 
        ))
    }
    <div className='max-w-[542px] text-tgray text-[16px] '>
        <h1 className='my-3'>Benefits of the Grid</h1>
        <p className='my-3'>Using a grid benefits both end users and the designers alike:</p>
        <ul className='list-disc pl-5 '>
            <li>Designers can quickly put together well-aligned interfaces.</li>
            <li>Users can easily scan predictable grid-based interfaces</li>
            <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
        </ul>
    </div>
    <Examples image='/assets/img/i8.png' photodesc='At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).' />
    <div className='max-w-[734px] flex flex-col gap-y-3'>
        <p className='text-tgray text-base font-normal'>Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.</p>
        <h1 className='text-tgray text-lg font-bold'>Choosing and Setting Up Your Grid</h1>
        <p className='text-tgray text-base font-normal'>How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>
        <p className='text-tgray text-base font-normal'> <span className='text-tgray text-lg font-bold'>Choose the right grid for your needs.</span>Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs</p>
        <p className='text-tgray text-base font-normal'><span className='text-tgray text-lg font-bold'>Spend time setting up your grid</span>Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
    </div>
    <Examples image='/assets/img/i9.png' photodesc='Easily set the number of columns, the gutter size, and margin size in Figma.' />
    <p className=' max-w-[734px] text-tgray text-base font-normal'><span className='text-tgray text-lg font-bold'>Always place content within columns, not gutters</span> The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.</p>
    <Examples image='/assets/img/i10.png' photodesc='Content or elements should be placed within and across columns, not gutters.' />
    <p className=' max-w-[734px] text-tgray text-base font-normal'><span className='text-tgray text-lg font-bold'>Consider using an 8px grid system</span>  For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.</p>
     <div className=' max-w-[734px] flex flex-col gap-y-3 mt-3'>
     <h1 className='text-tgray text-lg font-bold'>Conclusion</h1>
     <p className='text-tgray text-base font-normal'> Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.</p>
     </div>
    <Link className='max-w-[760px]' to='/newsletter'>
        <Newsletterhead />
    </Link>
  </div>
  
</div>
<Footer />
    </>
  )
}

export default BlogDetails