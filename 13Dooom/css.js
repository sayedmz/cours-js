let el = document.getElementById("d1");

el.style.color = "red";
el.style.fontWeight = "bold";

el.style.cssText = "color : yellow ; font-size : 44px ; opacity : 0.9"; // تلغي جميع ما قبلها

el.style.removeProperty("opacity");

el.style.setProperty("background", "green");

// document.styleSheets[0].rules[o].style.removeProperty("background");
