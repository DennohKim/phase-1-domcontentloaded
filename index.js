



//Create the event
 const event = document.createEvent("Event");
 console.log(event);

 //Define the event name as DOMContentload
event.initEvent('DOMContentload',true,true);

//Listen to the event
document.addEventListener('DOMContentload', function(){
    document.querySelector("p").textContent = "This is really cool!";
    console.log("DOM has loaded!")
}, true);

const initialText = document.querySelector("p").textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";
console.log(initialText);

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered")



//Target can be any element or other event target
window.document.dispatchEvent(event);