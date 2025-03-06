// CommentsList.js
import React, { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentsList = () => {
  const [comments, setComments] = useState([]);

  const addComment = (text) => {
    setComments([
      ...comments,
      { id: Date.now(), text, replies: [] },
    ]);
  };

  const addReply = (parentId, text) => {
    const addNestedReply = (comments) =>
      comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...comment.replies, { id: Date.now(), text, replies: [] }],
          };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: addNestedReply(comment.replies) };
        }
        return comment;
      });

    setComments(addNestedReply(comments));
  };

  return (
    <div className="space-y-6">
      <CommentForm onSubmit={addComment} />
      <div className="space-y-4">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} onReply={addReply} />
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
