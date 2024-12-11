import React from 'react'
import "./hero.css"
import Title from './Title'
const Hero = () => {
  return (
    <>
        <section className='hero'>
          <div className="container">
            <div className="row">
              <Title  subtitle='WELCOM TO ACDAEMIA' title='Best Online Eduction' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus consequatur laudantium consequuntur nobis voluptatum quasi sit molestias cumque exercitationem delectus iusto, tempore at atque? Ullam quam consectetur vero modi.</p>
              <div className="button">
                <button className='primary-btn'>
                  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
                <button>
                  VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className='marigin'></div>
        </>
  )
}

export default Hero