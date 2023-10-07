let i = 0
function increase() {
    const display = document.getElementById('display')
    i++
    display.innerText = i
    if(i>0){
        display.style.color="green"
    }
    else if(i==0){
        display.style.color="#000"
    }
}

function Reset() {
    const display = document.getElementById('display')
    display.innerText = '0'
    i = 0;
    if(i===0){
        display.style.color="black"
    }
    
}
function decrease() {
    const display = document.getElementById('display')
    i--
    display.innerText = i
    if(i<0){
        display.style.color="red"
    }
    else if(i==0){
        display.style.color="#000"
    }
}


