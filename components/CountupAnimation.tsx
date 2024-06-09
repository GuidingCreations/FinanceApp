'use client'
import React from 'react'
import CountUp from 'react-countup'
import { formatAmount } from '@/lib/utils'

const CountupAnimation = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
        
        <CountUp 
        decimal='.'
        prefix='$'
        decimals={2}
        end = {amount}
        duration={2.75}
        />
    
    </div>
  )
}

export default CountupAnimation