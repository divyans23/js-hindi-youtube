const accountId=24127013
let accountEmail="divyans@nitj.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState

// accountId =2 not allowed 
console.log(accountId);
/*
 Prefer not to use var
 because of the issue in the block scope and the functional scope 
*/
console.log([accountId,accountEmail,accountPassword,accountCity])
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) 