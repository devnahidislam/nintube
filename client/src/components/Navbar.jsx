import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from './Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChannelImg } from './Card';
import { logout } from '../redux/userSlice';

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
  transition: 0.2s;

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

const UserMenu = styled.div``;
const UpVideo = styled.div``;

const NavMenu = styled.div`
  position: absolute;
  right: 22px;
  top: 55px;
  width: ${(props) => props.w}px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px rgba(77, 77, 77, 0.75);
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
`;
const Li = styled.ul`
  margin: 5px 0;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.hover};
  color: ${({ theme }) => theme.textSoft};
  text-align: center;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 6px 0px rgba(77, 77, 77, 0.75);
  }
`;

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    let menuHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', menuHandler);

    return () => {
      document.removeEventListener('mousedown', menuHandler);
    };
  });
  return domNode;
};

const useClickOutsideMenu = (handler) => {
  const upVideoRef = useRef();

  useEffect(() => {
    let menuHandler = (event) => {
      if (!upVideoRef.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', menuHandler);

    return () => {
      document.removeEventListener('mousedown', menuHandler);
    };
  });
  return upVideoRef;
};

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [upMenu, setUpMenu] = useState(false);
  const toggleMenu = () => setUpMenu((upMenu) => !upMenu);
  const toggle = () => setOpen((open) => !open);
  const dispatch = useDispatch();

  const domNode = useClickOutside(() => {
    setOpen(false);
  });
  const upVideoRef = useClickOutsideMenu(() => {
    setUpMenu(false);
  });

  const handleLogout = async (e) => {
    dispatch(logout());
  };

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
            <UpVideo ref={upVideoRef}>
              <Video onClick={() => toggleMenu()}>
                <VideoCallOutlinedIcon />
              </Video>
              {upMenu && <NavMenu w={200}>test</NavMenu>}
            </UpVideo>

            <UserMenu ref={domNode}>
              <MenuBtn onClick={() => toggle()}>
                <Avatar>
                  <ChannelImg src={currentUser.img} />
                </Avatar>
                {currentUser.name}
              </MenuBtn>
              {open && (
                <NavMenu w={150}>
                  <Ul>
                    <Li>profile</Li>
                    <Li onClick={handleLogout}>logout</Li>
                  </Ul>
                </NavMenu>
              )}
            </UserMenu>
          </User>
        ) : (
          <Link ref={domNode} to="signin">
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

export default Navbar;
