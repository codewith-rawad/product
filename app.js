var pi = document.getElementById('pi');
var container = document.querySelector(".container");
var items = [
    document.querySelector(".item1"),
    document.querySelector(".item2"),
    document.querySelector(".item3"),
    document.querySelector(".item4"),
    document.querySelector(".item5"),
    document.querySelector(".item6")
];

var back = [
    "rgb(235,117,117)",
    "rgb(48,48,48)",
    "rgb(104,130,152)",
    "rgb(104,130,152)",
    "rgb(149,136,128)",
    "rgb(143,146,147)",
];

var images = [
    "https://assets.codepen.io/1462889/ch1.png",
    "https://assets.codepen.io/1462889/ch2.png",
    "https://assets.codepen.io/1462889/ch3.png",
    "https://assets.codepen.io/1462889/ch4.png",
    "https://assets.codepen.io/1462889/ch5.png",
    "https://assets.codepen.io/1462889/ch6.png"
];


items.forEach(function(item, index) {
    item.addEventListener("click", function() {
        pi.src = images[index];
        container.style.backgroundColor = back[index];

       
        pi.style.animation = "move 0.8s forwards";

        
        setTimeout(function() {
            pi.style.animation = ""; 
        }, 800); 
    });
});
