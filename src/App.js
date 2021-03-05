import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Components/User";
import { UserStorage } from "./UserContext";
import PrivateRouter from "./Components/Helper/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Login />} />
          <PrivateRouter path="conta" element={<User />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
