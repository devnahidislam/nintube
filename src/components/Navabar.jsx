import React from 'react';
import styled from 'styled-components';
import { Button } from './Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({ theme }) => theme.textSoft};
`;
export const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.soft};
  border-width: ${(props) => props.borderWidth};
  color: ${({ theme }) => theme.textSoft};
  background-color: transparent;
  outline: none;
  font-size: ${(props) => props.fz}px;
  padding: ${(props) => props.p}px;
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
    font-weight: bold;
  }
`;

const Navabar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input borderWidth="0" fz="15" placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        <Button mt="0px">
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navabar;
