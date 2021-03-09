"use strict";

const inputUsernameValue = document.querySelector(".js-text");
inputUsernameValue.innerHTML = localStorage.getItem("username");
