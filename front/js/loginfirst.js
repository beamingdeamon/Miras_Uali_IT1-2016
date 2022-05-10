let name=localStorage.getItem('name')?localStorage.getItem('name'):''

        if(name==''){

          alert('U need to login first');

          window.location.href="../index.html";

}