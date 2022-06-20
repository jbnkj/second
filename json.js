let obj = {
    name : "Jibin" ,
   age : 25 ,
    college : "gec"

}
console.log(obj)

const a = JSON.stringify(obj)
console.log(typeof(a))
const b = JSON.parse(a)
console.log(b);