import React, { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import FeedPage from "./pages/Feed";
import AuthPage from "./pages/Auth";
import styles from "./App.module.css";
import { auth as firebaseAuth } from "./firebase";
import { useDispatch } from "react-redux";
import { authActions } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();
  const hisotry = useHistory();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(authActions.login(user));
        hisotry.replace("/feed");
      } else {
        dispatch(authActions.logout());
        hisotry.replace("/auth/login");
      }
    });
  }, [hisotry, dispatch]);

  return (
    <div className={styles.app}>
      <Switch>
        <Route path="/feed">
          <FeedPage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="*">
          <Redirect to="/feed" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
