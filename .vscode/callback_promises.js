console.log('sanket 1');
console.log('sanket 2');

setTimeout(() => {
    console.log(' i am inside of the settimeout');
    console.log('this is indicate asynchronised nature of the java scritp ');
    // first sanket1 and sanket2 will execute it never wait for the settimeout
    // then sanket3 will executes
}, 1000);
console.log('sanket 3');


//call back
const fn = ()=>{
    console.log('i am second callback function ');
    
}
const callback= (arg , fn)=>{
    console.log(arg);
    fn()
}

const loadsrc = (src , callback)=>{
    let sc = document.createElement("script");
    sc.src = src;
    src.onload = callback("sanket" , fn);
    document.head.append(sc);
}

loadsrc(
    
    ```<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" integrity="sha512-UOoJElONeUNzQbbKQbjldDf9MwOHqxNz49NNJJ1d90yp+X9edsHyJoAs6O4K19CZGaIdjI5ohK+O2y5lBTW6uQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>```
    
    
    ,callback);