

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let current = this.innerHTML;
        evntListn(current);
        buttonclk(current);
    });
}
document.addEventListener("keydown",function(event){
    evntListn(event.key);
    buttonclk(event.key);
})

function evntListn(value){

    switch (value){
        case "w":
            var car = new Audio("./sounds/crash.mp3");
            car.play();
        break;
        case "a":
            var car = new Audio("./sounds/kick-bass.mp3");
            car.play();
        break;
        case "s":
            var car = new Audio("./sounds/snare.mp3");
            car.play();
        break;
        case "d":
            var car = new Audio("./sounds/tom-1.mp3");
            car.play();
        break;
        case "j":
            var car = new Audio("./sounds/tom-2.mp3");
            car.play();
        break;
        case "k":
            var car = new Audio("./sounds/tom-3.mp3");
            car.play();
        break;
        case "l":
            var car = new Audio("./sounds/tom-4.mp3");
            car.play();
        break;
        default: 
            console.log(current);
    }
}

function buttonclk(value){
    var letter = document.querySelector("." + value);
    letter.classList.add("pressed");

    setTimeout(function(){
        letter.classList.remove("pressed");
    },100);
}