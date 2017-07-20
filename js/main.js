console.log("scripts.js active");

/***********  REFERENCES  ***************
STRING METHODS
https://www.w3schools.com/jsref/jsref_obj_string.asp
****************************************/


/***********  SCRIPT  ***************/
//Take the contents of the sonnet div and place it in a variable.
let sSonnet = document.getElementById('sonnet').innerText;
 
 //Find and output the starting position of the word "orphans".
function myIndex(){
	let index = sSonnet.indexOf("orphans");
	console.log("index", index);
	//Output the number of characters in the sonnet.
	let length = sSonnet.length; 
	//Replace the first occurance of the string "winter" with "yuletide".
	let winSwitch = sSonnet.replace("winter", "yuletide").innerHTML;
	document.getElementById("sonnet").innerHTML = winSwitch;
	//Replace all occurances of the string "the" with "a large".
	var largeSwitch = winSwitch.replace(/the/g, " a large");
	document.getElementById("sonnet").innerHTML = largeSwitch;
	//Set the content of the sonnet div with the new string.

}

/***********  FINAL COPY  ***************/
var sSonnet = document.getElementById('sonnet').innerText;

function myIndex(){
    var index = sSonnet.indexOf("orphans");
    console.log(index);
    var length = sSonnet.length;
    console.log (length);
    var winSwitch = sSonnet.replace("winter", "yuletide").replace(/ the /gi, " a large ");
    document.getElementById('sonnet').innerHTML = winSwitch;
}

myIndex();


