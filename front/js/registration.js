$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

function myValidation(){  
    if(validation())
    {

    }
    return false;     
}

function validation(){
    var name = document.reg.name.value;
    var password = document.reg.psw.value;
    var email = document.reg.email.value;

  if (email==null || email==""){
      alert("Вы забыли ввести email");  
      var error = document.getElementById("email");
      error.classList.add("error");
    return false;  
  }
  else {
      var sucess = document.getElementById("email");
      sucess.classList.remove("error"); 
  }

  if (!EmailCheck(email)){
    alert("Вы ввели неправильный email");  
    var error = document.getElementById("email");
    error.classList.add("error");
  return false;  
  }
  else {
    var sucess = document.getElementById("email");
    sucess.classList.remove("error"); 
  }

    if (name==null || name==""){
        alert("Вы забыли ввести имя");  
        var error = document.getElementById("name");
        error.classList.add("error");
      return false;  
    }
    else {
        var sucess = document.getElementById("name");
        sucess.classList.remove("error"); 
    }

    if(password==null || password==""){  
        alert("Вы забыли ввести пароль");
        var error = document.getElementById("psw");
        error.classList.add("error");  
      return false;  
      }
      else {
        var sucess = document.getElementById("psw");
        sucess.classList.remove("error");
    }

    if(!PasswordCheck(password)){  
      alert("Пароль должен включать в себя 6 символов,один символ нижнего регистра,один символ верхнего регистра, хотя бы одну цифру");
      var error = document.getElementById("psw");
      error.classList.add("error");  
    return false;  
    }
    else {
      var sucess = document.getElementById("psw");
      sucess.classList.remove("error");
  }
    
    
    saveData();  
}

function saveData(){

  let email,name,psw;
  
  name = document.getElementById("name").value;
  
  email = document.getElementById("email").value;
  
  psw = document.getElementById("psw").value;
  
  let user_records=new Array();
  
  user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records.some((v)=>{return v.email==email}))
  {
  alert("Такой email уже зарегистрирован");
  }
  else
  {
  user_records.push({

  "name":name,

  "email":email,

  "psw":psw

  })

  localStorage.setItem("users",JSON.stringify(user_records));
  
  alert("Данные сохранены");
  }
  }

const email = document.reg.email.value;
const password = document.reg.psw.value;

const EmailCheck = email => {

  const requirementsE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return requirementsE.test(String(email).toLowerCase());
}

const PasswordCheck = (password) => {
  const requirementsP = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
  return requirementsP.test(password);
};

const admin = [
  {
      email:"admin",
      psw:"123123",
      name: "admin",
  },
]

localStorage.setItem("admin", JSON.stringify(admin));

function myValidation1(){  
    if(validation1())
    {
        
    }
    return false;     
}

function validation1(){
    
    var password = document.reg1.psw.value;
    var email = document.reg1.email.value; 
    if (email==null || email==""){
        alert("Вы забыли ввести email");  
        
      return false;  
    }
    else {
         
    }

    if(password.length<6){  
        alert("Пароль должен включать в себя 6 символов,один символ нижнего регистра,один символ верхнего регистра, хотя бы одну цифру");
          
      return false;  
      }
      else {
        
    }
    admincheck();
}

function admincheck(){

  const email = document.reg1.email.value;
  const psw = document.reg1.psw.value;
  
  let admin_records=new Array();
  let user_records=new Array();
  user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  admin_records=JSON.parse(localStorage.getItem("admin"))?JSON.parse(localStorage.getItem("admin")):[]
  enable_records=JSON.parse(localStorage.getItem("DisabledUsers"))?JSON.parse(localStorage.getItem("DisabledUsers")):[]
  
  
  if(enable_records.some((v)=>{return v.email==email})){
    alert("Вам вход запрещен");
  }
  else if(admin_records.some((v)=>{return v.email==email && v.psw==psw})){
  
  alert("Вход действителен");
  
  let current_user=admin_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
  
      localStorage.setItem('name',current_user.name);
      localStorage.setItem('email',current_user.email);
  
    window.location.href="index4.html"
  }
  else if(checkuser()){
    alert("Такого аккаунта не существует");
  }
  else if(user_records.some((v)=>{return v.email==email && v.psw==psw}))
  {
    alert("Вход действителен");

    let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]

    localStorage.setItem('name',current_user.name);
    localStorage.setItem('email',current_user.email);

    window.location.href="authorized/index3.html"
  }
  else{
      alert('Неправильный пароль');
  }
}

function checkuser(){
  
  const email = document.reg1.email.value;
  let user_records=new Array();
  user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

if (user_records.some((v) =>{return v.email == email})){
  return false;
}
else{
  return true;
}
}
