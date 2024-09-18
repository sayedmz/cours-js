//exemple1

let role = prompt('what is your role')

if(role == 'admin') // اذا كان المستخدم ادمين 
{
    document.write('update, create, delete');//نفذ هذا
}
else if(role == 'moderator') // اذا كان المستخدم موديرتير 
{
    document.write('update, create');//نفذ هذا
}
else{
    document.write('hello user'); // اذا لم يتحقق اي شرط نفذ هذا
}