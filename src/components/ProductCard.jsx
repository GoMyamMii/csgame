import styled from "styled-components";
import LinkBox from "./LinkBox";

const ProductCard = () => {
  return (
    <Wrapper>
      <LinkBox to={`/ProductDetail`}>
        <ProductImg></ProductImg>
        <ProductDescription>
          <PDBox>
            <ProductTitle>Apex Legends</ProductTitle>
            <ProductComments>[17]</ProductComments>
          </PDBox>
          <ProductTag>
            FPS/TPS, 배틀로얄, FPS/TPS, 배틀로얄, FPS/TPS, 배틀로얄, FPS/TPS,
            배틀로얄, FPS/TPS, 배틀로얄, FPS/TPS, 배틀로얄, FPS/TPS, 배틀로얄
          </ProductTag>
          <ProductPrice>5,800원</ProductPrice>
        </ProductDescription>
      </LinkBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 345px;
  height: 525px;
  margin-bottom: 20px;
`;

const ProductImg = styled.img`
  width: 345px;
  height: 345px;
  border-radius: 10px 10px 0 0;
  border: none;
  display: flex;
  background-color: #999;
`;

const ProductDescription = styled.div`
  width: 345px;
  height: 180px;
  background-color: #333;
  border-radius: 0 0 10px 10px;
  border: none;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const PDBox = styled.div`
  margin: 20px 0 0 20px;
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const ProductTitle = styled.div`
  color: #fff;
  font-size: 24px;
`;

const ProductComments = styled.div`
  color: #ccc;
  font-size: 18px;
`;

const ProductTag = styled.div`
  margin: 20px 0 0 20px;
  color: #ccc;
  width: 305px;
  max-height: 40px;
  line-height: 1.2;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  font-size: 32px;
`;

export default ProductCard;
