import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Title } from '../components/Card';
import { Input } from '../components/Navbar';
import { loginFailed, loginStart, loginSuccess } from '../redux/userSlice';
import GoogleIcon from '@mui/icons-material/Google';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

import {
  PageLinks,
  PageLink,
  Container,
  Wrapper,
  Subtitle,
  SigninBtn,
  Account,
  Go,
} from './Signup';

const Signin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('/auth/signin', { name, password });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailed());
    }
  };

  const signInWithGoogle = () => {
    dispatch(loginStart());

    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post('/auth/google', {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            dispatch(loginSuccess(res.data));
          });
      })
      .catch((error) => {
        dispatch(loginFailed());
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title fz="24">Signin Page</Title>
        <Subtitle>To continue NiNTube</Subtitle>
        <Input
          p="5"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          p="5"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <SigninBtn onClick={handleLogin}>Signin</SigninBtn>

        <Account>
          Need an account?
          <Link to="/signup">
            <Go>Signup</Go>
          </Link>
        </Account>
      </Wrapper>

      <h3>or</h3>
      <PageLinks onClick={signInWithGoogle}>
        <PageLink>
          <GoogleIcon />
        </PageLink>
      </PageLinks>

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

export default Signin;
