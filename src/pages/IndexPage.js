import React from "react";

import { Link as RouterLink, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import Link from "@material-ui/core/Link";

import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  indexMenu: {
    margin: 26,
    "& a": {
      margin: 12
    }
  },
  container: {
    padding: 80,
    height: "100%",
    textAlign: "center"
  }
});

export default function IndexPage() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h2"> Play Cthulhu! </Typography>
      <Button variant="contained">
        <Link component={RouterLink} to="/lobby">
          Enter
        </Link>
      </Button>
      <Button variant="contained">
        <Link component={RouterLink} to="/rules">
          Help
        </Link>
      </Button>
    </Container>
  );
}
