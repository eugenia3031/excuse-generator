/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generate();
  });
};

let generate = () => {
  let who = ["My dog", "The police", "A tornado", "My cat", "My grandpa"];
  let what = ["ate", "took", "flew", "float", "stole"];
  let which = ["my homework", "my car", "my house", "my chair", "my cellphone"];
  let when = ["yesterday.", "this morning.", "last night.", "last week."];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whichIndex = Math.floor(Math.random() * which.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " " +
    which[whichIndex] +
    " " +
    when[whenIndex]
  );
};
