import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import ButtonBox from "../components/ButtonBox";
import LinkBox from "../components/LinkBox";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../firebase";

const ProductPage = () => {
  // const [posts, setPosts] = useState([]);

  // const getPosts = async () => {
  //   const query = await getDocs(collection(dbService, "posts"));
  //   query.forEach((doc) => {
  //     console.log("id : ", doc.id);
  //     console.log("data : ", doc.data());
  //   });
  // };

  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    console.log("1--> ", dbService);
    console.log("2--> ", dbService.collection("posts"));
    await dbService.collection("posts").onSnapshot((snapshot) => {
      const postArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log("postArray : ", postArray);
      setPosts(postArray);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Wrapper>
      <NavBar>
        <Category>
          <Title>전체 게임</Title>
        </Category>
        <LinkBox to={`/Post`}>
          <ButtonBox width={"140px"} height={"40px"} fontSize={"16px"}>
            글쓰기
          </ButtonBox>
        </LinkBox>
      </NavBar>
      <ProductListContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductListContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBar = styled.div`
  width: 1440px;
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
`;

const ProductListContainer = styled.div`
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export default ProductPage;
