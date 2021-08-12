// let count = 0
// function increment() {
//    let newCount = count++
// document.getElementById("count").innerText = newCount;
// }
let name = prompt("Hey dear, Welcome! Please whats your name?");
alert(`Hello ${name}! This is just a mini Javascript project. A program that allows you to record the number of people counted. i hope you find it helpful.`)
document.getElementById("name").textContent = name;
let saveEl = document.getElementById("save-el") 
let NewCount = document.getElementById("count")
let count = 0
 
function increment() {
    NewCount.textContent = count++ 
}

function save() {
    let countStr = NewCount.innerText + " - "
    saveEl.textContent += countStr
    // console.log(NewCount.innerText);
    NewCount.textContent = 0;
    count = 0;
}
function reset() {
    document.getElementById("save-el").textContent = "Previous Entries: "
}



