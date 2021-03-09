"use strict";

const form = document.querySelector(".js-form");

function handleSubmit(ev) {
  ev.preventDefault();
}

form.addEventListener("submit", handleSubmit);
