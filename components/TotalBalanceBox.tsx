
import React from 'react'
import CountupAnimation from './CountupAnimation'


const TotalBalanceBox = ({
    accounts = [],
    totalBanks,
    totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <div className='total-balance'>

    <div className='total-balance-chart'>
        // Chart goes here
    </div>

    <div className='flex flex-col gap-6'>
        <h2 className='header-2'>Bank Accounts: {totalBanks}</h2>
        <div className='flex flex-col gap-2'>
            <h3 className='total-balance-label'></h3>
            <h3 className='total-balance-amount flex-center gap-2'>
            <CountupAnimation amount = {totalCurrentBalance} />

            </h3>
        </div>
    </div>

    </div>
  )
}

export default TotalBalanceBox