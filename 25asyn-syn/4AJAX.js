//AJAX ==> asynchronous javaScript and MXL
// لست لغة برمجة
//  العمليات لا تتداخل مع بعضها

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
// console.log(myRequest);

// readyState
// 0 ==> not initialized
// 1 ==> يوجد اتصال
// 2 ==>  تم الاستلام
// 3 ==>  يتم المعالجة
// 4 ==>  انتهى العمل وهو جاهز للعرض
// status
//200 ==> response is successful
//404 ==> not found
//=============================================================
//onreadystatechange  readyState ترمز الى تغير
// myRequest.onreadystatechange = function () {
//   console.log(myRequest.readyState);
//   console.log(myRequest.status);
// };
// 2
// 200
// 3
// 200
// 4
// 200
//=============================================================

//  كيفية جلب معلومات من الرابط

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
