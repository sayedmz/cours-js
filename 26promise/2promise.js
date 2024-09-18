//catch (no one came)  لم يتحقق الشرط
// finally  في كل الحالات نفذ لي هذه المهمه
const myPromise = new Promise((resolveFun, rejecteFun) => {
  let employees = ["oussma", "mouhamad", "ali", "sayed"];
  if (employees.length === 4) {
    resolveFun(employees);
    console.log(employees);
  } else {
    rejecteFun(Error("numbers of employees is not 4"));
  }
});
// .then((resolveValue) => {
//   resolveValue.length = 2;
//   console.log(resolveValue);
//   return resolveValue;
// })
// .then((resolveValue) => {
//   resolveValue.length = 1;
//   console.log(resolveValue);

//   return resolveValue;
// })
// .then((resolveValue) => {
//   console.log(`the choosen emplysee is ${resolveValue}`);
// })
// .catch((rejectReason) => {
//   console.log(rejectReason);
// })
// .finally(console.log(`the operation is done`));

//2eme mthode
myPromise.then((resolveValue) => {
  resolveValue.length = 2;
  return resolveValue;
});

myPromise.then((resolveValue) => {
  resolveValue.length = 1;
  console.log(resolveValue);

  return resolveValue;
});

myPromise.then((resolveValue) => {
  console.log(`the choosen emplysee is ${resolveValue}`);
});
