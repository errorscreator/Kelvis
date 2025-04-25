var product= document.querySelector('.collections')
var search= document.getElementById('search')
var productlist= product.querySelectorAll('div')


search.addEventListener('keyup',function(){
    var entervalue = event.target.value.toUpperCase()
    for(i=0; i<productlist.length; i=i+1)
    {
        var productname= productlist[i].querySelector('p').textContent

        if(productname.toUpperCase().indexOf(entervalue)<0)
        {
            productlist[i].style.display='none'
        }
        else{
            productlist[i].style.display='block'
        }
    }
})

