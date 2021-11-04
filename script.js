var x = 8;
if(x>0){
    console.log("+ve");
}
else if(x<0){
    console.log("-ve");
}
else{
    console.log("zero");
}

var a = 5, b=2;
console.log("a+b = " , a+b);
console.log("a-b = " , a-b);
console.log("a*b = " , a*b);
console.log("a/b = " , a/b);
console.log("a%b = " , a%b);

var a = 0,b = 1;
if(a&&b){
    console.log("true");
}
else{
    console.log("false");
}

var a = 1;
var b = "1";
if(a===b){
    console.log("same");
}
else{
    console.log("not same");
// }

var a = 0
if(a>0||a===0){
    console.log("Positive");
}
else{
    console.log("Negative");
}

for(var i = 1;i<=10;i++){
    console.log(i);
}

var i = 0;
while(i<=10){
    console.log(i);
    i++;
}

var i= 1;
do{
    console.log(i);
    i++;
}while(i<=10);


var i= -1,c=0;
do{
    console.log(i);
    i++;
    c++;
    if(c===20){
        break;
    }
}while(i>=0);

function add(a,b){
    return a+b;
}
console.log(add(10,20));
console.log(add(12,20));
console.log(add(6,7));

c = add(4,5);
console.log("c = ",c)

var a = 1;
 function func(){
     a++;
 }

 for(var i =0;i<=10;i++){
     if(i%2==0){
         continue;
     } 
     func();
     console.log(a);
 }