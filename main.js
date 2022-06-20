
 function todo() {
  let secondinput = document.getElementById('our-input') 
  let firstinput = document.getElementById('my-input') 

    let a = Number(firstinput.value)
    let b = Number(secondinput.value)
    let sum = a + b
    let resultfield = document.getElementById('result-field')
    resultfield.textContent = sum

 }
 function doit() {
  let secondinput = document.getElementById('our-input') 
  let firstinput = document.getElementById('my-input') 

    let a = Number(firstinput.value)
    let b = Number(secondinput.value)
    let diff = a - b
    let resultfield = document.getElementById('result-field')
    resultfield.textContent = diff
  }
  function prod() {
    let secondinput = document.getElementById('our-input') 
    let firstinput = document.getElementById('my-input') 
  
      let a = Number(firstinput.value)
      let b = Number(secondinput.value)
      let pro = a * b
      let resultfield = document.getElementById('result-field')
      resultfield.textContent = pro
    }
    function divi() {
      let secondinput = document.getElementById('our-input') 
      let firstinput = document.getElementById('my-input') 
    
        let a = Number(firstinput.value)
        let b = Number(secondinput.value)
        let div = a / b
        let resultfield = document.getElementById('result-field')
        resultfield.textContent = div
      }