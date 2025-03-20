import React from 'react'
import '../Styles/About.css'
import C1 from '../assets/C1.jpg'
import C2 from '../assets/C2.jpg'
import C3 from '../assets/C3.jpg'
import C4 from '../assets/C4.jpg'
import { FaArrowUp } from "react-icons/fa";


function About() {
  return (
    <div className='about-container'>
   
      <div className='about-content'>
        <h2>About us</h2>
        <h3>Who we are</h3>
        <p>Family of Singers (FOS) is a Choir that proclaims the gospel of JESUS Christ through music at the Presbyterian Church of Rwanda (EPR), Kiyovu Parish. FOS members are composed of different generations, from the youth to elders, single people, couples, and single parents. It began its ministry in October of 2009. <br /><br />

To advance the choir’s commitment and achieve its prime goal of evangelizing through music, FOS also aims at promoting good family relationships grounded in Christian values.</p>
      </div>
      <div className='about-images'>
      <div className='image4'><img src={C4} alt="Choir Picture" /></div>
        <div className='image1'><img src={C1} alt="Choir Picture" /></div>
        <div className='image2'><img src={C2} alt="Choir Picture" /></div>
        <div className='image3'><img src={C3} alt="Choir Picture" /></div>
       
      </div>

      <div className='about-last'>
        <h2><span className='about-different1'>|</span>FOS</h2>
        <p>Family <br /><span className='about-different2'>CONSTITUENCY</span></p>
      </div>
      <div className='about-arrow'>
          <FaArrowUp />
      </div>
    </div>
  )
}

export default About