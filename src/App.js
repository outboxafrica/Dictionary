import React from "react";
import { AuthProvider } from "./context";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Lookbook from "./components/Lookbook";
import EditProfile from "./components/EditProfile";

import {Box} from '@material-ui/core';
function App() {

  return (
    <div className="App">
      <h1>Welcome to Dictionary!</h1>
      <AuthProvider>
        <Box display="flex" justifyContent="center">

        <Header />
        </Box>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/profile" exact component={Profile} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/lookbook" exact component={Lookbook} />
          <Route path="/edit_profile" exact component={EditProfile} />
          <Route path="/reset_password" exact component={ResetPassword} />
        </Switch>
      </AuthProvider>
   </div>
  );
}

export default App;
