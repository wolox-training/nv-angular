angular.module('store').controller('LoginController', [
  function () {
    const login = this;
    const form = document.getElementById('login-form');
    login.users = users;

    window.onclick = function(event) {
      if (event.target == form) {
        form.style.display = "none";
      }
    };

    login.redirect = () => {
      const email = document.getElementById('login-email').value;
      const psw = document.getElementById('login-psw').value;
      const index = login.users.map(e => e.email).indexOf(email);
      if(psw === login.users[index].password) {
        localStorage.setItem('token', login.users[index].token);
        const item = localStorage.getItem('token');
        console.log(item);
      } else { 
        alert("ERROR DE CREDENCIALES"); 
      }
    };
  }
]);

let users = [
  {
    "email": "admin@admin.com",
    "password": "admin123",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  },
  {
    "email": "user@user.com",
    "password": "user1234",
    "token": "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV"
  }
];
