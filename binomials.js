//n!
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
} 

console.log("n!= "+factorial(4));

//P(n,r) = n! / (n-r)!

let n=5;
let r=2;
let result=0;
let fact=0;
let fact2=0;

fact=factorial(n);
fact2=factorial(n-r);
result=fact/fact2;

console.log("P(n,r)= "+result);

//C(n,r)  = P(n,r) / r! 

let n2=5;
let r2=2;
let result2=0;
let fact3=0;

fact3=factorial(r);
result2=result/fact3;
console.log("C(n,r)= "+result2);

//Catalan

let result3=0;
let fact4=0;
let fact5=0;
let fact6=0;

fact4=factorial(2*n);
fact5=factorial(n+1);
fact6=factorial(n);
result3=fact4/(fact5*fact6);

console.log("Catalan= "+result3);