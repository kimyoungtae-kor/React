import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Welcome from './chapter_05/Welcome';
import App from './App';
import Avatar from './chapter_05/Avatar';
import Comment from './chapter_05/Comment';
import CommentList from './chapter_05_1/CommentList';
import Parant from './pratice/Parant';
import Gallery from './pratice/Gallery';
import Airbnb from './chapter_05_1/Airbnb';
import Notification from './chapter_06/Notification';
import NotificationList from './chapter_06/NotificationList';
import Counter from './chapter_07/Counter';
import MyArray from './chapter_07/MyArray';
const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <MyElement />
      <Book/> */}
      {/* <Library/> */}
      {/* <Clock/> */}
      {/* <Welcome name="JS맨"/> */}
      {/* <Avatsar/> */}
      {/* <Comment author={{name:'jsman',avatarUrl:'https://placehold.co/60x40'}} text="샘플 텍스트" date={new Date()}/>
      <Comment author={{name:'jsman',avatarUrl:'https://placehold.co/60x40'}} text="샘플 텍스트" date={new Date()}/>
      <Comment author={{name:'jsman',avatarUrl:'https://placehold.co/60x40'}} text="샘플 텍스트" date={new Date()}/>
      <Comment author={{name:'jsman',avatarUrl:'https://placehold.co/60x40'}} text="샘플 텍스트" date={new Date()}/>
      <Comment author={{name:'jsman',avatarUrl:'https://placehold.co/60x40'}} text="샘플 텍스트" date={new Date()}/>
      <Comment author={{name:'jsman',avatarUrl:'https://placehold.co/60x40'}} text="샘플 텍스트" date={new Date()}/> */}
      {/* <CommentList/> */}
      {/* <Gallery/> */}
      {/* <Airbnb/> */}
      {/* <Notification></Notification> */}
      {/* <NotificationList></NotificationList> */}
      {/* <Counter></Counter> */}
      <MyArray/>
    </React.StrictMode>
  );
// },1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
