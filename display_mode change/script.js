let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let mode = "light";

btn.addEventListener("click", () => {
  if (mode == "light") {
    mode = "dark";
  } else {
    mode = "light";
  }

  if (mode == "light") {
    body.classList.remove("dark");
    body.classList.add("light");
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
  }

  console.log(mode);
});
