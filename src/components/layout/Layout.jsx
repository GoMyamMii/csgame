import Header from "./Header";
import Footer from "./Footer";
import Main from "../../page/Main";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../page/Login";
import Signup from "../../page/Signup";
import { useEffect, useState } from "react";
import { authService } from "../../firebase";
import ProductPage from "../../page/ProductPage";
import ProductDetail from "../../page/ProductDetail";
import Post from "../../page/Post";

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />

          <Route path="/Post" element={<Post />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Layout;
