import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import Button from "@material-ui/core/Button";

const User = () => {
  const { data, userLogout } = useContext(UserContext);
  return (
    <>
      <Button variant="contained" color="primary" onClick={userLogout}>
        Sair
      </Button>
      <p>Nome: {data.first_name}</p>
      <p>Sobrenome: {data.last_name}</p>
      <p>Email: {data.email}</p>
    </>
  );
};

export default User;
