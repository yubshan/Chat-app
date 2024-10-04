let display = document.querySelector(".value");
let buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () =>{

        if (item.dataset.button == '='){
            if (display.value != '' )
            display.value = eval(display.value);
        }
        else if(item.dataset.button == 'C'){
            display.value=''; 
        }
        else{
            display.value += item.dataset.button;
        }
    }

});