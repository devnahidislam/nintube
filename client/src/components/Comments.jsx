import React from 'react';
import styled from 'styled-components';
import { ChannelImg } from './Card';
import { Input } from './Navbar';
import Comment from './Comment';

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 36px;
`;

const Comments = () => {
  return (
    <div>
      <Container>
        <NewComment>
          <ChannelImg src="https://ik.imagekit.io/nahidislam/My_Image/Original/20201002_171423_ntXHgfxqQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652865564555" />
          <Input
            borderWidth="0 0 1px 0"
            fz="14"
            p="6"
            focusBorder="0 0 2px 0"
            placeholder="Add a comment..."
          />
        </NewComment>

        <Comment />
        <Comment />
        <Comment />
      </Container>
    </div>
  );
};

export default Comments;
