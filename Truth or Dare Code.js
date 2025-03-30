/*Sarah Goodwin 3/2/2025*/
/*This game is going to use 2 functions because there are two buttons to choose from*/
function truth ()
/*This is the part of the first function of the game*/
{
    var truth = Math.ceil(Math.random() * 5);
    /*generate a random number between 0 and 5 and round up*/
   /*The next 5 lines set of variables to hold the 5 images.*/
    var truth1image = "Truth 1.png"
    var truth2image = "Truth 2.png"
    var truth3image = "Truth 3.png"
    var truth4image = "Truth 4.png"
    var truth5image = "Truth 5.png"
/* == means we need to test the value*/   
if (truth == 1)
    {
        document.getElementById("Truth").src = truth1image;
    }
else if (truth == 2)
    {
        document.getElementById("Truth").src = truth2image; 
    }
else if (truth == 3)
    {
        document.getElementById("Truth").src = truth3image;
    }
else if (truth == 4)
    {
        document.getElementById("Truth").src = truth4image;
    }
else if (truth == 5)
    {
        document.getElementById("Truth").src = truth5image;
    }

}
function dare () 
/*this is second function of the game*/
{
    var dare = Math.ceil(Math.random() * 5);
    /*generate a random number between 0 and 5 and round up*/
    /*The next 5 lines set of variables to hold the 5 images.*/
    var dare1image = "Dare 1.png"
    var dare2image = "Dare 2.png"
    var dare3image = "Dare 3.png"
    var dare4image = "Dare 4.png"
    var dare5image = "Dare 5.png"
/* == means we need to test the value*/
if (dare == 1)
    {
         document.getElementById("Dare").src = dare1image;
    }
else if (dare == 2)
    {
        document.getElementById("Dare").src = dare2image; 
    }
else if (dare == 3)
    {
        document.getElementById("Dare").src = dare3image;
    }
else if (dare == 4)
    {
        document.getElementById("Dare").src = dare4image;
    }
else if (dare == 5)
    {
        document.getElementById("Dare").src = dare5image;
    }


}
