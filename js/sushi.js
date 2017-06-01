(function() {

  var stuff =[
    // {name: "bug1", w: 360, h: 245},
    // {name: "googles2", w: 362, h: 432},
    // {name: "laptop", w: 317, h: 358},
    // {name: "zombie", w: 318, h: 200},
    // {name: "pyramid", w: 88, h: 101},
    // //{name: "wasabi2", w: 108, h: 55},
    // //{name: "wasabi3", w: 108, h: 90},
    // //{name: "negitoro", w: 418, h: 438},
    // {name: "cloud", w: 322, h: 729},
    // {name: "shell", w: 382, h: 400}
  ];


  function getIngredients() {
    var ings = [];
    for (var i=0; i<7; i++) {
      var dice = Math.floor(Math.random()*stuff.length);
      ings.push( stuff[dice] );
    }
    return ings;
  }


  function _vendor( elem, prop, val ) {
    var vs = ["webkit", "Webkit", "Moz", "ms"];
    for (var i=0; i<vs.length; i++) {
      elem.style[ vs[i]+prop ] = val;
    }
  }

  function addIngredients( ings, parent ) {
    var rect = parent.getBoundingClientRect();
    for (var i=0; i<ings.length; i++) {
      var ing = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", "./images/"+ings[i].name+".png");
      ing.appendChild(img);
      ing.style.width = ings[i].w + "px";
      ing.style.height = ings[i].h + "px";
      ing.style.position = "absolute";
      ing.style.left = Math.floor(Math.random()*rect.width) + "px";
      ing.style.top = Math.floor(Math.random()*rect.height) + "px";
      var ang = Math.floor(Math.random()*360);
      var ang2 = Math.floor(Math.random()*90) - Math.floor(Math.random()*90);

      var tm = "rotate("+ang+"deg) scale(0.5)";
      ing.style.transform = tm;
      _vendor( ing, "Transform", tm );

      ing.setAttribute("data-angle", ang);
      ing.setAttribute("data-rotate", ang2);
      ing.className = "ingredient";
      parent.appendChild( ing );
    }
  }



  for (var i=0; i<7; i++) {
    var elem = document.querySelector("#s"+i);
    var ings = getIngredients();
    addIngredients( ings, elem );
  }

})();