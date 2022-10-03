import React from 'react'
import Banner from '../Banner/Banner'
import Nav from '../NavBar/Nav'
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        {/* NavBar */}
        <Nav/>
        {/* Banner */}
        <Banner/>
        {/* Row */}

    </div>
  )
}

export default HomeScreen