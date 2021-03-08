import React, { useContext
    , useState, 
    // useEffect
   } from "react";
  import { AuthContext } from "../context";
  // import { auth } from "../firebase";
  import {Button, Input
    // , Avatar
    , Typography,Link} from "@material-ui/core"
  import { makeStyles } from "@material-ui/core/styles";
  import {Image
    // , Video, Transformation
    // , CloudinaryContext
  } 
    from 'cloudinary-react';
  
  const useStyles = makeStyles((theme) => ({
      root: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
    }));
    
  export default function EditProfile(){
  
      const { user } = useContext(AuthContext);
  
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [name,setName] = useState()
  
      const classes = useStyles();
  
      function updateEmail(em){
        em.preventDefault();
  
        const {name,value} = em.target;
        setEmail(value)
        
        if(name==='NewEmail')
        user.updateEmail(email).then(function() {
          // Update successful.
          console.log("set email");
        }).catch(function(error) {
          // An error happened.
          console.log(error.message);
        });
        
      }
  
      function updatePassword(ep){
  ep.preventDefault()
  
  const {name,value} = ep.target;
  setEmail(value)
  setPassword(value)
  if(name==='NewPassword')
   // set user's password
      user
        .updatePassword(password)
        .then(function () {
          // Update successful.
        })
        .catch(function (error) {
          // An error happened.
        });
      }
      // }
  
  // function updateUser(el) {
  //     el.preventDefault();
  
      // Update photo and name
      // user
      //   .updateProfile({
      //     displayName: "User Name",
      //     photoURL: "https://example.com/jane-q-user/profile.jpg",
      //   })
      //   .then(function () {
      //     // Update successful.
      //   })
      //   .catch(function (error) {
      //     // An error happened.
      //   });
  
      // // update Email
      // user
      //   .sendEmailVerification()
      //   .then(function () {
      //     // Email sent.
      //   })
      //   .catch(function (error) {
      //     // An error happened.
      //   });
  
     
  
      // function changeAvatar(){
       
      // }
  
        return (
            <div>
  <form className={classes.root} noValidate autoComplete="off">
  {/* {user.displayName} */}
          <div>
  
          <Image cloudName="djaw9c2yt" publicId="sample" width="300" crop="scale" /></div>
         {/* <Avatar variant="rounded" /> */}
         <Typography className={classes.root}>
        <Link href="#" 
      //   onClick={preventDefault}
        >
          <Button id="upload_widget" 
          variant="contained" color="primary"
          // class="cloudinary-button" 
          // onClick={changeAvatar} 
          >
          Change Avatar
          </Button>
        </Link>
       
      </Typography>
          <Input
            placeholder="New Name"
            name="NewName"
            value={name}
            inputProps={{ "aria-label": "description" }}
            // onChange={}
          />
          <Input
            placeholder="New Email"
            name="NewEmail"
            value={email}
            inputProps={{ "aria-label": "description" }}
            type="email"
            onChange={updateEmail}
          />
          <Input
            placeholder="Set New Password"
            name="NewPassword"
            value={password}
            type="password"
            inputProps={{ "aria-label": "description" }}
          />
             
  <Button variant="contained" color="primary" 
  // onClick={updateUser}
  >
          SAVE CHANGES
        </Button>
  </form>
            </div>
        )
    }
  