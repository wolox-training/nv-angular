angular.module('store').controller('LoginController', [
  function () {
    const signup = this;
    const form = document.getElementById('signup-form');

    window.onclick = function(event) {
      if (event.target == form) {
        form.style.display = "none";
      }
    };

    signup.redirect = () => {
      window.location.href = "/#!/dashboard";
    };
  }
]);
