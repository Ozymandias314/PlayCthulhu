import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
  container: {
    padding: 40,
    height: "100%",
    textAlign: "center"
  },
  menu: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
    "& button": {
      margin: 12,
      marginTop: 6,
      marginBottom: 6
    },
    "& button:first-child": {
      marginTop: 12,
      marginBottom: 12
    },
    "& button:last-child": {
      marginBottom: 12
    }
  },
  warningBtn: {
    color: theme.palette.warning.contrastText,
    background: theme.palette.warning.main,
    "&:hover": {
      background: theme.palette.warning.dark
    }
  }
}));

export default function RulesPage() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid item xs={3}>
        <Card elevation={2} className={classes.menu}>
          <Button>Play</Button>
          <Button>New Room</Button>
          <Button>Join Room By ID</Button>
        </Card>
      </Grid>
    </Container>
  );
}
