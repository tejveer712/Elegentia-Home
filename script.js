var read = document.getElementById("read-more");
var more = document.getElementById("more");
var dots = document.getElementById("dots");
var i=0;
read.addEventListener("click", function readFunction(){
  if(!i)
  {
    more.style.display="inline";
    read.innerHTML="Read Less";
    dots.style.display="none";
    i=1;
  }
  else
  {
    more.style.display="none";
    read.innerHTML="Read More";
    dots.style.display="inline";
    i=0;
  }
});

// var dark = document.getElementByClassName("btn");
// var j=0;
//
// dark.addEventListener("click", function changeTheme(){
//   if(j)
//   {
//     // body.style.backgroundColor="Black";
//     // body.style.textColor="White";
//     dark.innerHTML="Light";
//     j=1;
//   }
//   else{
//     // body.style.backgroundColor="White";
//     dark.innerHTML="Dark";
//     j=0;
//   }
// });

var helpTag = document.getElementByClassName("help-tag");
helpTag.addEventListener("click", function(){
  alert("For any queries contact us at ElegentiaServices.org");
});
