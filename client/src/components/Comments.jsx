import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ChannelImg } from './Card';
import { Input } from './Navbar';
import Comment from './Comment';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../redux/videoSlice';

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 36px;
`;
const CommentBtn = styled.button`
  padding: 7px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  color:white;
  background-color: #065fd4;
  cursor: pointer;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (error) {}
    };
    fetchComments();
  }, [videoId]);

   const handleComment = async (e) => {
     e.preventDefault();
     try {
       const res = await axios.post('/comments', { videoId, desc });
       dispatch(addComment(res.data));
     } catch (err) {}
   };

  return (
    <div>
      <Container>
        <NewComment>
          <ChannelImg src={currentUser?.img} />
          <Input
            borderWidth="0 0 1px 0"
            fz="14"
            p="6"
            focusBorder="0 0 2px 0"
            placeholder="Add a comment..."
            onChange={(e) => setDesc(e.target.value)}
          />

          <CommentBtn onClick={handleComment}>Comment</CommentBtn>
        </NewComment>

        {comments?.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </Container>
    </div>
  );
};

export default Comments;
