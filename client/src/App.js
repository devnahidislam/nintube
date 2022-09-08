import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navabar from './components/Navabar';
import { darkTheme, lightTheme } from './utils/Theme';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 0 20px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navabar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<Signin />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;