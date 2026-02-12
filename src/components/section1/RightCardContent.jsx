import React from 'react'

const RightCardContent = (props) => {
    return (
    <div>
        <div className='absolute h-full w-full top-0 left-0 p-8 flex flex-col justify-between'>
                <h1 className='bg-white rounded-full h-12 w-12 text-xl justify-center items-center flex font-semibold'>{props.id+1}</h1>
                <div>
                    <p className='text-xl text-shadow-2xs leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et repellat sit inventore doloribus debitis, sunt eligendi earum, facere explicabo alias exercitationem eveniet necessitatibus, ab reiciendis fugiat enim sed modi.
                    </p>

                    <div className='flex justify-between'>
                        <button className='bg-blue-600 rounded-full px-8 py-3 font-medium text-white'>{props.tag}</button>
                        <button className='bg-blue-600 rounded-full px-4 py-3 font-medium text-white'><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default RightCardContent