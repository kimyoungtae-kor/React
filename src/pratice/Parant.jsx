import React from 'react';
import Gallery from './Gallery';

const content = [
  {name: '서울',comment:"2km 거리"},
  {name: '인천',comment:"29km 거리"},
  {name: '대구',comment:"237km 거리"},
  {name: '대전',comment:"140km 거리"},
]
const Parant = (src,title,distance,color) => {
  return (
    <li>
          <img src={src} alt=''/>
          <div style={{backgroundColor:color}}>
            <p>{title}</p>
            <p>{distance}</p>
          </div>
    </li>

  );
}

export default Parant;
