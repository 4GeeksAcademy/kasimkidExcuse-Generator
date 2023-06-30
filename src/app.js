/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
function random(who, action, what, when) {
  var randomWho = [Math.floor(Math.random() * who.length)];
  var randomAction = [Math.floor(Math.random() * action.length)];
  var randomWhat = [Math.floor(Math.random() * what.length)];
  var randomWhen = [Math.floor(Math.random() * when.length)];
  return (
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen]
  );
}
var homework = document.getElementById("homework");
homework.innerHTML = random(who, action, what, when);
window.onload = onload;

console.log("Hello Rigo from the console!");
