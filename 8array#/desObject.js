const user = {
  name: "mouhmamad",
  age: 26,
  title: "developer",
  country: "lebanon",
  back: 100,
  skills: {
    html: 70,
    css: 50,
  },
};
console.log(user.name); //mouhmamad
console.log(user.age); //26
console.log(user.title); //developer
console.log(user.country); //lebanon
console.log(`===============`);

//1ere  methode
// let name = user.name;
// let age = user.age;
// let title = user.title;
// let country = user.country;

// console.log(name); //mouhmamad
// console.log(age); //26
// console.log(title); //developer
// console.log(country); //lebanon
console.log(`======================`);
//
//2eme methode
({
  name: x,
  age,
  title,
  country,
  color: co = "red",
  back = "39",
  skills: { html, css: cs },
} = user);
//=============================
console.log(x); //mouhmamad
console.log(age);
console.log(title);
console.log(country);
console.log(co); //red
console.log(back); //100

console.log(`my html skills progress is ${html}`); //my html skills progress is 70
console.log(`my css skills progress is ${cs}`); //my css skills progress is 50

//2em methode

const { html: skillsOne, css: skillsTwo } = user.skills;

console.log(`my html skills progress is ${skillsOne}`); //my html skills progress is 70
console.log(`my css skills progress is ${skillsTwo}`); //my css skills progress is 50
