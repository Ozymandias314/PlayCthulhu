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
    console.log("here" + user);
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        setUid(user.uid);
      } else {
        // User is signed out.
        console.log("here please right");
        setUid(null);
      }
    });
  }, [uid]);

  useEffect(() => {
    console.log("here?");
    if (!uid) {
      console.log("oh here");
      setUser(null);
      return;
    }
    const userRef = firebase.database().ref(`/users/${uid}`);
    function update(snapshot) {
      if (snapshot.exists()) {
        console.log("fine here");
        setUser({ ...snapshot.val(), id: uid });
      } else {
        console.log("are we ever here");
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

  const userRef = firebase.database().ref(`/users/${uid}`);

  if (snapshot.exists()) {
    console.log("fine here");
    setUser({ ...snapshot.val(), id: uid });
  } else {
    console.log("are we ever here");
    userRef.set({
      games: {}
      // color: generateColor(),
      //  name: generateName()
    });
  }

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
