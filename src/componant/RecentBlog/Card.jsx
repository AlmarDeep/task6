import React from 'react';

const Card = ({ photo, date, title, content }) => {
    return (
        <div className="bg-white ">
            <img src={photo} alt="photo" className='max-w-[561px] max-h-[228px] pb-4' />
            <div className='mx-4 flex flex-col justify-between gap-2'>
                <p className="text-purple text-sm font-semibold ">{date}</p>
                <h2 className="font-bold text-2xl mb-2 font-semibold">{title}</h2>
                <p className="text-gray-700 text-base font-normal max-w-[561px]">{content}</p>
                <div className='my-6'>
                    <button className="bg-lightpb  text-purple font-medium text-sm font-bold py-2 px-4 rounded-full">
                        Design
                    </button>
                    <button className="bg-lightbb  text-tblue font-medium  text-sm font-bold py-2 px-4 rounded-full ml-2">
                        Research
                    </button>
                    <button className="bg-lightpi  text-tpink font-medium  text-sm font-bold py-2 px-4 rounded-full ml-2">
                        Presentation
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Card;
