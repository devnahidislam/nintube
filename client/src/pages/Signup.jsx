import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../components/Card';
import { Input } from '../components/Navbar';
import { signupStart, signupSuccess, signupFailed } from '../redux/userSlice';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.textSoft};
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 35px 35px 0;
  border-radius: 50%;
  box-shadow: 0px -1px 10px 0px rgba(87, 87, 87, 1);
`;

export const Subtitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-top: -10px;
`;
export const SigninBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 6px 20px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.textSoft};
    color: ${({ theme }) => theme.bgLighter};
  }
`;
export const Account = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  padding: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  box-shadow: 0px 0px 6px 0px rgba(77, 77, 77, 0.75);
`;
export const Go = styled.span`
  font-weight: 500;
  text-decoration: underline;
  margin-left: 5px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ theme }) => theme.textSoft};
  transition: 0.2s;

  :hover {
    color: green;
    text-decoration: none;
  }
`;
export const PageLinks = styled.div`
  display: flex;
  align-items: center;
`;
export const PageLink = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.textSoft};
  margin: 2px 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s;

  :hover {
    box-shadow: 0px 0px 6px 0px rgba(77, 77, 77, 0.75);
    color: ${({ theme }) => theme.text};
  }
`;

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(signupStart());
    try {
      const res = await axios.post('/auth/signup', { name, email, password });
      dispatch(signupSuccess(res.data));
      res.status === 200 && navigate('/');
    } catch (error) {
      dispatch(signupFailed());
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title fz="24">Signup Page</Title>
        <Subtitle>To continue NiNTube</Subtitle>
        <Input
          p="5"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          p="5"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          p="5"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <SigninBtn onClick={handleSignup}>Sign Up</SigninBtn>

        <Account>
          Already have an account?
          <Link to="/signin">
            <Go>Sign In</Go>
          </Link>
        </Account>
      </Wrapper>
      <PageLinks>
        <Link to="/">
          <PageLink>Helps</PageLink>
        </Link>
        <Link to="/">
          <PageLink>Privacy</PageLink>
        </Link>
        <Link to="/">
          <PageLink>Terms</PageLink>
        </Link>
      </PageLinks>
    </Container>
  );
};

export default Signup;
