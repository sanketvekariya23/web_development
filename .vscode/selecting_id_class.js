let con = document.getElementsByClassName('box');
console.log(con);

document.getElementById("redbox").style.backgroundColor = "red" ;

// console.log(document.querySelector(".box"));  // it select first class which class name is box


// if we want to access all class which is box then  we want to write method which is
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
});

console.log(document.getElementsByTagName("div"));