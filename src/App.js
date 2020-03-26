import React, { useState, useEffect } from "react";
import "./styles.css";

import firebase from "./firebase";

import IndexPage from "./pages/IndexPage";
import RulesPage from "./pages/RulesPage";
import LobbyPage from "./pages/LobbyPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [uid, setUid] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!uid) {
      firebase
        .auth()
        .signInAnonymously()
        .catch(error => {
          alert("Unable to connect to the server. Please try again later.");
        });
    }
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
      }
      if (user) {
        // User is signed in.
        setUid(user.uid);
      } else {
        // User is signed out.
        setUid(null);
      }
    });
  }, [uid]);

  useEffect(() => {
    if (!uid) {
      setUser(null);
      return;
    }
    const userRef = firebase.database().ref(`/users/${uid}`);
    function update(snapshot) {
      if (snapshot.exists()) {
        setUser({ ...snapshot.val(), id: uid });
      } else {
        userRef.set({
          games: {},
          // color: generateColor(),
          name: "hi"
        });
      }
    }
    userRef.on("value", update);
    return () => {
      userRef.off("value", update);
    };
  }, [uid]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/rules" component={RulesPage} />
        <Route exact path="/lobby" component={LobbyPage} />
      </Switch>
    </Router>
  );
}
