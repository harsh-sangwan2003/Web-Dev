let num = 7;
let flag = true;

for(let i=2; i*i<=num; i++){

    if(num%i==0){

        flag = false;
        break;
    }
}

if(flag){

    console.log("prime");
}

else{

    console.log("not prime");
}