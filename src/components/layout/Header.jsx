import styled from "styled-components";
import LinkBox from "../LinkBox";
import { authService } from "../../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = authService.currentUser;

  const Logout = () => {
    signOut(authService);
    alert("로그아웃 완료");
  };

  return (
    <HeaderContainer>
      <HeaderContents>
        <LinkBox to={`/`}>
          <Logo>CSGAME</Logo>
        </LinkBox>
        <SignInfo>
          {user ? (
            <>
              <Userimg src={user.photoURL} />
              <LogoutBtn onClick={() => Logout()}>로그아웃</LogoutBtn>
            </>
          ) : (
            <>
              <LinkBox to={`/Login`}>
                <Menu>로그인</Menu>
              </LinkBox>
              <LinkBox to={`/Signup`}>
                <Menu>회원가입</Menu>
              </LinkBox>
            </>
          )}
        </SignInfo>
      </HeaderContents>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 80px;
  background-color: #333;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContents = styled.div`
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 42px;
  color: #fff;
`;

const Menu = styled.span`
  color: #fff;
  margin-left: 20px;
`;

const SignInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Userimg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

const LogoutBtn = styled.span`
  cursor: pointer;
`;

export default Header;
