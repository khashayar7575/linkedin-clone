import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Login from "../../components/auth/login";
import Register from "../../components/auth/register";
import styles from "./index.module.css";

const Auth = () => {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`}>
        <Login />
      </Route>
      <Route path={`${path}/register`}>
        <Register />
      </Route>
      <Route path="*">
        <Redirect to={`${path}/login`} />
      </Route>
    </Switch>
  );
};

export default Auth;
