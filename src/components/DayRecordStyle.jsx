import styled from 'styled-components';

export const DayRecordContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const DayRecordBorder = styled.div`
  width: 100%;
  border-bottom: ${(props) => `1px dashed ${props.theme.textColor}`};
`;

export const DayRecordButton = styled.button`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 3%;
  transform: translate(-50%, 0);
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.primaryColor};
  color: black;
  font-size: 14px;
  font-family: 'DMSansBold';
  font-weight: 900;
  padding: 10px;
  cursor: pointer;
`;

export const DayRecordButtonLine = styled.section`
  width: 125px;
  position: fixed;
  left: 50%;
  bottom: 1%;
  transform: translate(-50%, 0);
  border: ${(props) => `3px solid ${props.theme.textColor}`};
  border-radius: 25px;
`;

// 실시간 인기 덧붙임---------------------------------

export const HotCommentSection = styled.section`
  width: 100%;
  height: 40%;
  padding: 15px;
  margin-bottom: 30px;
`;

export const HotCommentHeader = styled.h1`
  font-family: 'DMSansBold';
  font-weight: 900;
  color: ${(props) => props.theme.textColor};
`;

export const HotCommentScrollBox = styled.section`
  width: 95%;
  height: 90%;
  display: flex;
  gap: 15px;
  flex-wrap: nowrap;
  overflow-x: auto;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  transition: all 0.3s;
  padding: 15px;
  margin: 10px;
`;

export const HotCommentEmptyIcon = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-size: 40px;
`;

export const HotCommentEmptyText = styled.p`
  font-size: 14px;
  font-weight: 900;
  color: ${(props) => props.theme.textColor};
`;

export const HotCommentContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 15px;
  transition: all 0.3s;
  @media all and (min-width: 1028px) {
    width: 500px;
  }
  @media all and (min-width: 768px) and (max-width: 1028px) {
    width: 400px;
  }
  @media all and (max-width: 400px) {
    width: 270px;
  }
`;

export const HotCommentBoxHeader = styled.section`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

export const HotCommentBoxBody = styled.section`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  line-height: 1.8;
`;

export const HotCommentBoxFooter = styled.section`
  width: 100%;
  height: 20%;
  display: flex;
  line-height: 1.8;
`;

// HotCommentBoxHeader------------------------------------------
export const UserBox = styled.section`
  width: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

export const UserProfile = styled.section`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-image: url(${(props) => props.postUserProfile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const UserName = styled.span`
  font-size: 12px;
  font-family: 'DMSansBold';
  font-weight: 900;
`;

export const DateBox = styled.section`
  width: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.secondaryColor};
`;

export const BookTitle = styled.h1`
  font-size: 12px;
  font-family: 'DMSansBold';
  font-weight: 900;
  color: ${(props) =>
    props.isCool ? props.theme.textColor : props.theme.bgColor};
`;

export const BookContent = styled.p`
  font-size: 11px;
  font-family: 'DMSansRegular';
  color: ${(props) =>
    props.isCool ? props.theme.textColor : props.theme.bgColor};
`;

export const CommentBorder = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const CommentButton = styled.button`
  width: 85px;
  height: 22px;
  border: ${(props) => (props.isCool ? `1.5px solid white` : 'none')};
  border-radius: 25px;
  font-size: 11px;
  background-color: ${(props) =>
    props.isCool ? 'transparent' : props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  opacity: ${(props) => (props.isCool ? '1' : '0.4')};
`;

export const LikeButton = styled.section`
  height: 22px;
  font-size: 12px;
  color: #a11f16;
  display: flex;
  align-items: center;
  gap: 3px;
`;

// 일자별 기록------------------------------------------------
export const DayContainer = styled.div`
  width: 100%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid yellow; */
  margin-top: 30px;
`;

export const DayPickerBox = styled.section`
  width: auto;
  height: auto;
  position: absolute;
  transition: all 0.3s;
`;

export const DayTodate = styled.h1`
  font-family: 'DMSansBold';
  font-weight: 900;
`;

export const DayEmptySection = styled.section`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DayEmptyIcon = styled.section`
  font-size: 62px;
  color: ${(props) => props.theme.textColor};
`;

export const DayEmptyText = styled.p`
  font-size: 14px;
  font-family: 'DMSansBold';
  font-weight: 900;
  color: ${(props) => props.theme.textColor};
`;

// 일자별 기록-----------------------------------------
export const CommentGridContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  justify-items: center;
  gap: 15px;
  transition: all 0.3s;
  margin-top: 30px;
  @media all and (max-width: 1680px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
  }
  @media all and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
  }
  @media all and (max-width: 860px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
  }
`;

export const CommentContainer = styled.div`
  width: 400px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props.theme.secondaryColor}`};
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  padding: 15px;
  @media all and (max-width: 400px) {
    min-width: 100%;
  }
`;

// 기록하기 페이지------------------------------------------------
export const PostContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border: 3px solid gray;
`;

export const PostHeader = styled.section`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PostLogoBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-family: 'DMSansBold';
  font-weight: 900;
  color: ${(props) => props.theme.textColor};
`;

export const PostLogo = styled.img`
  width: 150px;
  transition: all 0.3s;
`;

export const PostHandleButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  border: none;
  font-size: 14px;
  transition: all 0.3s;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostBody = styled.section`
  width: 100%;
  min-height: 85%;
  border: 1px solid yellow;
`;

export const PostFormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;
  border: 1px solid red;
  padding: 15px;
  transition: all 0.3s;
`;

export const PostTitleInput = styled.input`
  width: 90%;
  height: 45px;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  border: none;
  border: ${(props) => `1px solid ${props.theme.textColor}`};
`;

export const PostBookSelectSection = styled.section`
  width: 90%;
  height: 200px;
  display: ${(props) =>
    props.bookname === '' || props.isSelected ? 'none' : 'flex'};
  flex-direction: column;
  gap: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
  overflow-y: auto;
  padding: 15px;
  line-height: 1.5;
  z-index: 1;
`;

export const PostBookSelectBox = styled.section`
  width: 100%;
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;

export const PostImageSection = styled.section`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostImage = styled.img`
  width: 150px;
`;

export const PostContentSection = styled.section`
  width: 100%;
  height: 200px;
  border: 1px solid gray;
`;

export const PostCommentSection = styled.section`
  width: 100%;
  height: 200px;
  border: 1px solid gray;
`;
