import React from 'react';
import styled from 'styled-components';
import { Button } from './Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ChannelImg } from './Card';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  z-index: 11111;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;
const Search = styled.div`
  position: absolute;
  width: 40%;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({ theme }) => theme.textSoft};
  position: relative;
`;
const SearchIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;
export const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.soft};
  border-width: ${(props) => props.borderWidth};
  border-radius: 5px;
  color: ${({ theme }) => theme.textSoft};
  background-color: transparent;
  outline: none;
  font-size: ${(props) => props.fz}px;
  padding: ${(props) => props.p}px;
  font-weight: 500;
  transition: 0.3s;

  ::placeholder {
    color: ${({ theme }) => theme.textSoft};
    font-weight: bold;
  }
  :focus {
    border-width: ${(props) => props.focusBorder};
    border: 1px solid ${({ theme }) => theme.text};
    border-width: ${(props) => props.borderWidth};
    color: ${({ theme }) => theme.text};

    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
`;
const Video = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.hover};
  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 6px 0px rgba(77, 77, 77, 0.75);
  }
`;

const MenuBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 5px;
  border-radius: 20px 5px 5px 20px;
  cursor: pointer;
  transition: .2s;

  :hover {
    box-shadow: 0px 0px 6px 0px rgba(77, 77, 77, 0.75);
  }
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Navabar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input borderWidth="0" fz="13" p="5" placeholder="Search" />
          <SearchIcon>
            <SearchOutlinedIcon />
          </SearchIcon>
        </Search>
        {currentUser ? (
          <User>
            <Video>
              <VideoCallOutlinedIcon />
            </Video>
            <MenuBtn>
              <Avatar>
                <ChannelImg src={currentUser.img} />
              </Avatar>
              {currentUser.name}
            </MenuBtn>
          </User>
        ) : (
          <Link to="signin">
            <Button mt="0px">
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navabar;
