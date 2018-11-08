angular.module('store').controller('DetailController', [
  function () {
    const detail = this;    
    detail.copy = copy;

    detail.comments= comments;
  }
]);

let copy = {
  "id": 1,
  "author": "Autor",
  "title": "Título",
  "genre": "Temática",
  "publisher": "Editorial",
  "year": "Año",
  "image_url": null,
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
};

let comments = [{
  "id": 1,
  "image_profile": null,
  "user": "Nico Vescio",
  "date": "xx/xx/xx",
  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
},
{
  "id": 2,
  "image_profile": null,
  "user": "Nico Vescio",
  "date": "xx/xx/xx",
  "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
}];