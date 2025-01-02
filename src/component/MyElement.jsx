import React from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName : 'Java',
  lastName : 'man'
}
const comment = "인사말"
const el =<h1 title={comment}>
hello {formatName(user)} World!
</h1>

const MyElement = () => {
  return el;
}

export default MyElement;