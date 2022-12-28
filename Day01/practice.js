//Problem Sheet
// Prob 1:
let num = 1;
while(num<=20){
	if(num%3==0 && num%5==0){
		console.log("FizzBuzz", num);
	}
	else if(num%5==0){
		console.log("Buzz", num);
	}
	else if(num%3==0){
		console.log("Fizz", num);
	}
	num+=1;
}

// prob 2:
let low = 6;
let high = 25
let flag = false;
for(let i=low;i<=high;i++){
	for(let j=2;j<=Math.sqrt(i);j++){
		if(i%j==0){
			flag=true;
			break;
		}
	}
	if(!flag){
		console.log(i);
	}
	flag = false;
}

// Prob 3: 
num = 5;
increasing
for(let i=1; i<=num; i+=2){
	//space
	let j=num -i ;
	let string = ""
	for (l=0; l<j; l+=2){
		string+= " "
	}
	//stars
	for (let k=0; k<i; k+=2){
		string+= "* "
	}

	j=num -i ;
	stringSpace = ""
	for (l=0; l<j; l+=2){
		string+= " "
	}
	console.log(string);
}

//decreasing
for(let i=num-1; i>=1; i-=2){
	//space
	let j=num -i ;
	let string = ""
	for (l=0; l<j; l+=2){
		string+= " "
	}
	//stars
	for (let k=0; k<i; k+=2){
		string+= "* "
	}

	j=num -i ;
	stringSpace = ""
	for (l=0; l<j; l+=2){
		string+= " "
	}
	console.log(string);
}

// Prob:4
n = 5;
for(let i= 0;i<n;i++){
	let string = "";
	let k = n-i;
	//space
	for(k;k>0;k--){
		string+=" ";
	}
	//star
	for(let j=0;j<=i;j++){
		string += "*";
	}
	console.log(string);
}

// Prob 5
let n = 5;
for(let i= 0;i<n;i++){
	let string = "";
	let k = i+1;
	//space
	for(k;k>0;k--){
		string+="*";
	}
	//star
	for(let j=0;j<=i;j++){
		string += " ";
	}
	console.log(string);
}

//Prob 6
num = 6574930303;
let count =0;
console.log(Math.abs(num).toString().length);