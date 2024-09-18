const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();

    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("no data"));
      }
    };
    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};
getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 5;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej))
  .finally(console.log(`the operation is done`));

//https://api.github.com/users/elzerowebschool/repos

//   let jsData = JSON.parse(this.responseText);

//   for (let i = 0; i < jsData.length; i++) {
//     let div = document.createElement("div");
//     let repoName = document.createTextNode(jsData[i].full_name);
//     div.appendChild(repoName);
//     document.body.appendChild(div);
//   }
