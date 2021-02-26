let first_Name = document.getElementById('inp-Fname');
let last_Name = document.getElementById('inp-Lname');
let user_Email = document.getElementById('inp-Email');
let user_Birthday = document.getElementById('inp-Birthday');
let btn = document.getElementById('inp-Submit');
let miz = document.getElementById('mytable')
let num = 1;
function my_Function(){
    miz.appendChild(document.createElement('tr'))
    miz.appendChild(document.createElement('th')).innerText=num
    miz.appendChild(document.createElement('th')).innerText=my_User.firstname
    miz.appendChild(document.createElement('th')).innerText=my_User.lastname
    miz.appendChild(document.createElement('th')).innerText=my_User.email
    miz.appendChild(document.createElement('th')).innerText=my_User.birthday
    num++
    my_User={
        firstname:'',
        lastname:'',
        email:'',
        birthday:''
    }
}
let my_User={
    firstname:'',
    lastname:'',
    email:'',
    birthday:''
}
first_Name.addEventListener("input",function(e){
    my_User.firstname=e.target.value
})
last_Name.addEventListener("input",function(e){
    my_User.lastname=e.target.value
})
user_Email.addEventListener("input",function(e){
    my_User.email=e.target.value
})
user_Birthday.addEventListener("input",function(e){
    my_User.birthday=e.target.value
})
btn.addEventListener("click",my_Function)



