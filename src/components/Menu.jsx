import styled from 'styled-components';
import nintube from '../img/logo.png';

const Container = styled.div`
  flex: 1;
  background: aqua;
  height: 100vh;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Img = styled.img`
  height: 25px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={nintube} />
          NiNTube
        </Logo>
      </Wrapper>
    </Container>
  );
};

export default Menu;
