import React from 'react'

//props allow us to reuse this component with different attributes
function ShoeCard(props) {
  return (
    <>
      <li className='shoes-item'>
        <div className='shoes-item-outer'>
          <div className='shoes-item-pic-wrap'>
            <img
              className='shoes-item-img'
              alt='Type of Shoe'
              src={props.src}
            />
          </div>
          <div className='shoes-item-info'>
            <h5 className='shoes-item-text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default ShoeCard;