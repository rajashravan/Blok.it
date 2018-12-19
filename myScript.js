
function findprofanity(input) {
var bad_words=[
"add",
"bad",
"words",
"here"
];
   var i = 0;
   var indexWord = 0;
   input=input.toLowerCase();
   input=input.replace(/[\W_]+/g," ");
   var in_words=input.split(' ');
   while (i < in_words.length)
   {
   		indexWord = bad_words.indexOf(in_words[i]);
       if (indexWord>=0)
       {
           return true;
       }
        i=i+1;
   }
   return false;
}

function all() {

//var x = document.getElementsByTagName('h1')[0].innerText;
//chrome.runtime.sendMessage(x);

var x = document.getElementsByTagName("*");
var i = 0;
var s = "";
//alert("sdf");
debugger;
console.log(i);

var prof;
var text = "hello";
var profCounter = 0;

prof == findprofanity(text);

while (x[i]) {
	text = x[i].innerText;	
	prof = findprofanity(text);
	if (prof) {
		profCounter += 1;
		/*
		s += text;
		s += " : ";
		s += "Profanity Found!!";
		s += "\n";
		*/
		x[i].style.color = "transparent";

		//x[i].setAttribute("unselectable", "on");
		x[i].onmousedown = "return false;";
		//x[i].onselectstart = "return false;";
		//x[i].innerHTML = " ";
		//x[i].style.text-shadow = "0 0 0.5em rgba(0,0,0,0.5)";
	}
	//alert(x[i].innerText);
	i += 1; //check if error here
}
//document.getElementsById("blockedCount").innerHTML = "sdf";

//document.getElementById("blockedCount").innerHTML = "Blocked: " + profCounter;
}
/*
function change() {
	document.getElementById("blockedCount").innerHTML = "Blocked: " + profCounter;
}
*/
document.addEventListener('DOMContentLoaded', all());
