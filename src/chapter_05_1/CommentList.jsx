import React from 'react';
import Comment from './Comment';
const comments = [
  {name: 'jsman',comment:"안녕하세요 js"},
  {name: '유재석',comment:"리액트 재미있어요!"},
  {name: '강민경',comment:"저도 리액트 배워보고 싶어요!!"},
]

const CommentList = () => {
  return (
    <div>
        {comments.map((item) => (
        <Comment name={item.name} comment={item.comment} />
        ))}
    </div>
  );
}

export default CommentList;
