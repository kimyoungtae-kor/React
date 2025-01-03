import React, { useState } from 'react';

const MyObject = () => {
  const fruits = {
    fruit1 : {
      name : "사과",
      
    },

  };
  const [bucket,setBucket] = useState({});
  return (
    <div>
      <h3>{bucket}</h3>
      {/* <button onClick={() => {setBucket(a => [...a,fruits[Math.floor(Math.random() * fruits.length)]])}}>과일추가</button> */}
      <button onClick={() => {setBucket(bucket)}}>과일추가</button>
      <button onClick={() => {}}>과일제거</button>
      <button onClick={() => {setBucket({})}}>바구니 비우기</button>
      <ul>
        {fruits.map((f,i) => <li key={i}>{f}:개</li>)}
      </ul>
    </div>
  );
}

export default MyArray;
