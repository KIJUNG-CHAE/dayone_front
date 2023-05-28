import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../components/common/HeaderContainer';
import BestPostList from '../components/post/BestPostList';
import DatePostList from '../components/post/DatePostList';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <br /> <br /> <br /> <br /> <br /> <br />
      <BestPostList />
      <p>
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      </p>
      <br />
      <DatePostList />
      <br />
      <Link to="/postform">
        <button>기록하기</button>
      </Link>
    </>
  );
};

export default MainPage;
