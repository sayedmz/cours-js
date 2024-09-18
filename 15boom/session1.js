//sessionstorage  تحفظ المعلومات فقط خلال الوقت الذي يكون المتصف مفتوح

//sessionstorage  كل شيى ينطبق على عليه مثل لوكال من اضافات وحذف وكل شيئ

//localStorage   ستبقى المعلومات حتى لو اقفلنا الموقع

let txt = document.getElementById("txt");
if (localStorage.length > 0) {
  txt.value = localStorage.getItem("txt");
}

txt.onkeyup = function () {
  localStorage.setItem("txt", txt.value);
};

//---------------------------------------------------------------
// البيانات تذهب عمدما نقفل الموقع

let txt1 = document.getElementById("txt1");

if (sessionStorage.length > 0) {
  txt1.value = sessionStorage.getItem("txt1");
}

txt1.onkeyup = function () {
  sessionStorage.setItem("txt1", txt1.value);
};
