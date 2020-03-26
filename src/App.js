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
    console.log("calling the first hook");
    if (uid) console.log("wtfff");
    if (!uid) {
      console.log("well definitely here");
      firebase
        .auth()
        .signInAnonymously()
        .catch(error => {
          alert("Unable to connect to the server. Please try again later.");
        });
    }
    return firebase.auth().onAuthStateChanged(user => {
      console.log("inside the return");
      if (user) {
        console.log("hello user was true");
      }
      if (user) {
        // User is signed in.
        console.log(user.uid);
        setUid(user.uid);
        console.log(uid);
      } else {
        // User is signed out.
        console.log("here please right");
        setUid(null);
      }
      console.log(user);
    });
  }, [uid]);

  useEffect(() => {
    console.log("inside hook 2");
    if (!uid) {
      console.log("this should happen...once?");
      setUser(null);
      return;
    }
    console.log("after hook 1 is called a second time");
    const userRef = firebase.database().ref(`/users/${uid}`);
    function update(snapshot) {
      if (snapshot.exists()) {
        setUser({ ...snapshot.val(), id: uid });
      } else {
        userRef.set({
          games: {}
          // color: generateColor(),
          //  name: generateName()
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
