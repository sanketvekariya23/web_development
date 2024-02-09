let rand = Math.random();
// console.log(rand);

if(rand>0.01 & rand <0.330){
    document.getElementById("b1").style.backgroundColor = 'red';
}
else{
    document.getElementById("b1").style.backgroundColor = 'brown';
}
if(rand>0.330 & rand <0.666){
    document.getElementById("b2").style.backgroundColor = 'green';
}
else{
    document.getElementById("b2").style.backgroundColor = 'orange';
}
if(rand>0.666 & rand <0.800){
    document.getElementById("b3").style.backgroundColor = 'yello';
}
else{
    document.getElementById("b3").style.backgroundColor = 'black';
}
if(rand>0.8000 & rand <0.999){
    document.getElementById("b4").style.backgroundColor = 'blue';
}
else{
    document.getElementById("b4").style.backgroundColor = 'orange';
}