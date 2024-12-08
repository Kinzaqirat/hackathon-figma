import Dessert from '@/components/Dessert'
import Drinks from '@/components/Drinks'
import Main from '@/components/Main'
import MainCourse from '@/components/MainCourse'
import StarterMenu from '@/components/Starter'
import Work from '@/components/Work'

import React from 'react'

export default function page() {
  return (
    <div>
        < StarterMenu/>
        <hr className='border-orange-500 mx-3'/>
        <MainCourse/>
        <Main/>
        <Dessert/>
        <hr  className='border-orange-500 mx-3' />
        <Drinks/>
        <Work/>
    </div>
  )
}
