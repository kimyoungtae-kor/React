import React from 'react';
import Book from './Book';
import Mybook from './Mybook';

const result =[
  {
    name : "처음만난 파이썬",
    numOfPage : 300
  },
  {
    name : "처음만난 AWS",
    numOfPage : 400
  },
  {
    name : "처음만난 리액트",
    numOfPage : 500
  }
];


const Library = () =>{
  return (
    <>
      {/* <Book name ="처음 만난 파이썬" numOfPage ={result[0].numOfPage} map ={result[0].name}/>
      <Book name ="처음 만난 AWS" numOfPage ={result[1].numOfPage} map ={result[1].name}/>
      <Book name ="처음 만난 리액트" numOfPage ={result[2].numOfPage} map ={result[2].name}/>  */}
      {/* {result.map(el =><Book name={el.name} numOfPage={el.numOfPage}/>)} */}
      {result.filter(el => el.numOfPage != 400).map(el => <Book name={el.name} numOfPage={el.numOfPage}/>)}
      <h1>핫하</h1>
      <Mybook name="스프링부트" numOfPage="700" />
    </>
  );
}

export default Library;
