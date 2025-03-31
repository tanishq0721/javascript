const accountId = 14453   // const means value get fixed
let accountEmail = "xyz@gmail.com" // Mostly let is used it can be change 
var accountPassword = "12345" 
accountCity = "Jaipur"  // Can be delared withoud any predefined but a bad practice

let accountState ; // semicolon applied or not doesn't matter

console.log(accountId) 

/*
 Prefer not to use var 
 because of issue in block and functional scope 
*/

// accountId = 2 // not allowed as previously we assigned const

accountEmail = "changed@gmail.com" 
accountPassword = "0987"
accountcity = "Bengaluru"



// For multiple printing we will use console.table

console.table([accountId , accountEmail , accountPassword , accountCity , accountState ])

