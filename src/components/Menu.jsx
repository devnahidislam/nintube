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

const Container = styled.div`
  flex: 1;
  background: black;
  color: azure;
  height: 100vh;
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: azure gray;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: gray;
  }
  &::-webkit-scrollbar-thumb {
    background: azure;
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
  padding: 0 15px;
  cursor: pointer;
`;
const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 5px;

  &:hover {
    background-color: #333;
  }
`;
const Hr = styled.hr`
  margin: 10px 0;
  border: 0.5px solid #373737;
`;
const Login = styled.div`
  padding-left: 10px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  font-weight: 500;
  border-radius: 3px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    color:azure;
    border: 1px solid azure;
    background-color: #222;
  }
`;
const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={nintube} />
          NiNTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscription
        </Item>
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
        <Login>
          Sign in to like videos, comment & subscribe
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Login>
        <Hr />
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
        <Item>
          <SettingsBrightnessIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
