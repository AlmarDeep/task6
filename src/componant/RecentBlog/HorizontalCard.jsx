import React from 'react'

const HorizontalCard = ({ photo, date, title, content }) => {
    return (
        <div>
            <div className="flex  items-start bg-white max-w-[592px] ">
                <img
                    src={photo}
                    className="max-w-[303.5px] max-h-[200px] "
                />
                <div className='mx-4 flex flex-col justify-between gap-2'>
                    <p className="text-purple text-sm font-semibold">{date}</p>
                    <div className="font-bold text-2xl mb-2 font-semibold">{title}</div>
                    <p className="text-gray-700 text-base font-normal">{content}</p>
                    <div className='flex'>
                        <button className="bg-lightpb  text-purple font-medium text-sm font-bold py-2 px-4 rounded-full">
                            Design
                        </button>
                        <button className="bg-lightbb  text-tblue font-medium  text-sm font-bold py-2 px-4 rounded-full ml-2">
                            Research
                        </button></div>

                </div>
            </div>
        </div>
    )
}

export default HorizontalCard