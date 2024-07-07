// let a=1;
// let b=3;
// console.log(a+b+5);
// console.log(a)

/// learn js sfundamentals 
// currying - ordering functions inside functions ton reduce the parameters arity
function multiply(a){

    return function (b){  
        return a*b// uses closure of a 
    }

}

const twosum = multiply(2)
console.log(twosum(4))

// by bind 
function multi(a,b){
    return a*b

}
let threemulti = multi.bind(this,3)
console.log(threemulti(4))