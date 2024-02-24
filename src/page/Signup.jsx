import styled from "styled-components";
import InputBox from "../components/InputBox";
import ButtonBox from "../components/ButtonBox";
import LinkBox from "../components/LinkBox";
import { useCallback, useState } from "react";
import { authService, dbService, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordCheck, setPassWordCheck] = useState("");
  const [nickName, setNickName] = useState("");
  const [bio, setBio] = useState("");

  const [imageURL, setImageURL] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const navigate = useNavigate();

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식을 확인해주세요");
    } else {
      setEmailMessage("");
    }
  }, []);

  const onChangeName = useCallback((e) => {
    const nickName_validation = new RegExp(
      /^(?=.*[A-Za-z0-9가-힣])[A-Za-z0-9가-힣]{2,8}$/
    );
    const nickNameCurrent = e.target.value;
    setNickName(nickNameCurrent);
    if (nickName_validation.test(nickNameCurrent)) {
      setNickNameMessage("");
    } else {
      setNickNameMessage(
        "특수문자 제외 2글자 이상 8글자 이하로 공백 없이 입력해주세요."
      );
    }
  }, []);

  const onChangeBio = useCallback((e) => {
    const BioCurrent = e.target.value;
    setBio(BioCurrent);
  }, []);

  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    const passwordCurrent = e.target.value;
    setPassWord(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "대문자, 숫자, 특수문자 포함 8글자 이상 15글자 이하로 적어주세요"
      );
    } else {
      setPasswordMessage("");
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPassWordCheck(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("");
      } else {
        setPasswordConfirmMessage("비밀번호를 확인해주세요");
      }
    },
    [password]
  );

  const onSubmitSignUp = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        authService,
        email,
        password
      );
      await authService.signOut();
      await updateProfile(user, {
        displayName: nickName,
        photoURL: imageURL,
      });
      await setDoc(doc(dbService, "profile", user.uid), {
        displayName: nickName,
        photoURL: imageURL,
        email: user.email,
        uid: user.uid,
        bio: bio,
      });
      navigate("/Login");
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeImage = (e) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const storageRef = ref(storage, `image/${file[0].name}`);
    const uploadTask = uploadBytes(storageRef, file[0]);

    uploadTask.then((snapshot) => {
      e.target.value = "";
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        // console.log("ddd", downloadURL);
        setImageURL(downloadURL);
      });
    });
  };

  return (
    <Wrapper onSubmit={onSubmitSignUp}>
      <Title>Sign up</Title>

      <AccountHelp>
        <LinkBox to={`/Login`}>Login</LinkBox>
        <LinkBox to={`/`}>Find account</LinkBox>
      </AccountHelp>
      <InputBox placeholder={"Email"} value={email} onChange={onChangeEmail} />

      {email.length > 0 && <span>{emailMessage}</span>}

      <FormSectionBox>
        <InputBox
          placeholder={"Password"}
          value={password}
          onChange={onChangePassword}
        />

        {password.length > 0 && <span>{passwordMessage}</span>}

        <InputBox
          placeholder={"Confirm Password"}
          value={passwordCheck}
          onChange={onChangePasswordConfirm}
        />

        {passwordCheck.length > 0 && <span>{passwordConfirmMessage}</span>}
      </FormSectionBox>
      <UserImgBox>
        <UserImg src={imageURL} referrerPolicy="no-referrer" />
        {!imageURL ? <HelpText>upload your image</HelpText> : <></>}
      </UserImgBox>
      <input type="file" onChange={onChangeImage}></input>
      <FormSectionBox>
        <InputBox
          placeholder={"Nickname"}
          value={nickName}
          onChange={onChangeName}
        />

        {nickName.length > 0 && <span>{nickNameMessage}</span>}

        <InputBox placeholder={"Bio"} value={bio} onChange={onChangeBio} />
      </FormSectionBox>
      <ButtonBox type="submit">Sign up</ButtonBox>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 720px;
  min-height: calc(100vh - 200px);
  margin: 40px auto;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bolder;
  margin-bottom: 20px;
`;

const AccountHelp = styled.div`
  width: 504px;
  display: flex;
  justify-content: space-between;
`;

const FormSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  gap: 10px;
`;

const UserImgBox = styled.div`
  min-width: 100px;
  width: 200px;
  min-height: 100px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserImg = styled.img`
  background-color: #999;
  min-width: 100px;
  width: 200px;
  min-height: 100px;
  height: 200px;
  border-radius: 200px;
  border: 1px solid white;

  align-items: center;
  justify-content: center;
`;

const HelpText = styled.span`
  color: #eee;
  position: absolute;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default Signup;
