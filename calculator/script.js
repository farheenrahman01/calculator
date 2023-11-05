function myFunction(i) {
var text=document.getElementsByClassName(i).textContent
console.log(text)
var inputtext=document.getElementById("screen").textContent
console.log(inputtext)
inputtext+=text
document.getElementById("screen").textContent=inputtext
console.log(inputtext)
}
