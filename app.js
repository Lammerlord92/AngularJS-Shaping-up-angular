
(function functionName() {
  var app=angular.module('gemStore',[]);


  app.controller('StoreController',function(){
    this.products=gems;
  });

  app.controller('PanelController',function(){
    this.tab=1;
    this.selectTab=function(setTab){
      this.tab=setTab;
    };
    this.isSelected=function(checkTab){
      return this.tab===checkTab;
    };
  });

  app.controller("ReviewController",function(){
    this.review={};

    this.addReview=function(product){
      this.review.createdOn=Date.now();
      product.reviews.push(this.review);
      this.review={};
    }
  });


  var gems=[{
    name:'Dodecahedron',
    price:2.95,
    description:'. . .',
    images:[
      "dodecahedron.jpg"
    ],
    reviews:[]
  },{
    name:'Pentagonal Gem',
    price:5.95,
    description:'. . .',
    images:[{
      full:'dodecahedron.jpg',
    }],
    reviews:[]
  }
]
})();
