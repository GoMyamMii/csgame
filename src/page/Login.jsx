import styled from "styled-components";
import InputBox from "../components/InputBox";
import ButtonBox from "../components/ButtonBox";
import LinkBox from "../components/LinkBox";
import { useCallback, useState } from "react";
import { authService } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const navigate = useNavigate();

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식을 확인해주세요.");
    } else {
      setEmailMessage("");
    }
  }, []);

  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    const passwordCurrent = e.target.value;
    setPassWord(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "대문자, 소문자, 특수문자 포함 8글자 이상 15글자 이하로 적어주세요."
      );
    } else {
      setPasswordMessage("");
    }
  }, []);

  const onClicksignIn = async () => {
    console.log("로그인페이지 - user", authService);
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log("error", error);
      alert("로그인 실패!");
    }
  };

  return (
    <Wrapper>
      <Logo>Login</Logo>
      <AccountHelp>
        <LinkBox to={`/Signup`}>Sign up</LinkBox>
        <LinkBox to={`/`}>Find account</LinkBox>
      </AccountHelp>
      <InputContainer>
        <InputBox
          placeholder={"Email"}
          value={email}
          onChange={onChangeEmail}
        ></InputBox>
        {email.length > 0 && <span>{emailMessage}</span>}
        <InputBox
          placeholder={"PASSWORD"}
          value={password}
          onChange={onChangePassword}
        ></InputBox>
        {password.length > 0 && <span>{passwordMessage}</span>}
      </InputContainer>
      <ButtonBox onClick={onClicksignIn}>LOGIN</ButtonBox>
      <SectionBox>
        <HorizentalLine />
        <SectionText>or</SectionText>
        <HorizentalLine />
      </SectionBox>
      <ButtonBox>Google Login</ButtonBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 720px;
  min-height: calc(100vh - 200px);
  margin: 40px auto;
  gap: 10px;
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: bolder;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
`;

const AccountHelp = styled.div`
  width: 504px;
  display: flex;
  justify-content: space-between;
`;

const SectionBox = styled.div`
  width: 504px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
`;

const HorizentalLine = styled.div`
  width: 220px;
  text-align: center;
  border-bottom: 1px solid #999;
  line-height: 1px;
`;

const SectionText = styled.p`
  font-size: 18px;
`;

export default Login;
