import React from 'react';
import './Airbnb.css'
import BnbItem from './BnbItem';

const Airbnb = () => {
  const items = [
    {
      
      color : '#DE3151',
      title : '서울',
      distance : 1
    },
    {
      
      color : '#CC2D4A',
      title : '서울2',
      distance : 2
    },
    {
      
      color : '#D93B30',
      title : '서울3',
      distance : 3
    },
    {
      
      color : '#BC1A6E',
      title : '서울4',
      distance : 4
    }
  ]
  const url = {src : 'https://placehold.co/200x100'}
  const copiedUrl = {src:url.src}
  const src = url.src;
  const copiedUrl2 = {...url}
  const copiedUrl3 = {src}
  return (
    <div className='wrapper'>
      <h3>설레는 다음 여행을 위한 아이디어</h3>
      <ul className='gallery-list'>
        {/* {items.map(item => <BnbItem src={item.src} color={item.color} title={item.title} distance={item.distance} />)} */}
        {items.map((item,idx) => <BnbItem key={idx} {...item} {...url}/>)}
      </ul>
    </div>
  );
}

export default Airbnb;