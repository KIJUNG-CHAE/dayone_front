import client from './client';
import AuthForm from '../../components/auth/AuthForm';

// 로그인
export const healthCheck = () => client.get(`/ping`);

// 로그인
export const login = ({ code }) =>
  client.get(`/v1/auth/login/front?code=${code}`);

// login
// export const login = ({ code, redirectUri }) => {
//   client.post('/api/v1/auth/login', { code, redirectUri });
// };

// 유저 체크
export const check = ({ access_token }) => {
  return client.get('/v1/auth/check', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 로그아웃
export const logout = () => client.get('/v1/auth/logout');
// client.get(`/api/v1/auth/login?code=${code}`);

// 전체 기록조회
export const allPost = (access_token) => {
  console.log('auth api', access_token);
  return client.get('/v1/posts', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 베스트 기록조회
export const bestPost = (access_token) => {
  return client.get('/v1/posts/best', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 기록 추가
export const addPost = (access_token, PostData) => {
  return client.post('/v1/posts', PostData, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 책 조회
export const searchBook = (search, access_token) => {
  console.log('auth api', access_token);
  return client.get(
    `/v1/posts/search/book?query=${search}&display=10&start=1`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

// 데모데이 전체 조회
export const demoday = (access_token) => {
  return client.get('/v1/demodays', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 데모데이 단건 조회
export const demodayOne = (access_token, demoday_id) => {
  return client.get(`/v1/demodays/${demoday_id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 데모데이 참가신청
export const joinDemoday = (access_token, demoday_id) => {
  console.log('joinDemoday api', access_token);

  return client.post(`/v1/demodays/${demoday_id}/join`, null, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 데모데이 이미지 업로드 추가
export const addDemodayImage = (access_token, imageData) => {
  return client.post('/v1/demodays/img', imageData, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

// 데모데이 추가
export const addDemoday = (access_token, demodayData) => {
  return client.post('/v1/demodays', demodayData, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 나의 책장 조회
export const bookcase = (access_token) => {
  return client.get('/v1/users/books', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// 나의 책 기록 모아보기
export const bookRecord = (access_token, book_id) => {
  return client.get(`/v1/users/books/${book_id}/posts`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
