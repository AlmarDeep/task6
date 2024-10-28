import React from 'react'
import { Link } from 'react-router-dom'

const AllBolgCard = ({ photo, date, title, content ,b1,b2,b3 }) => {
  return (
    <Link className="bg-white max-w-[384px]" to="/blogdetail">
    <img src={photo} alt="photo" className=' max-h-[240px]  pb-4' />
    <div className='mx-4 flex flex-col justify-between gap-2'>
        <p className="text-purple text-sm font-semibold ">{date}</p>
        <h2 className="font-bold text-xl mb-2 font-semibold">{title}</h2>
        <p className="text-gray-700 text-base font-normal ">{content}</p>
        <div className='my-6'>
            <button className="bg-lightpb  text-purple font-medium text-sm font-bold py-2 px-4 rounded-full ">
               {b1}
            </button>
            <button className="bg-lightbb  text-tblue font-medium  text-sm font-bold py-2 px-4 rounded-full ml-2">
                {b2}
            </button>
            <button className="bg-lightpi  text-tpink font-medium  text-sm font-bold py-2 px-4 rounded-full ml-2">
                {b3}
            </button>
        </div>
    </div>

</Link>
  )
}

export default AllBolgCard