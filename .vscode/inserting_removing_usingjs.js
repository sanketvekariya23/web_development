console.log("good morning");

document.querySelector(".container").innerHTML

document.querySelector(".container").innerText

document.querySelector(".container").tagName

// document.querySelector(".container").innerHTML = "sanket vekairya" ;

document.querySelector(".box").hasAttribute("style");

document.querySelector(".box").setAttribute("style" ,"display:inline");

let div = document.createElement("div");
div.setAttribute("class" , "created");
div.innerHTML = "this is inserted content by javascript";
document.querySelector(".box").append(div);

// remove class

// document.querySelector(".box").remove();

// class list and class name  

document.querySelector(".box").classList;
document.querySelector(".box").className;