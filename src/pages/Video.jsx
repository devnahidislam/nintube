import React from 'react';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Hr } from '../components/Menu';
import Card, { ChannelImg } from '../components/Card';
import Comments from '../components/Comments';

const Container = styled.div`
  display: flex;
  gap: 20px;
`;
const Content = styled.div`
  flex: 4;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
  color: ${({ theme }) => theme.text};
`;
const Dettails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 6px;
`;
const ChanneDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin: 5px 0 15px;
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  height: max-content;
  padding: 10px 15px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="403"
            src="https://www.youtube.com/embed/TizxLEYhhQM"
            title="DO NOT SAY 'I think...' - say THIS instead - 21 more advanced alternative phrases"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Dettails>
          <Info>5200 Views • Jun 5, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              143
            </Button>
            <Button>
              <ThumbDownAltOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <ConstructionOutlinedIcon />
              Clip
            </Button>
            <Button>
              <PlaylistAddOutlinedIcon />
              Save
            </Button>
            <Button>
              <MoreHorizOutlinedIcon />
            </Button>
          </Buttons>
        </Dettails>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImg src="https://ik.imagekit.io/nahidislam/products/4_ZD-BcHv_5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648273414088" />
            <ChanneDetails>
              <ChannelName>Noyon Tara</ChannelName>
              <ChannelCounter>200k Subscriber</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quaerat libero perspiciatis labore illum, atque maiores porro
                aperiam quo accusantium.
              </Description>
            </ChanneDetails>
            <Info></Info>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
