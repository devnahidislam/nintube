import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Menu = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
`;

const Container = styled.div`
  width: 260px;
  margin-bottom: 20px;
  padding: 3px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
  &:hover ${Menu} {
    visibility: visible;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background: #999;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;
`;
const Avatar = styled.div`
  height: 36px;
  flex: 1;
`;
export const ChannelImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  /* border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%; */
  background: #999;
`;
const Texts = styled.div`
  flex: 6;
`;
const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
export const ChannelName = styled.h4`
  font-size: 13px;
  font-weight: 500;
  margin: 5px 0;
  width: fit-content;
  color: ${({ theme }) => theme.textSoft};

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;
export const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="video/:1">
      <Container>
        <Image src="https://i.ytimg.com/vi/DzSLUdJWrEQ/maxresdefault.jpg" />
        <Details>
          <Avatar>
            <ChannelImg src="https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991" />
          </Avatar>
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Noyon Tara</ChannelName>
            <Info>5200 Views • 1 days ago</Info>
          </Texts>
          <Menu>
            <MoreVertIcon />
          </Menu>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
