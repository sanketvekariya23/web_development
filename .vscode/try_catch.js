console.log("try_catch");

let a = prompt("enter first number");
let b = prompt("enter second number");

try {
    let c = a / b;
    console.log("the division of a and b is ", c * x);
}
catch (error) {
    console.log("x is not define");
}

// handle error another way..
    if (isNaN(a) || isNaN(b)) {
        throw SyntaxError("null value of a or b are not allowed..")
    }
    let d = parseInt(a) + parseInt(b);
    console.log('addition of a and b is ', d);