import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../Assets/imgs/logoQuality.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin, error } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    userLogin(email, password);
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={Logo}></img>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              placeholder="Digite seu email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              placeholder="Senha"
              id="password"
              autoComplete="current-password"
            />
            <span>{error}</span>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
