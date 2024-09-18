// locual url

//https://www.google.com/search?client=firefox-b-d&q=googlr == herf

// https:  == protocol
//www.google.com == host name
// search?client=firefox-b-d&q=googlr == path name

// كيف نحصل على هذة المعلومات

console.log(location.href); //http://127.0.0.1:5500/4locul.html
console.log(location.hostname); //127.0.0.1
console.log(location.host); //127.0.0.1:5500
console.log(location.protocol); //http:

//لتعديل
//ينقل الى هذا الموقع
// location.href = 'https://m.facebook.com/login/?locale=ar_AR&refsrc=deprecated'

//لتعديل hostname
// location.hostname = ''

//لتعديل protocol

// location.protocol = ''

// prot لتعديل

// location.port = ''

//-----------------------------------
//لاعادة تحميل الصفحة
// location.reload()

//-----------------------------------
//يمكننا من الانتقال الى صفحة اخر مع الاحتفاظ بالمعلومات الصفحة الحالية

// location.assign('https://m.facebook.com/login/?locale=ar_AR&refsrc=deprecated')

//يمكننا من الانتقال الى صفحة اخر مع عدم الاحتفاظ بالمعلومات الصفحة الحالية

// location.replace('https://m.facebook.com/login/?locale=ar_AR&refsrc=deprecated')
