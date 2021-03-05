import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const User = () => {
  const { data, userLogout } = useContext(UserContext);
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Button variant="contained" color="primary" onClick={userLogout}>
          Sair
        </Button>
        <p>Nome: {data.first_name}</p>
        <p>Sobrenome: {data.last_name}</p>
        <p>Email: {data.email}</p>
      </Container>
    </>
  );
};

export default User;
