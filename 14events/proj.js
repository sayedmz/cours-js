let dollar = document.getElementById('dollar');
let lebanon = document.getElementById('lebanon');

//عند الكتابة في اول حقل ينقل الكلام الى الحقل الثاني حسب المعادلة
dollar.onkeyup = function(){
    lebanon.value = dollar.value * 90000;
}
//عند الكتابة في الحقل الثاني ينقل الكلام الى الحقل الاولى حسب المعادلة
lebanon.onkeyup = function(){
    dollar.value = lebanon.value / 90000 ;
}