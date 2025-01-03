import React, { useState } from 'react';

const MyArray = () => {
  const fruits = ['사과','딸기','포도','복숭아','귤'];
  const [bucket,setBucket] = useState([]);
  return (
    <div>
      <h3>{bucket}</h3>
      {/* <button onClick={() => {setBucket(a => [...a,fruits[Math.floor(Math.random() * fruits.length)]])}}>과일추가</button> */}
      <button onClick={() => {setBucket(bucket => [...bucket,fruits[Math.floor(Math.random() * fruits.length)]])}}>과일추가</button>
      <button onClick={() => {
        const rand = parseInt(Math.random() * bucket.length);
        bucket.splice(rand,1);
        setBucket([...bucket])
        }}>과일제거</button>
      <button onClick={() => {setBucket([])}}>바구니 비우기</button>
      <ul>
        {fruits.map((f,i) => <li key={i}>{f}:개</li>)}
      </ul>
    </div>
  );
}

export default MyArray;
