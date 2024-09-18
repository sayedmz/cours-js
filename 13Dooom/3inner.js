//inner and outer
// لتبديل او العرض :  العنصر او ما بداخل العنصر
let y = document.getElementById("container");
let y1 = document.getElementById("container1");
let y2 = document.getElementById("container2");
let y3 = document.getElementById("container3");
let y4 = document.getElementById("container4");
let y5 = document.getElementById("container5");

console.log(y.outerHTML); //لعرض العنصر كامل
/* <div id="container">
        <h3>hello word</h3>
    </div> */

console.log(y.innerHTML); //لعرض ما بداخل العنصر
//<h3>hello word</h3>

y1.outerHTML = "<h2>hello</h2>  "; // html لتبديل العنصر بالكامل

y2.innerHTML = "<h2>innert html </h2>"; //  html نستطيع زيادة  html تبديل ما بداخل العنصر فقط على شكل

y3.innerText = "<p> innert <span></span> text3 </p>"; // لتبديل ما بداخل العنصر على شكل  بنص  html ليس له علاقة
//<p> innert text </p> تطبع

y4.outerText = "<h2> outer text4 </h2>"; //لتبديل  العنصر بالكامل على شكل  بنص  html ليس له علاقة

y5.textContent = "<h1> text content text2 </h1>"; // html ليس له علاقة
