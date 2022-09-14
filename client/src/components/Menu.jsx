import styled from 'styled-components';
import nintube from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import FeedIcon from '@mui/icons-material/Feed';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.soft}
    ${({ theme }) => theme.bgLighter};

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: ${({ theme }) => theme.bgLighter};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.soft};
    border-radius: 5px;
  }
`;

const Wrapper = styled.div`
  padding: 10px 0;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-size: 16px;
  padding: 0 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;
const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
export const Hr = styled.hr`
  margin: 10px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div`
  padding-left: 10px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  font-weight: 500;
  border-radius: 3px;
  margin-top: ${(props) => props.mt};
  cursor: pointer;

  &:hover {
    background-color: rgba(62, 166, 255, 0.1);
  }
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaa;
  margin-bottom: ${(props) => props.mt};
  padding-left: 10px;
`;
const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo>
            <Img src={nintube} />
            NiNTube
          </Logo>
        </Link>
        <Link to="/">
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link to="/trends">
          <Item>
            <ExploreIcon />
            Explore
          </Item>
        </Link>
        <Link to="/subscriptions">
          <Item>
            <SubscriptionsIcon />
            Subscription
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        {!currentUser && (
          <>
            <Login>
              Sign in to like videos, comment & subscribe
              <Link to="signin">
                <Button mt="10px">
                  <AccountCircleOutlinedIcon />
                  SIGN IN
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Title>Best of NiNTube</Title>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Maming
        </Item>
        <Item>
          <MovieFilterIcon />
          Movies
        </Item>
        <Item>
          <FeedIcon />
          News
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <FlagIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon />
          {darkMode ? 'Light' : 'Dark'} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
