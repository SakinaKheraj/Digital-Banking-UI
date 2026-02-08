import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const page1content = () => {
  return (
    <div className='py-3 px-18 flex items-center gap-10 h-[90vh] bg-amber-100'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default page1content
