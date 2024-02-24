import styled from "styled-components";
import { authService } from "../firebase";
import ButtonBox from "./ButtonBox";

const Comment = () => {
  const user = authService.currentUser;

  return (
    <Wrapper>
      <UserImg src={user.photoURL} />
      <ContentsBox>
        <UserName>{user.displayName}</UserName>

        <CommentContents>{`댓글댓글
      댓글
      대댓글
      대대대대대대대ㅐ대댓글
      대대ㅐ대대ㅐ대대대대ㅐ대대ㅐ대
      대대대ㅐ대댓`}</CommentContents>
      </ContentsBox>
      <ButtonContainer>
        <ButtonBox width={"50px"} height={"30px"} fontsize={"14px"}>
          수정
        </ButtonBox>
        <ButtonBox width={"50px"} height={"30px"} fontsize={"14px"}>
          삭제
        </ButtonBox>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  display: flex;
  position: relative;
`;

const UserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 200px;
  margin-right: 20px;
  background-color: #333;
  border: none;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UserName = styled.div`
  font-weight: bolder;
  font-size: 22px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 10px;
`;

const CommentContents = styled.div`
  display: flex;
  white-space: pre-line;
  line-height: 22px;
  font-size: 16px;
  font-weight: lighter;
`;

export default Comment;
