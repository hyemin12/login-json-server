import Login from "./routes/Login";
import Home from "./routes/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./server/user_context";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
