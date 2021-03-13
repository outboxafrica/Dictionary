import React, { useState, useContext } from "react";
import firebase from "firebase";
import "firebase/database";
import { AuthContext } from "../context";
import ava from "../ava.png";
import { BURL } from "../cloudinary";
import { Input, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "60vw",
    },
  },
  large: {
    width: "30vw",
    height: "auto",
  },
}));

export default function EditProfile() {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setName] = useState("");
  const [photo, setPhoto] = useState(user.photoURL);
  let userRef = firebase.database().ref("users").child(user.uid);

  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const classes = useStyles();

  function changeHandler(el) {
    const { name, value } = el.target;
    if (name === "NewName") setName(value);
    else if (name === "NewPassword") setPassword(value);
    // set new display name
    else if (name === "NewEmail") setEmail(value);
    return false;
  }

  function setError() {
    setTimeout(() => {
      setErr("");
    }, 3000);
  }

  function setMessage() {
    setTimeout(() => {
      setMsg("");
    }, 3000);
  }

  function updateEmail() {
    // set new email
    user
      .updateEmail(email)
      .then(function () {
        // Update successful.
        userRef.update({ email: email });
        console.log("Email changed!");
        setMsg("Email changed!");
        setMessage();
      })
      .catch(function (error) {
        // An error happened.
        console.log(error.code);
        setErr(error.message);
        setError();
      });
  }

  function updatePassword() {
    // set user's password
    user
      .updatePassword(password)
      .then(() => {
        // Update successful.
        console.log("Password changed!");
        setMsg("Password changed!");
        setMessage();
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
        setErr(error.message);
        setError();
      });
  }

  function updateName() {
    user
      .updateProfile({
        displayName: displayName,
      })
      .then(() => {
        // Update successful.
        userRef.update({ displayName: displayName });
        console.log("Name changed!");
        setMsg("Name changed!");
        setMessage();
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
        setErr(error.message);
        setError();
      });
  }

  function uploadPhoto(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "wq3lj5it");
    fetch(BURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.secure_url !== "") {
          const uploadedFileUrl = data.secure_url;
          setPhoto(uploadedFileUrl);
        }
      })
      .catch((err) => console.error(err.message));
  }

  function updatePhoto() {
    user
      .updateProfile({
        photoURL: photo,
      })
      .then(() => {
        // Update successful.
        userRef.update({ pic: photo });
        console.log("Photo changed!");
        setMsg("Photo changed!");

        // console.log(photo);
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
        setErr(error.Message);
      });
  }

  return (
    <div>
      <div>{err}</div>
      <div>{msg}</div>
      <form className="classes.root" noValidate={true} autoComplete="off">
        <img
          className={classes.large}
          src={!user.photoURL ? ava : photo}
          alt={displayName}
        />
        <div className={classes.root}>
          <TextField
            placeholder={user.displayName}
            name="NewName"
            type="text"
            value={displayName}
            onChange={changeHandler}
          />
        </div>
        <Button color="primary" onClick={updateName}>
          Change Name
        </Button>
        <div className={classes.root}>
          <TextField
            placeholder={user.email}
            name="NewEmail"
            value={email}
            type="email"
            onChange={changeHandler}
          />
        </div>

        <Button color="primary" onClick={updateEmail}>
          Change Email
        </Button>
        <div className={classes.root}>
          <TextField
            placeholder="Set New Password"
            name="NewPassword"
            value={password}
            type="password"
            onChange={changeHandler}
          />
        </div>

        <Button color="primary" onClick={updatePassword}>
          Change Password
        </Button>
      </form>
      <form method="post">
        <div className={classes.root}>
          <Input type="file" variant="contained" onChange={uploadPhoto} />
        </div>
        <div>
          <Button
            id="upload_widget"
            variant="outlined"
            color="primary"
            size="large"
            onClick={updatePhoto}
            m={5}
          >
            Change Avatar
          </Button>
        </div>
      </form>
    </div>
  );
}