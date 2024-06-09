import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {

const loggedIn = {firstName: 'Hunter', lastName: 'McCarthy'}

  return (
    <section className="home">
        <div className='home-content'>
            <header className='home-header'>
                
                <HeaderBox 
                
                type = 'greeting'
                title = "Welcome"
                user = {loggedIn?.firstName || 'Guest'}
                subtext = "Manage your account and transactions seamlessly"
                
                />

                <TotalBalanceBox 
                
                accounts = {[]}
                totalBanks = {1}
                totalCurrentBalance = {1250.46}
                

                />

            </header>
        </div>
    </section>
  )
}

export default Home