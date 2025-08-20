import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form=useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zajkemo', 'template_rl0iyxo', form.current, {
        publicKey: 'hw3f7uDomJiGhe8Jx',
      })
      .then(
        () => {
          e.target.reset();
          alert("Email Sent!")
          console.log('SUCCESS!');

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <section id="conta">
      <div className='clients'>
        <h1 className='contactpage'> My Clients</h1>
        <p className='clientdesc'>
            I had the oppurtunity to work with a diverse group of companies .
            some of notable companies i have worked include
        </p>
        <div className='clientimgs'>
          <img src="https://th.bing.com/th/id/OIP.Ku4iy6JfyZOZAKxOkfp0ewAAAA?rs=1&pid=ImgDetMain" className='clientimg'/>
          <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/Webp.net-resizeimage.png" className='clientimg'/>
          <img src="https://th.bing.com/th/id/OIP.D1PUqYHsDKfBnEzvf5FGQwHaCs?rs=1&pid=ImgDetMain" className='clientimg'/>
          <img src="https://insiderpaper.com/wp-content/uploads/2021/02/twitter-logo-1024x536.jpg" className='clientimg'/>
          <img src="https://media.idownloadblog.com/wp-content/uploads/2018/01/Netflix-Logo.png" className='clientimg'/>
          <img src="https://i.pinimg.com/474x/84/5d/4f/845d4f9a8c24b350bea626121503cb91.jpg" className='clientimg'/>


        </div>
      </div>
      <section className='contacts' id="contact">
      <h1 className='contactpagetitle'>Contact Me</h1>
      <span className='contactdesc'>Please fill out the form below to discuss any work oppurtunities</span>
      <form className='contactform' id="con" ref={form} onSubmit={sendEmail}>
        <input type="text" className='name'   placeholder='your name' name="your_name"/>
        <input type ="email" className='email' placeholder='your E-mail' name='your_email'/>
        <textarea name='message' rows="5" placeholder='Your message' className='msg' ></textarea>
        <button type="submit"  value="send" className='btn'>Submit</button>
        <div className='links'>
          <img src="https://th.bing.com/th/id/R.e899aed2d9cf4ae72f6c94959136bc07?rik=k7rN5PenmoOpKg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-714l62jInP0%2fVfhHWnWB-4I%2fAAAAAAAAZMg%2fxZ8ba1mmy5w%2fs1600%2ffacebook-icon-960x1024.jpg&ehk=CUle%2fpq2qyUEQc3I4oXzLLFihAHx5dmulMNJpmbqkV8%3d&risl=&pid=ImgRaw&r=0" alt="" className='link' id="f"/>
          <img src="https://icons.iconarchive.com/icons/social-media-icons/glossy-social/512/Twitter-icon.png" alt="" className='link'/>
          <img src="https://icons.veryicon.com/png/System/Circle/youtube.png" alt="" className='link'/>
          <img src="https://th.bing.com/th/id/OIP.B2jAIMD6FXO4S_32ZdNBtwAAAA?rs=1&pid=ImgDetMain" alt="" className='link' id="i"/>
        </div>
      </form>
      </section>
    </section>
  )
}

export default Contact
