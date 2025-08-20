import React from 'react'
import "./skill.css"
const Skill = () => {
  return (
    <section id="skill">
      <span className='skilltitle'>What I do</span><br/>
      <span className='skilldesc'>iam a skilled and passionate web Designer currently persuing Engineering in College</span>
      <div className='skillbars'>
        <div className='skillbar'>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*-EFdnPuVrwUOmYte11v0OA.png"  className="skillbarimag" alt='Dsa'/>
            <div className='skillbartext'>
                <h2>Data Structure and Algorithm</h2>
                <p> DSA is essential for solving complex computational problems and is fundamental to computer science and software development.</p>
            </div>
        </div>

        <div className='skillbar'>
            <img src="https://th.bing.com/th/id/OIP.NAXTdADfcHwg3gzoeqRSwQAAAA?rs=1&pid=ImgDetMain"  className="skillbarimag" alt='webDesign'/>
            <div className='skillbartext'>
                <h2>Web Development</h2>
                <p>Web development involves combines coding, design, and problem-solving to build functional and visually appealing online experiences.</p>
            </div>
        </div>

        <div className='skillbar'>
            <img src="https://th.bing.com/th/id/OIP.90LITYqQLAhRRhSyr_6awAHaHa?w=249&h=249&rs=1&pid=ImgDetMain"  className="skillbarimag" alt="operatingsystem"/>
            <div className='skillbartext'>
                <h2>operatingsystem</h2>
                <p>An operating system OS is system software that manages computer hardware and software resources, providing common services for computer programs</p>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Skill
