import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context";
// import Login from "./Login";
import { Link
  // , Redirect 
} from "react-router-dom";
import { Button,Box } from "@material-ui/core";
import ava from "../ava.png";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    maxWidth: "500",
    
  },
  media: {
    height: "40vh",
  },

});

export default function Profile() {
  const { user } = useContext(AuthContext);
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [photoUrl, setPhoto] = useState("");
  // const [userId, setUserId] = useState("");
  // const [emailVerified, setVerif] = useState("");

  useEffect(() => {
    if (user != null) {
      setName(user.displayName);
      setEmail(user.email);
      // setPhoto(user.photoURL);
      // setVerif(user.emailVerified);
      // setUserId(user.uid);
    }
  }, [user]);

  return (
    <div style={{ width: '100%' }}>

    <Box display="flex" justifyContent="center" m={4} p={2}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} 
          image={ava}
           
          title="User_Photo" />
          <div>
         
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="large"
            color="primary"
          >
            <Link to='/edit_profile'>
              Edit Profile
              </Link>
          </Button>
          
        </CardActions>
      </Card>
    </Box>
    </div>
  );
}
