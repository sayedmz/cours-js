let x = document.getElementById("img");
//تعديل البيانات
x.alt = "ronaldo"; // alt تغير
x.src = "download.jpg"; //تغيير الصورة
x.className = "ronaldo11";
//زيادة معلومات
x.title = "dooon";
//تعديل
x.setAttribute("class", "ronaldoooo");
// اضافة
x.setAttribute("title", "doonnnn");
//لحذف عنصر
x.removeAttribute("class");
// x.removeAttribute('id');
// x.removeAttribute('src');

//عرض بيانات
console.log(x.src); //عرض رابط الصورة
console.log(x.id); //id عرض
console.log(x.alt);
console.log(x.className);
console.log(x.title + "   this is title");

console.log(x.hasAttributes()); // attribute لمعرفة اذا كان العنصر يحتوي على
console.log(x.hasAttribute("alt")); //true
console.log(x.hasAttribute("style")); //false
//attribute لعرض جميع
console.log(x.attributes);
// [ id="img", class="ronaldo11",
// src="download.jpg", alt="ronaldo", title="dooon" ]

console.log(x.attributes[1]); //class="ronaldo11"
//=====================================
