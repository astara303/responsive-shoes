import React from 'react'
import './Shoes.css'
import ShoeCard from './ShoeCard'
import shoe1 from '../../images/shoe1.jpeg'
import shoe2 from '../../images/shoe2.jpeg'
import shoe3 from '../../images/shoe3.jpeg'
import shoe4 from '../../images/shoe4.jpeg'
import shoe5 from '../../images/shoe5.jpeg'

//We use the ShoeCard component and pass it props
//Eventually we would map these from data
function Shoes() {
  return (
    <div className='shoes'>
      <h1>Shoes Category Page</h1>
      <div className='shoes-container'>
        <div className='shoes-wrapper'>
          <ul className='shoes-items'>
            <ShoeCard
              src={shoe1}
              text='White Running Shoe'
            />
            <ShoeCard
              src={shoe2}
              text='Comfortable Running'
            />
          </ul>
          <ul className='shoes-items'>
            <ShoeCard
              src={shoe3}
              text='Ankle Shoe'
            />
            <ShoeCard
              src={shoe4}
              text='Comfortable Everday Shoe'
            />
            <ShoeCard
              src={shoe5}
              text='Comfortable Blue Shoe'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Shoes;