import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../server/fetchLogin";
import { useUserContext } from "../server/user_context";

function LoginForm() {
  const navigator = useNavigate();
  const [account, setAccount] = useState({ id: "", password: "" });
  const { setUser } = useUserContext();
  function handleInputValue(e) {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  }
  const onClickLogin = async () => {
    try {
      const user = await fetchLogin(account);
      setUser(user);
      navigator("/");
    } catch (error) {
      alert(error);
    }
    console.log("login!");
  };

  return (
    <>
      <div className="login_form">
        <input type="text" name="id" placeholder="아이디" />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleInputValue}
        />
        <button onClick={onClickLogin}>로그인</button>
      </div>
      <ul className="login_more">
        <li>회원가입</li>
        <li>비밀번호찾기</li>
      </ul>
    </>
  );
}

export default LoginForm;
