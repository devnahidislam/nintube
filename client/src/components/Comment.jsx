import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { format } from 'timeago.js';
import { ChannelImg } from './Card';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  margin-left: 5px;
  color: ${({ theme }) => theme.textSoft};
`;
const CommentText = styled.span`
  font-size: 14px;
`;

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannel(res.data);
    };
    fetchComment();
  }, [comment.userId]);

  return (
    <Container>
      <ChannelImg src={channel?.img} />
      <Details>
        <Name>
          {channel?.name}
          <Date> {format(comment?.createdAt)}</Date>
        </Name>
        <CommentText>{comment?.desc}</CommentText>
      </Details>
    </Container>
  );
};

export default Comment;
