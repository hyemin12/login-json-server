import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">로그인하기</Link>
    </div>
  );
}
export default Home;
