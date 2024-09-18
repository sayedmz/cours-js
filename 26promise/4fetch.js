fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 2;
    return full;
  })
  .then((two) => {
    console.log(two[0].name);
  });
