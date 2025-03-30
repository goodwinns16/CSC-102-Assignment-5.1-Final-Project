//Sarah Goodwin 3/5/25;
function strings ()
{
    var string1 = document.getElementById("firstString").value 
    //var string2 = document.getElementById("secondString").value-->leaving this as a comment so I can refer back to it for my notes

    var str3 = string1 //+ string2; -->leaving this in the comments so I can refer back to it for my notes
    //document.getElementById("updates").innerHTML = "Concatenated string = " + str3;

    var len = str3.lenth;
    //document.getElementById("updates").innerHTML = "len of concat string = " +len;
    var subS = str3.substring(1,3);
    document.getElementById ("updates").innerHTML = "substring of str3 (1,3> = " + subS;
     
    var lowerC = str3.toLowerCase ();
        lowerC = lowerC.replace(/qwe/g, "asd");
    //var repJC = str3.replace(/qwe/g,"asd"); //replace qwe with asd, g means repeat for all occurrences of replace qwe. It is also case sensitive. to get around that
    document.getElementById("updates").innerHTML= "replace qwe with asd  " + lowerC;

    var splitStr = string1.split("");  

    var reverseStr = splitStr.reverse("");

    var joinStr = reverseStr.join("");
    //This is where the user will be notified on whether or not they created a palindrome;
    if (string1 == joinStr)
    {
        document.getElementById("updates").innerHTML = "Nice Palindrome! You just mirrored perfection!";   
    }

    else
    {
        document.getElementById("updates").innerHTML = "Not quite! Try flipping it--unless it's soup, because that just spills everywhere.";
    }

}