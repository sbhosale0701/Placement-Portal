import { Grid, Typography } from "@material-ui/core";
import { Fullscreen } from "@material-ui/icons";

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "0px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2" >Welcome to DYP Placement Cell!</Typography>
     
      </Grid>
      <Grid item>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ItqtIXMWQG6xR31kgzALScS7ErsdawCk_ZnAY0TBO1c6dBaMk7Mh9cRM5aj5YrtRiaI&usqp=CAU" style={{height:450,width:"100vw"}}></img>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
