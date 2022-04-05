import LoginForm from "../components/LoginForm";
import SnsLogin from "../components/SnsLogin";
import "../css/login.scss";

function Login() {
  return (
    <section className="login">
      <div className="login-wrapper">
        <h1>로그인</h1>
        <LoginForm />
        <SnsLogin />
      </div>
    </section>
  );
}
export default Login;
