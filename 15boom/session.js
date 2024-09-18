//localstorge && sessionstorage  مساحة للتخزين

//اضافة بيانات  -  قراءة البيانات   - حذف بيانات

//localstorge 5mb - 10mb  تحفظ البيانات الى ما لا نهاية
//sessionstorage 5 mb
//=========================================================
// اضافة بيانات
//بيالنات دائما حتى لو حذفنا الكود لا تحذف الابطريقة خاصة
// كل ما بداخلها يجب ان يكتب على شكل سترينغ

localStorage.setItem("name", "mouhamad zak"); // 2eme methode localStorage.name = 'mouhamad zak';
localStorage.setItem("age", "26"); // value == string 26 == string
localStorage.setItem("color", "red");
// الاستفادة من المعلومات في لوكلستورج
document.body.style.backgroundColor = localStorage.getItem("color");
localStorage.setItem("skills", [1, 2, 3, 4]); // 1,2,3,4 == string  وليس arry

localStorage.x = {
  name1: "ahamd",
  age1: 25,
}; //[object Object]  لا تظهر لانها ارري
// للتصحيح الاخطاء هذه
//JSON.stringify  لنستكيع كتابة العنصر كما نشاء وترده الى اصله

localStorage.setItem("age2", JSON.stringify(26));

localStorage.setItem("skills1", JSON.stringify([1, 2, 3, 4])); //[1,2,3,4]

localStorage.x1 = JSON.stringify({
  name11: "ahamd1",
  age11: 250,
}); //{"name11":"ahamd1","age11":250}

console.log(typeof localStorage.getItem("skills1")); //string

// لحل المشكلة نستعمل وردها الى اصلها
console.log(JSON.parse(localStorage.getItem("skills1"))); //Array(4) [ 1, 2, 3, 4 ]

console.log(JSON.parse(localStorage.getItem("x1"))); //Object { name11: "ahamd1", age11: 250 }

// key  للوصول الى ال

console.log(localStorage.key(1)); //x1
console.log(localStorage.key(3)); //skills
//================================================================
// delete
localStorage.removeItem("age");
//لمسح كل شى
//   localStorage.clear()

//=========================================================
// قراءة بيانات

console.log(localStorage.getItem("name")); //mouhamad zak
//2eme methode
console.log(localStorage.name); //mouhamad zak

//======================================================================================
