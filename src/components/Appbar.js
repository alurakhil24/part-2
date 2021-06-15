import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { useAuthState } from "../hooks/useAuthState";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(1),
  },
  title: {
    marginLeft: "auto",
    display: "flex",
    gap: "1rem",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [isAuthenticated] = useAuthState();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">My Application</Typography>
          <Typography variant="button" className={classes.title}>
            <Link color="inherit" to="/" component={RouterLink}>
              Home
            </Link>
            <Link color="inherit" to="/about" component={RouterLink}>
              About
            </Link>
            <Link color="inherit" to="/signin" component={RouterLink}>
              {isAuthenticated ? 'Sign out' : 'Sign in'}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
