//=================================//1ere stage

let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

//  انشاء متغيير من اجل التحكم بزر الاضافة والتحديث معا
let mood = "create";
//  هذا المتغيير لجلب قيمة من داخل فونكشن لاننا لا نستطيع استعمالها بشكل مباشر
let tmp;
//  فقط للتاكد اننا جلبنا العناصر بشكل صحيح
// console.log(title, price, taxes, ads, discount, total, count, category, submit);

//==============================//function1 ==> get total

function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "#040";
  } else {
    total.innerHTML = "";
    total.style.background = "#a00d02";
  }
}
//=========================// create product2
//======================// save localStorage3
// let dataPro = [];

//  لحفظ جميع الداتا
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

submit.onclick = function () {
  let newPro = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML, // innerHTML  لانها ليست انبوت
    count: count.value,
    category: category.value.toLowerCase(),
  };

  // قمنا بحفظ المعلومات في ارري لنستطيع الوصول اليها

  //count  ==> numbers de product create6
  // dataPro.push(newPro);  في حالة نريد عنصر واحد فقط // create object (newPro) and create arry (dataPro) because save tote information when onclick
  //  console.log(dataPro);
  // count لنستطيع زيادة اكثر من عنصر حسب

  if (
    title.value != "" &&
    price.value != "" &&
    category.value != "" &&
    newPro.count < 100
  ) {
    if (mood === "create") {
      //  قسم الاضافات
      if (newPro.count > 1) {
        for (let i = 0; i < newPro.count; i++) {
          dataPro.push(newPro);
        }
      } else {
        dataPro.push(newPro);
      }
    } else {
      // قسم التعديلات

      dataPro[tmp] = newPro;
      mood = "create";
      count.style.display = "block";
      submit.innerHTML = "submit";
    }
    clearData();
  }

  // نحفظ المعلومات في لوكال لكي لا تحذف عند اغلاق الموقع
  localStorage.setItem("product", JSON.stringify(dataPro));
  // للتجربة مع البيانات
  //   console.log(dataPro);

  showData();
};

// ====================//clear inputs after create4
// // نقوم بتشغيل الونكشن مع سب مات
function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}

//=====================//read product5

function showData() {
  getTotal();
  let table = "";

  for (let i = 0; i < dataPro.length; i++) {
    table += `
         <tr>
            <td>${[i + 1]}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr>`;
    // console.log(table);
  }

  document.getElementById("tbody").innerHTML = table;

  //deleteAll
  let btnDelete = document.getElementById("deleteAll");
  if (dataPro.length > 0) {
    btnDelete.innerHTML = `
<button onclick="deleteAll()">delete All (${dataPro.length})</button>`;
  } else {
    btnDelete.innerHTML = ``;
  }
}
showData();

//=====================//delete product7

function deleteData(i) {
  dataPro.splice(i, 1);

  localStorage.product = JSON.stringify(dataPro);
  showData();
}
//delete all

function deleteAll() {
  // //1ere methode
  // dataPro = [];
  // localStorage.product = JSON.stringify(dataPro);
  // showData();
  //2eme methode
  localStorage.clear();
  dataPro.splice(0);
  showData();
}

//=====================//update product8
function updateData(i) {
  // console.log(i);
  title.value = dataPro[i].title;
  price.value = dataPro[i].price;
  taxes.value = dataPro[i].taxes;
  ads.value = dataPro[i].ads;
  discount.value = dataPro[i].discount;
  //1ere ==> total.innerHTML = dataPro[i].total;
  //2eme method
  getTotal();
  //=================
  // count.value = dataPro[i].count;
  count.style.display = "none";
  category.value = dataPro[i].category;
  submit.innerHTML = "Update";
  mood = "update";
  tmp = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}
//==========================//search9

let searchMood = "title";
function getSearchMood(id) {
  // console.log(id);
  let search = document.getElementById("search");
  if (id == "searchTitle") {
    searchMood = "title";
    search.placeholder = "search by title";
  } else {
    searchMood = "category";
    search.placeholder = "search by category";
  }
  // search.placeholder = "search by " + searchMood; //  للاختصار من اجل عدم تكرر السطر مرتين
  search.focus();
  // console.log(searchMood);
  search.value = "";
  showData();
}

function searchDta(value) {
  let table = "";
  // console.log(value);
  if (searchMood == "title") {
    for (let i = 0; i < dataPro.length; i++) {
      if (dataPro[i].title.includes(value.toLowerCase())) {
        // console.log(i);
        table += `
         <tr>
            <td>${[i]}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr>`;
      }
    }
  } else {
    for (let i = 0; i < dataPro.length; i++) {
      if (dataPro[i].category.includes(value.toLowerCase())) {
        table += `
         <tr>
            <td>${[i]}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr>`;
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
}

//   2eme methode ==> اختصار اللوب
//   for (let i = 0; i < dataPro.length; i++) {
//     if (searchMood == "title") {
//       if (dataPro[i].title.includes(value.toLowerCase())) {
//         // console.log(i);
//         table += `
//          <tr>
//             <td>${[i]}</td>
//             <td>${dataPro[i].title}</td>
//             <td>${dataPro[i].price}</td>
//             <td>${dataPro[i].taxes}</td>
//             <td>${dataPro[i].ads}</td>
//             <td>${dataPro[i].discount}</td>
//             <td>${dataPro[i].total}</td>
//             <td>${dataPro[i].category}</td>
//             <td><button onclick="updateData(${i})" id="update">update</button></td>
//             <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
//             </tr>`;
//       }
//     } else {
//       if (dataPro[i].category.includes(value.toLowerCase())) {
//         table += `
//          <tr>
//             <td>${[i]}</td>
//             <td>${dataPro[i].title}</td>
//             <td>${dataPro[i].price}</td>
//             <td>${dataPro[i].taxes}</td>
//             <td>${dataPro[i].ads}</td>
//             <td>${dataPro[i].discount}</td>
//             <td>${dataPro[i].total}</td>
//             <td>${dataPro[i].category}</td>
//             <td><button onclick="updateData(${i})" id="update">update</button></td>
//             <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
//             </tr>`;
//       }
//     }
//   }
//   document.getElementById("tbody").innerHTML = table;
// }
