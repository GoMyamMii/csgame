import styled from "styled-components";
import ButtonBox from "../components/ButtonBox";
import InputBox from "../components/InputBox";
import { authService } from "../firebase";
import Comment from "../components/Comment";

const ProductDetail = () => {
  const user = authService.currentUser;

  return (
    <Wrapper>
      <TitleContainer>
        <Title>Apex Legends</Title>
        <ButtonContainer>
          <ButtonBox width={"60px"} height={"40px"}>
            수정
          </ButtonBox>
          <ButtonBox width={"60px"} height={"40px"}>
            삭제
          </ButtonBox>
        </ButtonContainer>
      </TitleContainer>

      <ProductImgContainer>
        <ProductImg />
        <ProductImg />
      </ProductImgContainer>

      <ProductDescriptionContainer>
        <DescTitle>게임 설명</DescTitle>
        <Line />
        <Description>
          {`히어로 슈팅 게임 Apex 레전드에서 나만의 캐릭터로 전장을 점령하세요.
          강력한 능력을 지닌 레전드 캐릭터들이 힘을 합쳐 프런티어의 변경에서 영예와 부를 차지하기 위한 전투에 뛰어드세요.
          계속 추가되는 레전드, 깊이 있는 전술적 분대 플레이, 배틀 로얄 그 이상의 혁신을 경험하세요.
          이 모든 것이 어떤 제약도 없는 거친 세계에서 펼쳐집니다.
          새롭게 진화한 히어로 슈팅을 플레이하세요.`}
        </Description>
      </ProductDescriptionContainer>

      <CommentContainer>
        <CommentTitle>댓글</CommentTitle>
        {user ? (
          <CommentInputBox>
            <InputBox width={"1340px"} height={"60px"} />
            <ButtonBox width={"80px"} height={"60px"} fontSize={"16px"}>
              게시
            </ButtonBox>
          </CommentInputBox>
        ) : (
          <></>
        )}
        <Comment />
      </CommentContainer>
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
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 36px;
`;

const ProductImgContainer = styled.div`
  margin-top: 20px;
  background-color: #ddd;
  height: 600px;
  gap: 10px;
  overflow-x: hidden;
  display: flex;
`;

const ProductImg = styled.img`
  background-color: #333;
  min-width: 900px;
  min-height: 600px;
  object-fit: cover;
`;

const ProductDescriptionContainer = styled.div`
  margin-top: 20px;
  gap: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;
const DescTitle = styled.div`
  font-size: 18px;
  font-weight: bolder;
`;
const Line = styled.div`
  width: 1440px;
  height: 1px;
  background-color: #999;
`;

const Description = styled.div`
  white-space: pre-line;
  line-height: 22px;
`;

const CommentContainer = styled.div`
  margin-top: 40px;
  gap: 20px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CommentTitle = styled.div`
  font-size: 18px;
  font-weight: bolder;
`;

const CommentInputBox = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ProductDetail;
