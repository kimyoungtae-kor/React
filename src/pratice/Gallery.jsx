import React from 'react';
import './Image.css'
import Parant from './Parant';
const styles={
  bodycontent : {
    color:"#dee3151",
    distanse:2
  },
  divclass : {
    display : "flex"
  }
}
const Gallery = (props) => {
  const items = [
    {
      src : 'https://placehold.co/200x100',
      color : '#DE3151',
      title : '서울',
      distanse : 2
    },
    {
      src : 'https://placehold.co/200x100',
      color : '#DE3151',
      title : '인천',
      distanse : 2
    },
    {
      src : 'https://placehold.co/200x100',
      color : '#DE3151',
      title : '대구',
      distanse : 2
    },
    {
      src : 'https://placehold.co/200x100',
      color : '#DE3151',
      title : '대전',
      distanse : 2
    }
  ]
  return (
    
    <div className='wrapper'>
    
      <h3>설레는 다음 여행을 위한 아이디어</h3>
      <ul className='gallery_list'>
        {items.map(item => <Parant src={item.src} color={item.color} title={item.title} distanse={item.distanse}/>)}
      </ul>
    </div>
  );
}

export default Gallery;
