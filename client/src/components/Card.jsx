import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Menu = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  visibility: hidden;
  height: 25px;
  width: 25px;
  border-radius: 10px;
  background-color: rgba(181, 181, 179, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: ${(props) => (props.type === 'sm' ? '100%' : '260px')};
  margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '20px')};
  padding: 3px;
  border-radius: 3px;
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && 'flex'};
  gap: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
  &:hover ${Menu} {
    visibility: visible;
  }
`;

const Image = styled.img`
  width: ${(props) => (props.type === 'sm' ? '50' : '100')}%;
  height: ${(props) => (props.type === 'sm' ? '120' : '202')}px;
  background: #999;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.type === 'sm' && '0'}px;
`;
const Avatar = styled.div`
  height: 36px;
  flex: 1;
  display: ${(props) => props.type === 'sm' && 'none'};
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
export const Title = styled.h2`
  font-size: ${(props) => props.fz}px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
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

const Card = ({ type }) => {
  return (
    <Link to="video/:1">
      <Container type={type}>
        <Image
          type={type}
          src="https://i.ytimg.com/vi/DzSLUdJWrEQ/maxresdefault.jpg"
        />
        <Details type={type}>
          <Avatar type={type}>
            <ChannelImg
              type={type}
              src="https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991"
            />
          </Avatar>
          <Texts>
            <Title fz="16">Test Video</Title>
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
