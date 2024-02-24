import styled from "styled-components";
import InputBox from "../components/InputBox";
import ButtonBox from "../components/ButtonBox";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { authService, dbService } from "../firebase";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const user = authService.currentUser;
  const navigate = useNavigate();

  const onChangePostTitle = (e) => {
    setPostTitle(e.target.value);
  };

  const onChangePostContent = (e) => {
    setPostContent(e.target.value);
  };

  const onClickPost = async () => {
    try {
      await addDoc(collection(dbService, "posts"), {
        postTitle: postTitle,
        postContent: postContent,
        userUid: user.uid,
        careateAt: Date.now(),
      });
      navigate("/ProductPage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <TitleContainer>
        <InputBox
          width={"1200px"}
          height={"30px"}
          fontSize={"22px"}
          padding={"10px 20px"}
          onChange={onChangePostTitle}
        />
        <ButtonBox width={"180px"} height={"50px"} onClick={onClickPost}>
          게시
        </ButtonBox>
      </TitleContainer>

      <DescTitle>게임 설명</DescTitle>
      <PostContent onChange={onChangePostContent} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1440px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

const DescTitle = styled.div`
  margin: 20px 0;
  font-size: 20px;
  font-weight: bolder;
`;

const PostContent = styled.textarea`
  width: 1400px;
  height: 560px;
  border: none;
  background-color: #ccc;
  border-radius: 10px;
  padding: 20px;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 26px;
  resize: none;
  outline: none;
`;

export default Post;
