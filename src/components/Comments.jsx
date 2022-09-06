import React from 'react';
import styled from 'styled-components';
import { ChannelImg } from './Card';
import { Input } from './Navabar';

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Comments = () => {
  return (
    <div>
      <Container>
        <NewComment>
          <ChannelImg src="https://ik.imagekit.io/nahidislam/products/4_ZD-BcHv_5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648273414088" />
          <Input
            borderWidth="0 0 1px 0"
            fz="16"
            p="6"
            placeholder="Add a comment..."
          />
        </NewComment>
      </Container>
    </div>
  );
};

export default Comments;
