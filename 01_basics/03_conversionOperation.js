let score ="13vh"
console.log(typeof score)
console.log(typeof (score))

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
// note as there is no strict check
let score1 =null 
console.log(typeof score1)
console.log(typeof (score1))

let valueInNumber1=Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)
/*
"33"=> 33
"13abhbd"=>NaN
true-> 1 ; false -> 0
also note when convert to the boolean
1=> true ; 0=> false
" "=> false
"divyans "=> true
*/

//  ******* Operations
let val=3
let negVal=-val
console.log(negVal)
//   all arithematic operation
console.log("1"+2) //12
console.log(1+"2") //12
console.log(1+2+"2") //32
console.log("1"+2+2) //122
console.log(+true) // 1
console.log(+"") //0



