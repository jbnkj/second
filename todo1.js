function todo() {
   const myinput = document.getElementById("my-input")
  addtolist(myinput.value)
myinput.value = ""
}   


function addtolist(text) {
const mylist = document.createElement("li")
mylist.innerText = text
const inputlist = document.getElementById("my-list")
inputlist.prepend(mylist)
}  