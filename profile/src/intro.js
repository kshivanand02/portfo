import React from 'react'
import "./intro.css"
import {Link} from "react-scroll";

const Intro = () => {
  return (
    <section id="introcontent">
      <div className='info'>
       
      <span className='hello'>Hello!<br/></span>
       <span className='introtext'>I'm  <span className='introname'>SHIVANAND</span><br/>Website Designer</span> 
       <p className='intropara'>Iam a college student website Developrer Creating Visually Appearing user friendly website</p>
       
       <Link><button><img src="" alt="" className='img1'/>Hire me</button></Link>
      </div>
    </section>
  )
}

export default Intro;
