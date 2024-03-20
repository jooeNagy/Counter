

const DecBtn = document.getElementById("btnDec"); 
const IncBtn = document.getElementById("btnInc"); 
const ResBtn = document.getElementById("btnRes"); 
const container = document.getElementById("count"); 

let count = 0;


IncBtn.onclick = function(){
    count++;
    container.textContent = count;
}
DecBtn.onclick = function(){
    count--;
    container.textContent = count;
}
ResBtn.onclick = function(){
    count = 0;
    container.textContent = count;
}