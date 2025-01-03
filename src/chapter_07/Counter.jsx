import React, { useState } from 'react';

const Counter = () => {
  // var count = 0;
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>총 {count}번 클릭했습니다</p>
      <button onClick={() => {setCount(count+1);console.log(count);}}>+1클릭</button>
      <button onClick={() => {setCount(count-1);console.log(count);}}>-1클릭</button>
      <button onClick={() => {setCount(0);console.log(count);}}>초기화클릭</button>
    </div>
  );
}

export default Counter;
