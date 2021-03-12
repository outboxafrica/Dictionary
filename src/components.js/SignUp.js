// import React, { useContext, useState } from "react";
// // import Loader from "./Loader";
// import { AuthContext } from "../context";
// import firebase from "firebase/app";
// import Profile from "./Profile";
// import "firebase/database";
// import "firebase/firestore";
// import { auth } from "../firebase";
// import { TextField } from "@material-ui/core";

// export default function SignUp() {
//   const { user } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const [err, setErr] = useState("");

//   function changeHandler(e) {
//     const { name, value } = e.target;

//     if (name === "email") setEmail(value);

//     if (name === "password") setPassword(value);
//   }

//   function submitHandler(ef) {
//     ef.preventDefault();

//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;

//         var userListRef = firebase.database().ref("users");
//         var newUserRef = userListRef.child(user.uid);
//         newUserRef.set({
//           email: email,
//           pic: "",
//           dislayName: "",
//         });
//         console.log(user);
//         // ...
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         // var errorMessage = error.message;
//         // setErr(errorMessage);
//         console.log(errorCode);
//         // ..
//       });
//   }

//   if (user) {
//     return <Profile />;
//   }
//   return (
//     <div>
//       <h2>Sign Up Here!</h2>
//       <form onSubmit={submitHandler}>
//         <TextField
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={email}
//           onChange={changeHandler}
//         />
//         <TextField
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={password}
//           onChange={changeHandler}
//         />

//         <TextField type="submit" />
//       </form>
//     </div>
//   );
// }

import React from 'react'

export default function SignUp(){

    return (
        <div>
            <h3>SIGNUP PAGE</h3>
        </div>
    )
}