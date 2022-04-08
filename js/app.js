let container = document.querySelector('.conteiner');
let layer = document.querySelectorAll('.layer');

container.onmousemove = function(e){
    let X =e.pageX;
    let Y =e.pageY;

    layer[0].style.transform = 'translate('+ X/100 +'px, '+ Y/100
}
