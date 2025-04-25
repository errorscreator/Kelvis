var sidenav= document.querySelector(".side-symbol");


function openslide(){
    sidenav.style.left= '0'

}

function closeslide(){
    sidenav.style.left= '-65%'

}

var main= document.getElementById('main-img')
var small= document.getElementsByClassName('smallest-img')

small[0].onclick = function(){
    main.src = small[0].src;
}
small[1].onclick = function(){
    main.src = small[1].src;
}
small[2].onclick = function(){
    main.src = small[2].src;
}
small[3].onclick = function(){
    main.src = small[3].src;
}


