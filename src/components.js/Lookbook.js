import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import ava from "../ava.png";

export default function Lookbook() {
  firebase.database().ref("users").off();

  firebase
    .database()
    .ref("users")
    .once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var data = childSnapshot.val();
        let displayName = data.displayName;
        let pic = data.pic;

        var listBody = document.querySelector("#listBody");
        var listRow = document.createElement("div");
        let listName = document.createElement("div");
        listBody.append(listRow);
        listRow.setAttribute("class", "list");
        listRow.style.backgroundImage = `url(${pic !== "" ? pic : ava})`;
        listRow.style.backgroundSize = "cover";
        listRow.style.width = "10em";
        listRow.style.height = "10em";
        listRow.style.margin = "5px";
        listRow.style.borderRadius = "10% 10% 0 0";
        listRow.style.display = "flex";
        listRow.style.flexDirection = "column";
        listRow.style.justifyContent = "flex-end";
        listName.style.display = "flex";
        listName.style.backgroundColor = "#88888ad0";
        listName.innerHTML = `
        <p>${displayName ? displayName : "User"}</p> 
        `;
        listRow.append(listName);
      });
    });

  return (
    <div>
      <div
        id="listBody"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          color: "white",
        }}
      ></div>
    </div>
  );
}
