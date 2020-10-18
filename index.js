
function play() {
var randomN1 = Math.floor(Math.random()*6)+1;
var img1= randomN1+".png";

var randomN2 = Math.floor(Math.random()*6)+1;
var img2= randomN2+".png";

var player1Img= document.querySelector("#img1");
player1Img.setAttribute("src",img1);

var player2Img= document.querySelector("#img2");
player2Img.setAttribute("src",img2);

var audio = new Audio('win.mp3');

if (randomN1>randomN2){
  document.querySelector("h2").innerHTML="Player One is THE WINNER ";
  document.querySelector("button").addEventListener("click",audio.play());
 }
 if (randomN1<randomN2){
   document.querySelector("h2").innerHTML="Player Two is THE WINNER ";
   document.querySelector("button").addEventListener("click",audio.play());
  }
  if (randomN1==randomN2){document.querySelector("h2").innerHTML="IT IS A DRAW , TRY AGAIN";}

}



//var limit = prompt("Enter the limit to generate sequance of Fibonacci"+0);

/*
function play() {
  var limit= document.getElementById("myText").value;
  var a= 0 ;
  var b= 1 ;
  var c= 0 ;
  var i = 2;
  var seq =[];

  seq.push(a);
  seq.push(b);
  if(limit==0){return "No elments apear becouse you entered 0";}
  if(limit==1){return 0;}
while( i< limit){
  c=a+b;
  seq.push(c);
  a=b;
  b=c;
  i++;
}
return(seq);
  }
*/
