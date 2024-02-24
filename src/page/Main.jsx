import styled from "styled-components";
import LinkBox from "../components/LinkBox";
const Main = () => {
  return (
    <MainContainer>
      <MainVisual>
        <MainBox>
          <TitleBox>
            <MVSubTitle>금주 추천 게임</MVSubTitle>
            <MVTitle>Dead By Daylight</MVTitle>
          </TitleBox>
          <MVTag>FPS/TPS, 공포, 온라인협동</MVTag>
        </MainBox>
      </MainVisual>

      <Category>
        <CategoryTitle>카테고리별로 살펴보기</CategoryTitle>
        <CategoryBox>
          <CategorySelect>FPS/TPS</CategorySelect>
          <LinkBox to={`/ProductPage`}>
            <ShowMore>더보기</ShowMore>
          </LinkBox>
        </CategoryBox>
        <CategoryContentsBox>
          <CategoryContent>
            <CategoryDescript>
              <DescriptTitle>APEX Legends</DescriptTitle>
              <DescriptPrice>5,800원</DescriptPrice>
            </CategoryDescript>
          </CategoryContent>
          <CategoryContent>
            <CategoryDescript>
              <DescriptTitle>APEX Legends</DescriptTitle>
              <DescriptPrice>5,800원</DescriptPrice>
            </CategoryDescript>
          </CategoryContent>
          <CategoryContent>
            <CategoryDescript>
              <DescriptTitle>APEX Legends</DescriptTitle>
              <DescriptPrice>5,800원</DescriptPrice>
            </CategoryDescript>
          </CategoryContent>
          <CategoryContent>
            <CategoryDescript>
              <DescriptTitle>APEX Legends</DescriptTitle>
              <DescriptPrice>5,800원</DescriptPrice>
            </CategoryDescript>
          </CategoryContent>
        </CategoryContentsBox>
      </Category>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainVisual = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  background-color: #444;
`;

const MainBox = styled.div`
  width: 1440px;
  height: 640px;
`;

const TitleBox = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
`;

const MVSubTitle = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: normal;
  color: #fff;
  //background-color: blue;
`;

const MVTitle = styled.div`
  font-size: 36px;
  font-weight: bolder;
  color: #fff;
  //background-color: green;
`;

const MVTag = styled.div`
  font-size: 16px;
  font-weight: lighter;
  color: #fff;
  //background-color: yellow;
`;

const Category = styled.div`
  width: 1440px;
  margin: 40px 0;
`;

const CategoryTitle = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CategoryBox = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CategorySelect = styled.div`
  font-size: 18px;
`;

const ShowMore = styled.div`
  height: auto;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const CategoryContentsBox = styled.div`
  width: 1440px;
  height: 345px;
  display: flex;
  gap: 0 20px;
`;

const CategoryContent = styled.div`
  width: 345px;
  height: 345px;
  background-color: #666;
  position: relative;
`;

const CategoryDescript = styled.div`
  width: 305px;
  height: 60px;
  padding: 20px;
  background-color: #ccc;
  position: absolute;
  bottom: 0;
`;

const DescriptTitle = styled.div`
  font-size: 16px;
`;

const DescriptPrice = styled.div`
  font-size: 24px;
  font-weight: bolder;
  position: absolute;
  bottom: 20px;
`;

export default Main;
