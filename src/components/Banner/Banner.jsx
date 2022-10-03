import React from 'react'
import './Banner.css'

const Banner = () => {

    //..if the description is more than certain  words add ...
    function truncate(string, number){
        //...ellipsis function
        return string?.length > number ?
        string.substr(0, number -1) + '...' : string
    }

  return (
   <header className='banner' style={{
    backgroundSize: 'cover',   
    backgroundImage: `url('https://i.stack.imgur.com/poVgz.png')`,
    backgroundPosition: "center center",
   }}>

    <div className="banner_contents">
        <h1 className="banner_title">Movie name</h1>
        <div className="banner_buttons">
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className="banner_description">
           {truncate(
            ` This is a test description.  This is a test description  This is a test description
            This is a test description This is a test description This is a test description
            This is a test description This is a test description This is a test description
            This is a test description  This is a test description This is a test description This is a test description
            This is a test description  This is a test description  This is a test description`, 200
           )}
            </h1>
    </div>
    <div className="banner_fadeBottom"/>
   </header>
  )
}

export default Banner