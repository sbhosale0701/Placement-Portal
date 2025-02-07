import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
  } from "@material-ui/core";
  import { useHistory } from "react-router-dom/cjs/react-router-dom.min";// React Router v6
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const ApplicantNav = () => {
    const classes = useStyles();
    let history = useHistory();
  
    const handleClick = (location) => {
      console.log(location);
      history.push(location);
    };
  
    const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("type");
  history.push("/login");
};

  
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            DYP Placement Cell
          </Typography>
  
          <Button color="inherit" onClick={() => handleClick("/home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => handleClick("/applications")}>
            Applications
          </Button>
          <Button color="inherit" onClick={() => handleClick("/buildcv")}>
            BuildCV
          </Button>
          <Button color="inherit" onClick={() => handleClick("/dsa")}>
            DSA
          </Button>
          <Button color="inherit" onClick={() => handleClick("/apti")}>
            Aptitude
          </Button>
          <Button color="inherit" onClick={() => handleClick("/profile")}>
            Profile
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default ApplicantNav;
  