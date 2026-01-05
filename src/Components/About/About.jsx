import React from 'react'
import './About.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'
const About = () => {
  return (
    <>
      <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" className='frame'/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a passionate <strong>Graphic Designer and Video Editor</strong> creating visually appealing designs and engaging videos for social media and digital platforms. I focus on clean design, smooth editing, and creative storytelling to help brands stand out online.</p>
                    <p>Creative Graphic Designer & Video Editor focused on modern visuals and engaging digital content.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <div className='w-25'>
                            <p >Filmora & Canva</p>
                        </div>
                        <hr style={{width:"95%"}}/>
                    </div>
                    <div className="about-skill">
                        <div className='w-25'>
                            <p>Adobe Premiere Pro & Adobe Photoshop</p>
                        </div>
                        <hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p >DaVinci Resolve & CapCut</p>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p >Photopea</p>
                        <hr style={{width:"60%"}}/>
                    </div>
                </div>
            </div>
        </div>
       
      </div>
    </>
  )
}

export default About
