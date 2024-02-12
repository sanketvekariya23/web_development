let url = "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA";
let description = "welcome to sigma batch | backand:web-Devlopement: Id and Class selector using javaScript ";
let Cname = "CodeWithHarry";
let view = 780000;
let time ="10:30";

if (view > 1000 & view < 1000000) {
    view = (view / 1000) + "k";
}
else if (view > 100000 & view < 10000000) {
    view = (view / 100000) + "M";
}

let duration = "1 month ago";
function video(URL, description, Cname, view, duration) {

    let html = 
    `<div class="img">
        <img src="${URL}"alt="load image">
            <div class= "time">
                ${time} 
            </div>
    </div>
    <div class="desc">
        ${description}<br>
        <p class="c-des"> ${Cname} - ${view} - ${duration}</p>
    </div>`

document.querySelector(".container").innerHTML =document.querySelector(".container").innerHTML +html ;
}

video(url, description, Cname, view, duration);

