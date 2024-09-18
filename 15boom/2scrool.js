//لوضع سكرول  في مكان معين

//طرق وضع السكرول في نقطة معينة من الصفحة
// window.scroll({
//     left:200,
//     top: 250
// })
//---------------------------
// 2eme methode

// window.scroll(200,250);
//---------------------------

//3eme methode

// window.scrollTo(200,250);
//---------------------------
//4eme methode
// هنا تزداد القيمة مع ضغط
//تقوم بالزيادة القيمة حسب مكان السكرول
// اذا كان السكرول في نقطة 50 واعطينا قمية 50 يصبح في نقكة 100
// window.scrollBy(50,30)
// window.scrollBy(50,30)
// window.scrollBy(50,30)
// window.scrollBy(50,30)
// window.scrollBy(50,30)

//------------------------------------------------------
//لمعرفة نقطة السكرول

//scrollX = pageXOffset,scrollY = pageYOffset  تكتب في الصفحة في قسم كونسول

//exercise

let btn = document.getElementById("btn");
//تحديد على اي حد يظهر زر الذي يعيدنا الى اول الصفحة
window.onscroll = function () {
  if (scrollY >= 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
//جعل الزر يعيدنا الى البداية بسلاسة وبشكل جميل
btn.onclick = function () {
  scroll({
    left: 0, // نقطة العودة بالنسبة اكس
    top: 0, //نقطة العودة بالنسبة واي
    behavior: "smooth", //طريقة العودة الى البداية
  });

  // scroll(0,0);
};
