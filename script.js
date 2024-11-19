let inputEl=document.getElementById("input")
let dltEl=document.getElementById("dlt")
let resultEl=document.getElementById("result")
let clearEl=document.getElementById("clear")

function buttons(value){
    inputEl.value += value
}

function result(){
    inputEl.value = eval(inputEl.value)
}
function clr() {
    inputEl.value='';

}
function dlt(){
    inputEl.value = inputEl.value.slice(0,-1)
}

document.addEventListener('keydown',(event)=>{
    const validkeys='123456789/*-+.0%';
    if(validkeys.includes(event.key)){
        buttons(event.key)
    }
    else if(event.key==='Enter'){
        result()
    }else if(event.key='Backspace'){
        dlt()
    }
    else if(event.key='escap'){
        clr()
    }
})