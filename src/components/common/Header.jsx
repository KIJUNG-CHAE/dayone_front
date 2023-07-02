import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../modules/user';
import { Link, useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLogoSection,
  HeaderNavSection,
  InfoBox,
  Navsection0,
  Navsection1,
  Navsection2,
  SignButton,
  SmallLogoBox,
} from '../HomeStyle';
import SmallLogo from '../../assets/images/dayone_small_logo.svg';

const Header = ({ currentPage, setCurrentPage }) => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <HeaderContainer>
      <HeaderLogoSection>
        <SmallLogoBox src={SmallLogo} alt="dayone" loading="lazy" />
        <InfoBox>
          {user?.username}
          <SignButton onClick={onLogout}>로그아웃</SignButton>
        </InfoBox>
      </HeaderLogoSection>
      <HeaderNavSection>
        <Navsection0 currentPage={currentPage}>
          <Link to="/" onClick={() => setCurrentPage(0)}>
            데이기록
          </Link>
        </Navsection0>
        <Navsection1 currentPage={currentPage}>
          <Link to="/demoday" onClick={() => setCurrentPage(1)}>
            데모데이
          </Link>
        </Navsection1>
        <Navsection2 currentPage={currentPage}>
          <Link to="/mypage" onClick={() => setCurrentPage(2)}>
            나의기록
          </Link>
        </Navsection2>
      </HeaderNavSection>
    </HeaderContainer>
  );
};

export default Header;
