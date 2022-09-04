import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navabar from './components/Navabar';
import { darkTheme, lightTheme } from './utils/Theme';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background: ${({theme})=>theme.bg};
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navabar />
          <Wrapper>videos</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
