(function(){
  const app = angular.module('store', ['ui.router']);
  
  app.config(function($stateProvider){
    const dashboardState = {
      name: 'dashboard',
      url: '/dashboard',
      templateUrl: './pages/dashboard.html',
      controller: 'StoreController as store'
    };

    const detailState = {
      name: 'detail',
      url: '/detail',
      templateUrl: './pages/detail.html',
      controller: 'BookController as book'
    };

    $stateProvider.state(dashboardState);
    $stateProvider.state(detailState);
  });
  
  app.controller('StoreController', function(){
    const store = this;    
    store.products = books;
        
    store.searchBook = function() {
      store.products = books;
      if(store.searchBox) {
        if(store.filterValue === 'title') {
          store.products = store.products.filter(book => book.title.toLowerCase().indexOf(store.searchBox.toLowerCase()) > -1);  
        } else if(store.filterValue === 'author') {
          store.products = store.products.filter(book => book.author.toLowerCase().indexOf(store.searchBox.toLowerCase()) > -1);  
        }
      }
    };
  });

  app.controller('BookController', function(){
    const book = this;    
    book.copy = copy;

    book.comments= comments;
  });  

  let copy = {
    "id": 1,
    "author": "Autor",
    "title": "Título",
    "genre": "Temática",
    "publisher": "Editorial",
    "year": "Año",
    "image_url": null,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }

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
  }]

  let books = [
    {
       "id":1,
       "author":"Emmie Thiel",
       "title":"Ring of Bright Water",
       "genre":"Short story",
       "publisher":"Butterworth-Heinemann",
       "year":"1968",
       "image_url":null
    },
    {
       "id":2,
       "author":"Christopher Pike",
       "title":"Scavenger Hunt",
       "genre":"other",
       "publisher":"Pocket Books",
       "year":"1989",
       "image_url":null
    },
    {
       "id":3,
       "author":"Lois Duncan",
       "title":"Locked in time",
       "genre":"suspense",
       "publisher":"Little, Brown",
       "year":"1985",
       "image_url":"http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg"
    },
    {
       "id":4,
       "author":"Christopher Pike",
       "title":"Scavenger Hunt",
       "genre":"suspense",
       "publisher":"Pocket Books",
       "year":"1989",
       "image_url":"http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg"
    },
    {
       "id":5,
       "author":"Christopher Pike",
       "title":"Scavenger Hunt",
       "genre":"suspense",
       "publisher":"Pocket Books",
       "year":"1989",
       "image_url":"http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg"
    },
    {
       "id":6,
       "author":"Paula Hawkins",
       "title":"The Girl on the Train\n",
       "genre":"suspense",
       "publisher":"Riverhead Books",
       "year":"2015",
       "image_url":"http://wolox-training.s3.amazonaws.com/uploads/content.jpeg"
    },
    {
       "id":7,
       "author":"Anthony Doerr",
       "title":"All the Light We Cannot See",
       "genre":"suspense",
       "publisher":"Scribner",
       "year":"2014",
       "image_url":"http://wolox-training.s3.amazonaws.com/uploads/content.jpeg"
    },
    {
       "id":8,
       "author":"John Katzenbach",
       "title":"The analyst",
       "genre":"thriller",
       "publisher":"Ballantine Books",
       "year":"2003",
       "image_url":"http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg"
    },
    {
       "id":9,
       "author":"Andy Weir",
       "title":"The Martian",
       "genre":"fiction",
       "publisher":"Crown Publishing Group",
       "year":"2011",
       "image_url":"http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg"
    }
 ];
})();

