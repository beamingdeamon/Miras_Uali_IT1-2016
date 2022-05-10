class User {

constructor(email, name, psw, index) {

    this.email = email;

    this.name = name;

    this.psw = psw;

    this.index = index;
    }
}

class Displayuserlist {

static displayUsers() {

const users = LocalStorageFunction.getUsers();
  
users.forEach((user) => Displayuserlist.addUserToList(user));
}
  
static addUserToList(user) {

    const list = document.querySelector('#user-list');
  
    const newBook = document.createElement('tr');
  
    newBook.innerHTML = `

        <td>${user.email}</td> <td>${user.name}</td> <td>${user.psw}</td>
        <td> <button class="btn btn-danger delete">Delete</button> </td>
        <td> <button class="btn btn-primary" onClick="onEdit(this)"> Edit </button> </td>
        <td>${user.index}</td>
    `;
  
    list.appendChild(newBook);
}
static editUsertolist(user){
    console.log("fdsfds");
}
  
    static deleteUser(el) {

        if(el.classList.contains('delete')) {

            el.parentElement.parentElement.remove();
    }
    
}

static editUser(el) {

    if(el.classList.contains('edit')) {

        el.parentElement.parentElement.remove();
}

}

static clearFields() {

    document.querySelector('#email').value = '';

    document.querySelector('#name').value = '';

    document.querySelector('#psw').value = '';

    document.querySelector('#index').value = '';
    }
}

class LocalStorageFunction {

    static getUsers() {
    
    let users;
    
    if(localStorage.getItem('users') === null) {

    users = [];
    } else {

        users = JSON.parse(localStorage.getItem('users'));
        }
  
      return users;

    }
  
    static addUser(user) {

      const users = LocalStorageFunction.getUsers();

      users.push(user);

      localStorage.setItem('users', JSON.stringify(users));
    }
  
    static removeBook(psw) {

      const users = LocalStorageFunction.getUsers();
  
      users.forEach((user, index) => {

        if(user.psw === psw) {
            users.splice(index, 1);

        }

            });
  
      localStorage.setItem('users', JSON.stringify(users));
    }

    static editUser(user) {
        const users = LocalStorageFunction.getUsers();
        users.get(user);
        localStorage.setItem('users',JSON.stringify(users));
    }
}

document.addEventListener('DOMContentLoaded', Displayuserlist.displayUsers);

document.querySelector('#user-form').addEventListener('submit', (e) => {
e.preventDefault();

const email = document.querySelector('#email').value;

const name = document.querySelector('#name').value;

const psw = document.querySelector('#psw').value;

const index = document.querySelector('#index').value;

    const user = new User(email, name, psw, index);
  
    Displayuserlist.addUserToList(user);

    LocalStorageFunction.addUser(user);

    Displayuserlist.clearFields();
    
});

document.querySelector('#user-list').addEventListener('click', (e) => {

    Displayuserlist.deleteUser(e.target);

    LocalStorageFunction.removeBook(e.target.parentElement.previousElementSibling.textContent);

});

var selectedRow = null;

function editbutton(e){
    event.preventDefault();
    var formData = readFormData();
    updateRecord(formData);
}

function readFormData() {

    var formData = {};

    formData["email"] = document.getElementById("email").value;

    formData["name"] = document.getElementById("name").value;

    formData["psw"] = document.getElementById("psw").value;

    formData["index"] = document.getElementById("index").value;

    return formData;
}

function onEdit(td){

    selectedRow = td.parentElement.parentElement;

    document.getElementById('email').value = selectedRow.cells[0].innerHTML;

    document.getElementById('name').value = selectedRow.cells[1].innerHTML;

    document.getElementById('psw').value = selectedRow.cells[2].innerHTML;

    document.getElementById('index').value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {    
    var updatedUser = JSON.parse(localStorage.getItem("users"));
    key = document.getElementById('index').value = selectedRow.cells[5].innerHTML;
    updatedUser[key].email = formData.email;
    updatedUser[key].name = formData.name;
    updatedUser[key].psw = formData.psw;

    selectedRow.cells[0].innerHTML = formData.email;
    
    selectedRow.cells[1].innerHTML = formData.name;

    selectedRow.cells[2].innerHTML = formData.psw;

    selectedRow.cells[5].innerHTML = formData.index;
    
    localStorage.setItem('users', JSON.stringify(updatedUser));
}

function disable(formData) {

var userss = JSON.parse(localStorage.getItem('DisabledUsers')) || [];

var Disabled = 
{
 'email': document.reg.email.value
};

userss.push(Disabled);

 localStorage.setItem('DisabledUsers', JSON.stringify(userss));
}

function enable() {
    localStorage.removeItem('DisabledUsers');
}
