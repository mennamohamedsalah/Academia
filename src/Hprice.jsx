import React from 'react'
import PriceCard from "./PriceCard"
import Title from './Title'
const Hprice = () => {
  return (
    <>
        <section className='hprice padding'>
        <Title subtitle='our pricing' title='pricing $ packages' />
            <div className='price container grid'>
                <PriceCard />
            </div>
        </section>
    </>
  )
}

export default Hprice