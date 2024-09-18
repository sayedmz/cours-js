// loop  on data
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.open("GET", "1syntax.json");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);//  لعرض كل شيئ
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};

// //search   يجب البحث عنهم
// cross origin API [cros]
// API authentication
