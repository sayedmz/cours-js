let txt = document.getElementById('txt');
let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');
//focus  للاشارة على العنصر
window.onload = function(){
    txt.focus();
    btn1.click();
    // txt.value = 'txttttt'
    txt.placeholder = 'txttttt'
}

txt.oncontextmenu = function(){
    txt.blur()
}

btn.onclick = function(){
    btn.style.background = '#ff2'
}




btn1.onclick = function(){
    btn1.style.background = '#ff2'
}

