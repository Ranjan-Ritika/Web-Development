//Day 1 of Web Dev
//Printing
console.log("Introduction to JavaScript");
// defining a variable
let variable = "I am a variable";//default vale: undefined;
console.log("The value of the variable is:",variable);
//variable types: Primitive Types: number, string, boolean, null
//JS only tells a variable not it's type
let a = null;
console.log(a);
a = true;
console.log(a);
// if else, loops --> syntactically similar to Java

// let number = 10
// for (let i=1;i<=number;i++){
// 	console.log("Number is:", i);
// }

// is prime
let number = 25;
let flag = false;
for( let i=2;i<=Math.sqrt(number);i++){
	if(number%i==0){
		flag = true;
		break;
	}
}
if(flag){
	console.log("Composite Number");
}
else{
	console.log("Prime Number");
}