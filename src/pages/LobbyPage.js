
import React from "react";

import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

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

  const [play, setPlay] = useState(false);

  function playButton() {
    setPlay(true);
  }

  return (
    <Container className={classes.container}>
      <Dialog open={play} onClose={() => setPlay(false)}>
        <DialogTitle> Play Cthulhu </DialogTitle>
      </Dialog>
      <Typography variant="h3" component="h2" gutterBottom>
        Play Cthulhu!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Card elevation={2} className={classes.menu}>
            <Button onClick={playButton} variant="contained" color="primary">
              Play
            </Button>
            <Button variant="contained">New Room</Button>
            <Button variant="contained">Join Room By ID</Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
