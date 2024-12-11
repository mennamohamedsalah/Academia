import React from 'react'
import Title from './Title'
import { homeAbout } from './dummydata'
import AWrapper from './AWrapper'
import  './about.css'

const AboutCard = () => {
  return (
    <>
        <section className="aboutHome">
            <div className="container flexSB">
                <div className="left row">
                    <img src="./image\How_To_Set_A_Price_For_A_Logo_Design_6.webp" alt=''/>
                </div>
                <div className="right row">
                    <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learing Expertise' />
                    <div className="items">
                        {homeAbout.map((val) => (
                            <div className="item flexSB">
                                <div className='img'>
                                    <img src={val.cover} alt='' />
                                </div>
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <AWrapper />
    </>
  )
}

export default AboutCard