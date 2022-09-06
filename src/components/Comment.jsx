import React from 'react';
import styled from 'styled-components';
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

const Comment = () => {
  return (
    <Container>
      <ChannelImg src="https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991" />
      <Details>
        <Name>
          Nahid Islam<Date>1 day ago</Date>
        </Name>
        <CommentText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facere omnis voluptate, eaque voluptates expedita itaque adipisci illo, corrupti neque maxime. Aspernatur assumenda sunt libero?
        </CommentText>
      </Details>
    </Container>
  );
};

export default Comment;
