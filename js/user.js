"use strict";

const inputUsernameValue = document.querySelector(".js-text");
inputUsernameValue.innerHTML =
  "¡Hola" + " " + localStorage.getItem("username") + "!";
