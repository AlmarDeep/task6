

import React from 'react';
import Card from '../RecentBlog/Card';
import HorizontalCard from '../RecentBlog/HorizontalCard';

const BlogCard = () => {
    return (
  <> <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 ">

  <div className="md:w-2/3">
      <Card photo='/assets/img/myimage.png' date='olivia rhye . 1 jan 2023' title="UX review presentation" content="How do you create compelling presentations that wow your colleagues and impress your managers?" />
  </div>


  <div className="flex flex-col md:w-2/3 space-y-4">
      <HorizontalCard photo='/assets/img/image2.png' date='Phoenix Baker • 1 Jan 2023' title="Migrating to Linear 101" content="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..." />
      <HorizontalCard photo='/assets/img/image3.png' date='Lana Steiner • 1 Jan 2023' title="Building your API Stack" content="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..." />
  </div>
  
</div>
   
</>
       
        
    );
};

export default BlogCard;
