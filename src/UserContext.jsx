import React, { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(
    async function () {
      setData(null);
      setError(null);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/");
    },
    [navigate]
  );

  function validateEmail(email) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
    return regex.test(email);
  }

  async function userLogin(email, password) {
    try {
      setError(null);
      if (email.length === 0 || password.length === 0) {
        setError("Preencha todos os campos.");
        return false;
      } else if (!validateEmail(email)) {
        setError("Email inválido");
        return false;
      }
      const response = await fetch("http://localhost:3000/api/data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Usuário Inválido`);
      }
      const json = await response.json();
      const result = json.find(
        (user) => user.email === email && user.password === password
      );
      if (!result) {
        throw new Error(`Usuário Inválido`);
      }
      setData(result);
      setLogin(true);
      window.localStorage.setItem("token", result.id);
      navigate("/conta");
    } catch (error) {
      setError(error.message);
      setLogin(false);
    }
  }
  return (
    <UserContext.Provider value={{ userLogin, data, userLogout, login, error }}>
      {children}
    </UserContext.Provider>
  );
};
