import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { auth } from "../firebase";
import { AuthContext } from "../context";
import { Box } from "@material-ui/core";

const linkStyle = {
  textDecoration:"none",
  margin:"1em",
  fontSize:"1em",
  color:"white"
}

const headerStyle = {
  width: "100%",  backgroundColor:"#2E186A",marginBottom:"1em"
}

export default function Header() {
  const { user } = useContext(AuthContext);

  function logoutUser() {
    // e.preventDefault();
    auth
      .signOut()
      .then(() => {
        console.log("User logged out");
        <Redirect to="/" />;
      })
      .catch((err) => console.log(err));
  }

  if (!user) {
    return (
      <div style={headerStyle}>
        <Box display="flex" justifyContent="center" >
          <Link to="/" style={linkStyle}>HOME</Link>
        <Link to="/lookbook" style={linkStyle}>LOOKBOOK</Link>
          <Link to="/login" style={linkStyle}>LOGIN</Link>
          <Link to="/signup" style={linkStyle}>SIGNUP</Link>
        </Box>
      </div>
    );
  }
  return (
    <div style={headerStyle}>
      <Box display="flex" justifyContent="center">
        <Link to="/" style={linkStyle}>HOME</Link>
        <Link to="/lookbook" style={linkStyle}>LOOKBOOK</Link>
        <Link to="/profile" style={linkStyle}>PROFILE</Link>
        <Link to="/" onClick={logoutUser} style={linkStyle}>
          LOGOUT
        </Link>
      </Box>
    </div>
  );
}
