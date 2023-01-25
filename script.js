
function sayHello() {
    let name = prompt("What is your name?");
    alert("Hello " + name + "! Happy Burns Day!");
}
let helloButton = document.getElementById("sayhello");
helloButton.addEventListener("click", sayHello);


function sayBurns() {
    alert("It's by Robert Burns. Born on 25th January 1759.");
}
let burnsButton = document.getElementById("robbie");
burnsButton.addEventListener("click", sayBurns)
let liveReading = new Audio('readAloud.m4a')

function readPoem() {
    liveReading.play()
}
let readAloud = document.getElementById("readAloud")
readAloud.addEventListener("click", readPoem)

function stopPoem() {
    location.reload()
}
let stopReading = document.getElementById("stopRead")
stopReading.addEventListener("click", stopPoem)
