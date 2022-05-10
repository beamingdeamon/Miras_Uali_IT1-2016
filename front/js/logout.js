let name=localStorage.getItem('name')?localStorage.getItem('name'):''

        if(name==''){

          alert('U need to login first');

          window.location.href="index3.html";

}
function Logout(){
  let Leave = confirm("Хотите выйти из аккаунта?");
  if (Leave){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    window.location.href="index3.html";
  }
}