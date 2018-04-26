let p_ele = document.getElementById('text');
let div_ele = document.getElementById('unline');
let btn_ele = document.getElementById('btn');
let if_press = false;

btn_ele.onclick = function() {
    if (if_press === false) {
        div_ele.style.width = "15rem";
        p_ele.style.color = "rgba(30, 144, 255, 0.7)";
    } else {
        div_ele.style.width = "0rem";
        p_ele.style.color = "rgba(0, 0, 0, 9)";
    }
    if_press = !if_press;
}
