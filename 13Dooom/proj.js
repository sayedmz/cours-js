for (i = 0; i <= 100; i++) {
  let xDiv = document.createElement("div");
  let xh2 = document.createElement("h2");
  let xp = document.createElement("p");

  let yH2 = document.createTextNode("sayed");
  let yp = document.createTextNode("hello ");

  xDiv.className = "product";

  xh2.appendChild(yH2);
  xp.appendChild(yp);
  xDiv.appendChild(xh2);
  xDiv.appendChild(xp);

  document.body.appendChild(xDiv);
}
