import React from 'react'
import "./footer.css"
import { blog } from './dummydata'
const Footer = () => {
  return (
    <>
        <section className="newletter">
            <div className="container flexSB">
                <div className="left row">
                    <h1>Newsletter -Stay tune and get the latedt update</h1>
                    <span>far far away, behind the word mountains</span>
                </div>
                <div className="right row">
                    <input type='text' placeholder='Enter email address' />
                    <i className='fa fa-paper-plan'></i>
                </div>
            </div>
        </section>
        <Footer>
            <div className="container padding">
                <div className='box logo'>
                    <h1>ACADEMIA</h1>
                    <span>online education & learing</span>
                    <p> Voluptas a voluptatem eos necessitatibus fugit commodi tenetur odio, expedita amet debitis ducimus laudantium ullam ut corporis saepe inventore assusamus error</p>
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-youtube icon'></i>
                </div>
                <div className='box link'>
                    <h3>Explore</h3>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className='box link'>
                    <h3>Quck Links</h3>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Recent Post</h3>
                    {blog.slice(0,3).map((val) =>{
                        return (
                            <div className='items flexSB'>
                                <div className='img'>
                                    <img src={val.cover} />
                                </div>
                                <div className='text'>
                                <span>
                        <i className='fa fa-user'></i>
                        <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                        <i className='fa fa-calender-alt'></i>
                        <label htmlFor=''>{val.date}</label>
                    </span>
                    <h4>{val.title}</h4>
                        </div>
                        </div>
                        )
                    })}
                </div>
                <div className="box last">
                    <h3>Have a Questions?</h3>
                    <ul>
                        <li>
                            <i className='fa fa-map'></i>
                            203 Fake ST. Mount View , san francisio california , USA
                        </li>
                        <li>
                            <i className='fa fa-phone-alt'></i>
                            +123 456 7897
                        </li>
                        <li>
                            <i className="fa fa-paper-plan"></i>
                            example@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </Footer>
        <div className="legal">
            <p>Copyright @2022 All right reserved / This template is made iwth 
                <i className='fa fa-heart'></i> by GorkhCoder </p>
        </div>
    </>
  )
}

export default Footer