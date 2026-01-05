import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import dhe_ias from '../../assets/DheIAS'
import losicrent_car from '../../assets/losicrentacar'
import othar_works from '../../assets/Otherworks'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <>

      <div id='work' className='mywork'>
        <div className="mywork-title">
          <h1>My Work</h1>
        </div>
        <h1>Eucoders Technologies</h1>
        <div className="mywork-container">
          {mywork_data.map((work, index)=>{
            return <img key={index} src={work.w_img} alt="" />
          })
          }
        </div>

          <h1>Dhyeya IAS</h1>
        <div className="mywork-container">
          {dhe_ias.map((work, index)=>{
            return <img key={index} src={work.w_img} alt="" />
          })
          }
        </div>

        <h1>Losic Rent A Car</h1>
        <div className="mywork-container">
          {losicrent_car.map((work, index)=>{
            return <img key={index} src={work.w_img} alt="" />
          })
          }
        </div>

        <h1>Other Works</h1>
        <div className="mywork-container">
          {othar_works.map((work, index)=>{
            return <img key={index} src={work.w_img} alt="" />
          })
          }
        </div>


        <div className="mywork-showmore">
          <p>Show more</p>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    </>
  )
}

export default MyWork
