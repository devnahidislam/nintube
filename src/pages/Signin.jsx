import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../components/Card';
import { Input } from '../components/Navabar';
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
  return (
    <Container>
      <Wrapper>
        <Title fz="24">Signin Page</Title>
        <Subtitle>To continue NiNTube</Subtitle>
        <Input p="5" placeholder="Username" />
        <Input p="5" type="password" placeholder="Password" />
        <SigninBtn>Signin</SigninBtn>

        <Account>
          Need an account?
          <Link to="/signup">
            <Go>Signup</Go>
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

export default Signin;
