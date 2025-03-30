//Sarah Goodwin 3/23/25
const flowers = [//I used const because I knew it wasn't a variable and would not be changing, I also 
    //wanted to be able to group all flowers together
    document.getElementById("flower0"),
    document.getElementById("flower1"),
    document.getElementById("flower2"),
];
const bee = document.getElementById("bee");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

let current = 0; //To track where the current flower index is
let intervalID = null;//to store interval id

function intervalStart() //Function for the Start Button 
{
    document.getElementById("startButton").disabled = true;//Stop Start
    document.getElementById("stopButton").disabled = false;//Enable Stop

    intervalID = setInterval (() => //starts a repeated action every 1.5 seconds
        {
            let flower = flowers [current];//allow the bee to grab the current flower
            
            bee.style.left = (flower.offsetLeft + 10) + "px";//this will allow bee to hover near the left of the flower
            bee.style.top = (flower.offsetTop - 10) + "px";//this allows bee to hover near just below the flower
            
            

            current = (current + 1) % flowers.length//this is the same as current flower + 1, moving to next flower
        }, 1500);//1500 = the # of ms before repeating pollinations

}

function intervalStop ()//Function for Stop Button
{
    document.getElementById("stopButton").disabled = true;//turned off stop button
    document.getElementById("startButton").disabled = false;//double negative turn off start button
    //buttons should toggle on and off
    clearInterval(intervalID);//this says to stop the interval loop
}