import axios from "axios";

// 로그인 서버와 통신하여 데이터 받고 처리하기
export const fetchLogin = async ({ id, password }) => {
  const response = await axios.get("http://localhost:4000/posts");

  // 서버 통신이 성공한다면
  if (response.ok) {
    // user에 json 값 대입
    const users = await response;
    // user의 id와 입력값과 비교
    const user = users.find((user) => user.id === id);
    if (!user || user.password !== password) {
      throw new Error("아이디와 비밀번호가 일치하지 않습니다.");
    }
    return user;
  }
  throw new Error("서버와의 통신이 원활하지 않습니다.");
};
