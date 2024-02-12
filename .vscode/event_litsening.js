let button  = document.querySelector(".box-2");

button.addEventListener("click" ,()=>{
    button.innerHTML= "yes , you have selected successfully..!!!";
})

document.querySelector(".box-2").addEventListener("click" , ()=>{
    alert("box-2 was clicked");
})

// if we click on box-2 then automatic box-1 and container was clicked becuse box-2 is inside of box-1 and container that event is called event bubbling .

// we have to add stopPrapogation() 

document.querySelector(".box-2").addEventListener("click" , (e)=>{
    e.stopPropagation();
    alert("box-2 was clicked");
})
document.querySelector(".box-1").addEventListener("click" , (e1)=>{
    e1.stopPropagation();
    alert("box-1 was clicked");
})
document.querySelector(".container").addEventListener("click" , (e)=>{
    e.stopPropagation();
    alert("container was clicked");
})

function getrandomcolor (){
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random()* 255);
    let val3 = Math.ceil(Math.random()* 255);
    return `rgb(${val1} ${val2} ${val3})`
}
let a = setInterval(() => {
    console.log(a);
    document.querySelector(".box-2").style.background = getrandomcolor()
}, 1000);

clearTimeout(1);    

setInterval(() => {
    document.querySelector(".box-1").style.background = getrandomcolor()
}, 1000);
setInterval(() => {
    document.querySelector(".container").style.background = getrandomcolor()
}, 1000);
