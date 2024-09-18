
let user = {
    age : 30,
};
// add
user.name = 'mouhamad';

user['first'] = 'zakaria';

console.log(user);//{age: 30, name: 'mouhamad', first: 'zakaria'}

//تعديل
user.age = 26 ;
console.log(user);//{age: 26, name: 'mouhamad', first: 'zakaria'}

user['age'] = 20;
console.log(user.age);//20

user.x = function(){
    return 'hello user'
};
console.log(user.x()); // hello user
//  عمل object
let user1 = new String();
console.log(user1);//String ('')
let user2 = new Number();
console.log(user2);//Number (0)
let user3 = new Object();
console.log(user3);//{}
user3.title = 'ahmad';
console.log(user3);//{title: 'ahmad'}
console.log(user3.title);//ahamd